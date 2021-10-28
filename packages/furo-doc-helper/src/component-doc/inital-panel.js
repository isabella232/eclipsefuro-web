import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';

/**
 * `inital-panel`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement

 * @appliesMixin FBP
 */
class InitalPanel extends FBP(LitElement) {
  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
  }

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
          background-color: var(--surface);
          padding: var(--spacing);
          height: 100%;
          overflow: scroll;
          box-sizing: border-box;
          position: relative;
        }

        :host([hidden]) {
          display: none;
        }
      `
    );
  }

  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <furo-markdown mdsrc="README.md"></furo-markdown>
    `;
  }
}

window.customElements.define('inital-panel', InitalPanel);
