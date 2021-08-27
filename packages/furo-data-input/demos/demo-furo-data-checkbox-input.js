import { LitElement, html, css } from 'lit';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

import '@furo/data/src/furo-data-object.js';
import '@furo/data/src/furo-deep-link';
import '@furo/layout/src/furo-horizontal-flex';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data-input/src/furo-catalog.js';
import './helper/produce-qp-data.js';
import '@furo/data/src/furo-entity-agent';

/**
 * `demo-furo-data-checkbox-input`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataCheckboxInput extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroDataCheckboxInput') ||
      css`
        :host {
          display: block;
          height: 100%;
          padding-right: var(--spacing);
        }

        :host([hidden]) {
          display: none;
        }

        furo-demo-snippet {
          height: 100%;
        }
      `
    );
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <h2>Demo furo-data-checkbox-input</h2>
      <p>
        Bind the field from furo-data-object with
        <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>. The labels, hints,
        defaults are comming from the furo-data-object specs.
      </p>
      <furo-demo-snippet>
        <template style="position: relative">
          <furo-data-checkbox-input
            label="console warning by invalid binding"
          ></furo-data-checkbox-input>
          <furo-data-checkbox-input
            label="bindable no matter Disabled"
            readonly="true"
            ƒ-bind-data="--entity(*.furo_data_checkbox_input)"
          >
          </furo-data-checkbox-input>
          <furo-data-checkbox-input
            style="position: relative;top:-8px"
            condensed
            label="condensed"
            hint="condensed hint"
            ƒ-bind-data="--entity(*.furo_data_checkbox_input)"
          >
          </furo-data-checkbox-input>
          <furo-data-checkbox-input></furo-data-checkbox-input>
          <furo-horizontal-flex space>
            <furo-data-checkbox-input
              autofocus
              ƒ-bind-data="--entity(*.furo_data_checkbox_input)"
              @-value-changed="--checkChanged"
              hint="the checked value will be sent to text input"
            ></furo-data-checkbox-input>

            <furo-text-input
              condensed
              label="wire the checkbox"
              ƒ-set-value="--checkChanged"
              float
            ></furo-text-input>
          </furo-horizontal-flex>

          <produce-qp-data @-data="--qp" qpescaped="%7B%22exp%22%3A1%7D"></produce-qp-data>

          <furo-data-object
            type="experiment.Experiment"
            @-object-ready="--entity"
            ƒ-inject-raw="--response(*.data)"
          ></furo-data-object>
          <furo-deep-link
            service="ExperimentService"
            @-hts-out="--hts"
            ƒ-qp-in="--qp"
          ></furo-deep-link>
          <furo-entity-agent
            service="ExperimentService"
            ƒ-hts-in="--hts"
            ƒ-load="--hts"
            ƒ-bind-request-data="--entity"
            @-response="--response"
          >
          </furo-entity-agent>

          <p>
            furo-data-checkbox-input with google wrapper and fat bindings.
          </p>
          <furo-form-layouter two>
            <furo-data-checkbox-input
              autofocus
              ƒ-bind-data="--entityU(*.data.wrapper_bool)"
            ></furo-data-checkbox-input>
            <furo-data-checkbox-input
              autofocus
              ƒ-bind-data="--entityU(*.data.wrapper_bool)"
            ></furo-data-checkbox-input>
            <furo-data-checkbox-input
              autofocus
              rows="6"
              condensed
              ƒ-bind-data="--entityU(*.data.fat_bool)"
            ></furo-data-checkbox-input>
            <furo-data-checkbox-input
              autofocus
              rows="6"
              condensed
              ƒ-bind-data="--entityU(*.data.fat_bool)"
            ></furo-data-checkbox-input>
          </furo-form-layouter>
          <fetch-universal-json
            file="/mockdata/tests/universalfieldnodebinder/fat-universal.json"
            @-data-loaded="--mockdata"
          ></fetch-universal-json>
          <fetch-universal-json
            file="/mockdata/tests/universalfieldnodebinder/fat-universal-demo.json"
            @-data-loaded="--mockdata"
          ></fetch-universal-json>
          <fetch-universal-json
            file="/mockdata/tests/universalfieldnodebinder/fat-universal-unset-label.json"
            @-data-loaded="--mockdata"
          ></fetch-universal-json>
          <fetch-universal-json
            file="/mockdata/tests/universalfieldnodebinder/fat-universal-with-meta.json"
            @-data-loaded="--mockdata"
          ></fetch-universal-json>

          <fetch-universal-json @-data-loaded="--mockdata"></fetch-universal-json>
          <furo-data-object
            type="universaltest.UniversaltestEntity"
            @-object-ready="--entityU"
            ƒ-inject-raw="--mockdata"
          ></furo-data-object>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-data-checkbox-input', DemoFuroDataCheckboxInput);
