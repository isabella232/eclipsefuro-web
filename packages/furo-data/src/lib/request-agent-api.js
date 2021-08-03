import { Env } from '@furo/framework'
import { CommunicationApi } from './communication-api.js'
import { AgentHelper } from './AgentHelper.js'

export class RequestAgentApi {

  constructor() {
    this._servicedefinitions = Env.api.services
    this._commApi = new CommunicationApi()
    this._abortController = null

    this._service = ''
    this._requestDataObject = null
    /**
     *
     * @type {*|{headers: [[string, string]], specs: {}, services: {}}}
     * @private
     */
    this._ApiEnvironment = Env.api;
    /**
     *
     * @type {*[]}
     * @private
     */
    this._pendingRequests = []
    /**
     * queue for calls, before hts is set
     * @type {*[]}
     * @private
     */
    this._singleElementQueue = []
    /**
     *
     * @type {{}}
     * @private
     */
    this._queryParams = {}

    /**
     * triggers a load when link rel="self" is in the injected hts (after hts-injected is fired)
     * @type {boolean}
     */
    this.loadOnHtsIn = false;

  }

  setService(serviceName) {
    if (!this._servicedefinitions[serviceName]) {
      // eslint-disable-next-line no-console
      console.error(
        `service ${serviceName} does not exist`,
        this,
        'Available Services:',
        this._servicedefinitions,
      )
      return
    }
    this._service = this._servicedefinitions[serviceName]
    if (this._service.lifecycle && this._service.lifecycle.deprecated) {
      // eslint-disable-next-line no-console
      console.warn(
        `You are using a deprecated service (${serviceName}) ${this._service.lifecycle.info}`,
      )
    }
  }

  bindRequestObject(dataObject) {
    this._requestDataObject = dataObject
  }

  abortPendingRequests() {
    this._commApi.abortRequest(this._abortController)
  }

  htsIn(hts) {
    return new Promise((resolve, reject) => {
      if (this._updateInternalHTS(hts)) {
        resolve(this._hts)

        if (this.loadOnHtsIn) {
          this.load()
        }

        // there was a list,last,next call before the hts was set
        if (this._singleElementQueue.length > 0) {
          this._singleElementQueue.pop()
          this.load()
        }
      } else {
        reject()
      }
    })

  }

  /**
   * loads the entity if hts is available
   */
  load() {
    return new Promise((resolve, reject) =>{
      const hts = AgentHelper.checkServiceAndHateoasLinkError(this, 'self', 'Get');
      if (!hts) {
        reject(new Error('No link.Relation self found'));
      } else {
        this._commApi.invokeRequest(this._makeRequest(hts))
          .then((response)=>{
            resolve(response);
          })
          .catch((error) =>{
            reject(error);
          })
      }

    })

  }

  /**
   * Creates a Request object with header and body data
   * - special treatment for method PATCH
   * - body object only includes writeable fields
   * @param link
   * @param dataObject
   * @returns {Request}
   * @private
   */
  // eslint-disable-next-line no-unused-vars
  _makeRequest(link, dataObject, abortController) {

    /**
     * Preparation of the request payload
     * @type {string}
     */
    const data = this._prepareRequestPaylod(link, dataObject);

    // create Request object with headers and body
    const headers = new Headers(this._ApiEnvironment.headers);
    if (data) {
      headers.append('Content-Type', 'application/json; charset=utf-8');
    }

    const REL_NAME = link.rel.toLowerCase() === 'self' ? 'get' : link.rel.toLowerCase();

    // generate accept field for header
    const ACCEPT = AgentHelper.generateHeaderAccept(
      this,
      this._ApiEnvironment.services[link.service].services,
      REL_NAME,
    );

    if (ACCEPT) {
      headers.append('Accept', `${ACCEPT}`);
    }

    // get existing params from href and append query params
    const params = AgentHelper.getParams(this, link);

    // append query params to params
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const p in this._queryParams) {
      params[p] = this._queryParams[p];
    }

    // rebuild qp
    const qp = AgentHelper.rebuildQPFromParams(params);
    // generate req
    const req = AgentHelper.generateReq(link, qp);

    /**
     * The AbortController interface represents a controller object that allows you to abort one or more DOM requests as and when desired.)
     * https://developer.mozilla.org/en-US/docs/Web/API/AbortController
     * @type {AbortController}
     * @private
     */
    this._abortController = abortController || new AbortController();
    const { signal } = this._abortController;

    return new Request(req, {
      signal,
      method: link.method,
      headers,
      body: data,
    });
  }

  /**
   * Prepare request body depending from method
   * @param link
   * @param dataObject
   * @private
   */
  _prepareRequestPaylod(link, dataObject) {
    let body = {};

    /**
     * Check if dataObject is set
     * if TRUE => body object create
     * - Method PATCH: _deltaValue
     * - Method PUT: _transmitValue or sendAllDataOnMethodPut
     *
     * ELSE => @return undefined
     */
    if (dataObject) {
      // Method PATCH sends only modified data (.pristine)
      if (link.method.toLowerCase() === 'patch') {
        // eslint-disable-next-line guard-for-in,no-restricted-syntax
        for (const index in dataObject.__childNodes) {
          const field = dataObject.__childNodes[index];
          const val = field._deltaValue;
          if (val !== undefined) {
            // send null if null was set!!
            if (val !== null && typeof val === 'object' && !Array.isArray(val)) {
              body[field._name] = {};
              // eslint-disable-next-line guard-for-in,no-restricted-syntax
              for (const key in val) {
                if (val[key] !== null) {
                  body[field._name][key] = val[key];
                }
              }
            } else {
              body[field._name] = val;
            }
          }
        }

        // check for query field update_mask
        // todo: maybe proof one query param for type google.protobuf.FieldMask like grpc-gateway does it would be better
        if (this.appendUpdateMaskQP && this._service.services.Update.query.update_mask) {
          // add the field_mask
          this._queryParams.update_mask = this._getFieldMask(body).join(',');
        }
      } else if (Env.api.sendAllDataOnMethodPut && link.method.toLowerCase() === 'put') {
        body = dataObject._value;
      } else if (dataObject._spec && dataObject._spec.type === 'google.protobuf.Struct') {
        // if the data object is from type Struct, set the body to the value of the data object
        // this is necessary because a Struct doesn't have child nodes
        // otherwise, copy only the non-readonly fields to the body
        body = dataObject._value;
      } else {
        // eslint-disable-next-line guard-for-in,no-restricted-syntax
        for (const index in dataObject.__childNodes) {
          const field = dataObject.__childNodes[index];
          const val = field._transmitValue;
          if (val !== undefined) {
            body[field._name] = val;
          }
        }
      }

      // body = this._removeNullValues(body);
      return JSON.stringify(body);
    }
    return undefined;
  }

  /**
   *
   * @param hts
   * @return {boolean}
   * @private
   */
  _updateInternalHTS(hts) {
    // convert link object to hts array
    if (hts && hts.rel && hts.method && hts.type && hts.href) {
      // eslint-disable-next-line no-param-reassign
      hts = [hts]
    }

    if (hts && Array.isArray(hts)) {
      this._hts = []
      hts.forEach(link => {
        this._hts.push(link)
      })
      return true
    }
    return false
  }

}