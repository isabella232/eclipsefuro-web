// Code generated by @furo/ui-builder. DO NOT EDIT.
import {  LitElement, html, css  } from 'lit';

import { FBP } from '@furo/fbp';

// eslint-disable-next-line no-unused-vars
import { i18n } from '@furo/framework/src/i18n.js';

import "@furo/data-input";
import "@furo/form";
import "../furo/furo-reference-form.js";
import "../projectmemberservice/person-person-reference-search.js";

/**
 * Options for possible filter values
 *
 * @summary todo: write summary
 * @customElement
 * @polymer
 * @appliesMixin FBP
 */
export class ProjectfilterProjectfilterForm extends FBP(LitElement) {


  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {

      // Header text to label the form
      headerText: {
        type: String,
        attribute: "header-text",
      },
      // Secondary text for a detailed description
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
    return  css`

      :host {
        display: block;
      }

      :host(.in-repeater) {
        border-bottom: 1px solid var(--separator, #FAFAFA);
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

      <!-- It is a good practice to set a description -->
      <furo-form header-text="${this.headerText?this.headerText:""}" secondary-text="${this.secondaryText?this.secondaryText:""}">

        <!-- It is a good practice to set a description -->
        <furo-form-layouter four>

          <!-- field: description -->
          <furo-data-text-input condensed double ƒ-bind-data="--data(*.description)" ƒ-focus="--focused"></furo-data-text-input>

          <!-- field: start -->
          <furo-data-date-input condensed double ƒ-bind-data="--data(*.start)"></furo-data-date-input>

          <!-- field: end -->
          <furo-data-date-input condensed double ƒ-bind-data="--data(*.end)"></furo-data-date-input>

          <!-- field: members -->
          <person-person-reference-search condensed full header-text="${i18n.t('form.projectfilter.projectfilter.members.header.text')}" secondary-text="${i18n.t('form.projectfilter.projectfilter.members.secondary.text')}" ƒ-bind-data="--data(*.members)"></person-person-reference-search>

          <!-- field: cost_limit -->
          <furo-data-money-input condensed double ƒ-bind-data="--data(*.cost_limit)"></furo-data-money-input>
        </furo-form-layouter>
      </furo-form>
    `;
  }
}

window.customElements.define('projectfilter-projectfilter-form', ProjectfilterProjectfilterForm);

