import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp/src/fbp.js';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/ui5/src/furo-catalog.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-collection-agent.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-deep-link.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/form/src/furo-form-layouter.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data-input/demos/helper/produce-qp-data.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@ui5/webcomponents-icons/dist/project-definition-triangle-2';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/ui5-typerenderer/src/registry.js';
import './helper/data-table-col-tmpl.js';
import './helper/data-table-col-tmpl-link.js';

/**
 * `demo-furo-ui5-data-table-tmpl`
 *
 * @Summary basic usage
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5DataTableTmpl extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (

      css`
        :host {
          display: block;
          height: 100%;
          padding-right: var(--spacing);
          --furo-form-layouter-row-gap: var(--spacing-xs);
          --_ui5_input_width: 24px;
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
      <h2>Demo furo-ui5-data-table-tmpl</h2>
      <furo-demo-snippet>
        <template>
          <furo-ui5-card
            heading="Display Data in Tabular Form"
            subheading="Add custom template columns"
            icon="project-definition-triangle-2"
          >
            <furo-ui5-data-table
              slot="content"
              no-data-text="No data available. Click on load test data"
              ƒ-bind-data="--dao(*.entities)"
              @-template-col-clicked="--rowData"
            >
              <ui5-table-column slot="columns" field="*.data.id"></ui5-table-column>
              <ui5-table-column slot="columns" field="*.data.display_name"></ui5-table-column>
              <ui5-table-column slot="columns" field="*.data.cost_limit"></ui5-table-column>
              <ui5-table-column slot="columns" field="*.data.start"></ui5-table-column>
              <ui5-table-column slot="columns" field="*.data.end"></ui5-table-column>
              <ui5-table-column
                slot="columns"
                renderer="data-table-col-tmpl"
                field="*.data"
              ></ui5-table-column>
            </furo-ui5-data-table>
          </furo-ui5-card>

          <furo-ui5-button-bar>
            <furo-empty-spacer></furo-empty-spacer>
            <produce-qp-data @-data="--qp" qpescaped="%7B%22prj%22%3A1%7D"></produce-qp-data>
          </furo-ui5-button-bar>

          <furo-pretty-json ƒ-inject-data="--rowData"></furo-pretty-json>

          <furo-data-object
            type="project.ProjectCollection"
            @-object-ready="--dao"
            ƒ-inject-raw="--response"
          ></furo-data-object>
          <furo-deep-link
            service="ProjectService"
            @-hts-out="--hts"
            ƒ-qp-in="--qp"
          ></furo-deep-link>
          <furo-collection-agent
            service="ProjectService"
            ƒ-hts-in="--hts"
            list-on-hts-in
            @-response="--response"
          >
          </furo-collection-agent>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-ui5-data-table-tmpl', DemoFuroUi5DataTableTmpl);
