import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "dagre/dist/dagre.min"
import "./graph/furo-graph-renderer"

/**
 * `furo-show-flow`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/furo-show-flow.html
 * @appliesMixin FBP
 */
class FuroShowFlow extends FBP(LitElement) {

  constructor() {
    super();

  }

  parseTemplate(template) {
    this.graph = new dagre.graphlib.Graph({multigraph: false, compound: true});
    // graph settings
    this.graph.setGraph({"rankdir": "LR", "align": "UL", ranksep: 50, nodesep: 20, edgesep: 20,  marginx:20, marginy:20});

    this._collectedWires = {methods: [], events: []};
    this._recursiveParse(template, "");
    this._setWireEdges();
    dagre.layout(this.graph);

    this._FBPTriggerWire("--graph",this.graph);


  }

  _setWireEdges() {
    // extract the wire parts from all attributes
    let sendingWires = {};
    let receivingWires = {};
    this._collectedWires.events.forEach((attr) => {
      let rawwires = attr.value.split(",");
      rawwires.forEach((w) => {
        let match = w.trim().match(/^([^\(\(][a-z\-_]+)/gi);
        if (match !== null) {
          if (sendingWires[match[0]] === undefined) {
            sendingWires[match[0]] = []
          }
          sendingWires[match[0]].push(attr);
        }

      })
    });

    this._collectedWires.methods.forEach((attr) => {
      let rawwires = attr.value.split(",");
      rawwires.forEach((w) => {
        let match = w.trim().match(/^([^\(\(][a-z\-_]+)/gi);
        if (match !== null) {
          if (receivingWires[match[0]] === undefined) {
            receivingWires[match[0]] = []
          }
          receivingWires[match[0]].push(attr);
        }
      })
    });

    // setEdges for every sendingWire element with receivingWire element
    for(let wire in sendingWires){
      sendingWires[wire].forEach((source)=>{
        if(receivingWires[wire]){
          receivingWires[wire].forEach((target)=>{
            this.graph.setEdge(source._graphID,target._graphID,{weight: 1,source:source,target:target})
          })
        }
      });

    }
  }

  _recursiveParse(node, parentNode) {

    if (node.children.length > 0) {
      Array.from(node.children).forEach((e, i) => {
        let nodeID = parentNode + "." + e.tagName + "-" + i;

        e._graphID = nodeID;
        this.graph.setNode(nodeID, {label: e.tagName, width: 440, height: 100, type: "component", node: e});
        if (parentNode !== "") {
          //set parent
          this.graph.setParent(nodeID, parentNode)
        }
        // Attributes
        Array.from(e.attributes).forEach((attr) => {
          let attrNodeID = nodeID + "-" + attr.name;
          attr._graphID = attrNodeID;

          this.graph.setNode(attrNodeID, {
            label: attr.name,
            width: 200,
            height: 20,
            type: "attribute",
            attr: attr,
            value: attr.value
          });
          //eventuell noch einen edge setzen um @ immer rechts zu haben?

          this.graph.setParent(attrNodeID, nodeID);


          // add center node
          this.graph.setNode(nodeID + "-center",{type:"center"});
          this.graph.setParent(nodeID + "-center", nodeID);

          // collect the event wires
          if (attr.name.startsWith("@-")) {
            this._collectedWires.events.push(attr);
            attr._type = "event";
            this.graph.setEdge(nodeID + "-center",attrNodeID, {type:"center",weight: 15});
          }
          // collect the method wires
          if (attr.name.startsWith("ƒ-")) {
            this._collectedWires.methods.push(attr);
            attr._type = "method";
            this.graph.setEdge(attrNodeID, nodeID + "-center", {type:"center",weight: 15});
          }
        });
        this._recursiveParse(e, nodeID)
      })
    }
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      myBool: {type: Boolean}
    };
  }

  /**
   * flow is ready lifecycle method
   */
  __fbpReady() {
    super.__fbpReady();
    //this._FBPTraceWires()
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent(this.name) || css`
        :host {
            display: block;
            height: 100%;
        }

        :host([hidden]) {
            display: none;
        }
    `
  }


  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-graph-renderer ƒ-draw="--graph"></furo-graph-renderer>
    `;
  }
}

window.customElements.define('furo-show-flow', FuroShowFlow);
