// Code generated by @furo/ui-builder. DO NOT EDIT.
import {  LitElement, html, css  } from 'lit';

import {  FBP  } from '@furo/fbp';

// eslint-disable-next-line no-unused-vars
import {  i18n  } from '@furo/framework/src/i18n.js';

import "@furo/data-input";
import "@furo/form/src/furo-form-layouter.js";
import "@furo/input/src/furo-button.js";
import "@furo/app/src/furo-card.js";
import "@furo/layout/src/furo-horizontal-flex.js";

/**
 * Number type with embedded meta
 *
 * @summary todo: write summary
 * @customElement
 * @polymer
 * @appliesMixin FBP
 */
export class FuroNumberpropertyCreateWidget extends FBP(LitElement) {



  // Fokus
  focus(d) {
    this._FBPTriggerWire('--focused', d)
  }


  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
  }


  /**
   *  Bind your furo-data-object event @-object-ready
   * @public
   * @param data
   */
  bindData(data) {
    this._FBPTriggerWire('--data', data);
    this.field = data;
  }


  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return css`

      :host {
        display: block;
      }

      :host([hidden]) {
        display: none;
      }

    `
  }


  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`

      <!-- The card is the main container -->
      <furo-card>

        <!-- the form layouter will contain all required fields -->
        <furo-form-layouter></furo-form-layouter>

        <!-- It is a good practice to set a description -->
        <furo-horizontal-flex space slot="action">

          <!-- It is a good practice to set a description -->
          <furo-button primary label="${i18n.t('create')}" rel="create" @-click="-^create-requested"></furo-button>
        </furo-horizontal-flex>
      </furo-card>
    `;
  }
}

window.customElements.define('furo-numberproperty-create-widget', FuroNumberpropertyCreateWidget);

