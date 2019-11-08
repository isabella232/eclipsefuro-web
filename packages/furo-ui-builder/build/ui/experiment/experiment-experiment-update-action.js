// Code generated by @furo/ui-builder. DO NOT EDIT.
// source: ./ui_specs/experiment/experiment.experiment.update.action.spec
import {LitElement, html, css} from 'lit-element';
import {FBP} from "@furo/fbp";
import {Theme} from "@furo/framework/theme"
import {i18n} from "@furo/framework/i18n"
import '@furo/form';
import '@furo/input';
import '@furo/layout';


/**
 * service specs for the experiment api
 * triggers the events for the entity-agent (ExperimentService) which is located in the parent panel
 *
 * @customElement
 * @appliesMixin FBP
 */
class ExperimentExperimentUpdateAction extends FBP(LitElement) {

    constructor() {
        super();
        this._entity = {};
    }

    static get styles() {
        // language=CSS
         return Theme.getThemeForComponent('ActionBaseTheme') || css`
                :host {
                    display: block;
                }

                :host([hidden]) {
                    display: none;
                }

                furo-button-bar {
                    margin: var(--spacing);
                    padding-bottom: var(--spacing);
                }
            `
    }

    /**
     * Bind an entity data object. This will be forwarded to the furo-button-bar element inside this element.
     * The expected entity is of type experiment.ExperimentEntity
     *
     * @param entity
     */
    bindEntity(entity){
        if (entity) {
            this._entity = entity;
            this._FBPTriggerWire("--entityObjectInjected", this._entity);

            // if data is injected, get the available HATEOAS links and activate/deactivate action buttons
            this._entity.links.addEventListener('this-repeated-field-changed', (e) => {
                let rels = [];
                e.detail.__childNodes.forEach((item) => {
                    rels.push(item._value.rel);
                });

                let elems = this.shadowRoot.querySelectorAll('furo-button');
                elems.forEach((item) => {
                    if (item.getAttribute('rel') != null && item.getAttribute('rel').length > 0 && rels.indexOf(item.getAttribute('rel')) === -1){
                        item.setAttribute('hidden', '');
                    } else {
                        item.removeAttribute('hidden', '');
                    }
                });

            });
        }
    }

    startActivity(){
        let elems = this.shadowRoot.querySelectorAll('furo-button');
        elems.forEach((item) => {
            item.setAttribute('disabled', '');
        });
    }

    stopActivity(){
        let elems = this.shadowRoot.querySelectorAll('furo-button');
        let rels = [];
        this._entity.links.__childNodes.forEach((item) => {
            rels.push(item._value.rel);
        });
        elems.forEach((item) => {
            if (item.getAttribute('rel').length <= 0 || rels.indexOf(item.getAttribute('rel')) > -1){
                item.removeAttribute('disabled');
            }
        });
    }

    /**
     * @private
     * @returns {TemplateResult|TemplateResult}
     */
    render() {
        // language=HTML
        return html`
          <furo-button-bar ƒ-bind-entity="--entityObjectInjected">
           <furo-button rel="update" primary unelevated  label="${i18n.t('save')}" @-click="-^update-req"></furo-button>
           <furo-button rel="self" outline  label="${i18n.t('reload')}" @-click="-^self-req"></furo-button>
           <furo-empty-spacer ></furo-empty-spacer>
           <furo-button rel="reset" outline  label="${i18n.t('cancel')}" @-click="-^reset-req"></furo-button>
           <furo-button rel="delete" unelevated danger  label="${i18n.t('delete')}" @-click="-^delete-req"></furo-button>
          </furo-button-bar>
        `;
    }

}

window.customElements.define('experiment-experiment-update-action', ExperimentExperimentUpdateAction);
