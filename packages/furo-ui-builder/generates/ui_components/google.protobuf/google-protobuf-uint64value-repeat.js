// Code generated by @furo/ui-builder. DO NOT EDIT.
import {  LitElement, html, css  } from 'lit-element';
import { Theme } from '@furo/framework/src/theme.js';
import { FBP } from '@furo/fbp';

// eslint-disable-next-line no-unused-vars
import { i18n } from '@furo/framework/src/i18n.js';

import "@furo/data-input";
import "@furo/form";
import "./google-protobuf-uint64value-form.js";

/**
 * Wrapper message for `uint64`.  https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/wrappers.proto
 *
 * @summary todo: write summary
 * @customElement
 * @polymer
 * @appliesMixin FBP
 */
export class GoogleProtobufUint64valueRepeat extends FBP(LitElement) {

  
  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {

      // Header text of the form
      headerText: {
        type: String,
        attribute: "header-text",
      },
      // Secondary text of the form
      secondaryText: {
        type: String,
        attribute: "secondary-text",
      },
    }
  }

  // Fokus
  focus(d) {
    this._FBPTriggerWire('--focused', d)
  }
  

  /**
   * flow is ready lifecycle method
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
    return Theme.getThemeForComponent("RepeatBaseTheme") || css`
      
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none;
      }

      furo-button {
        margin: 12px 0 0 6px;
      }

      furo-horizontal-flex {
        margin-bottom: 6px;
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

      <!-- It is a good practice to set a description -->
      <hr></hr> 

      <!-- It is a good practice to set a description -->
      <furo-form header-text="${this.headerText}" secondary-text="${this.secondaryText}"></furo-form> 

      <!-- the core of the repeat item is the form -->
      <furo-data-repeat delete-icon="delete" repeated-component="google-protobuf-uint64value-form" ƒ-add="--adderTriggered" ƒ-bind-data="--data"></furo-data-repeat> 

      <!-- It is a good practice to set a description -->
      <furo-horizontal-flex>

        <!-- It is a good practice to set a description -->
        <span flex></span> 

        <!-- It is a good practice to set a description -->
        <furo-button outline label="Add UInt64Value" @-click="--adderTriggered"></furo-button> 
      </furo-horizontal-flex> 
    `;
  }
}

window.customElements.define('google-protobuf-uint64value-repeat', GoogleProtobufUint64valueRepeat);

