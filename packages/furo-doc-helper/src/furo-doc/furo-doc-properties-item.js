import { LitElement, html, css } from 'lit';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
import '@furo/fbp/src/flow-repeat';

/**
 * `furo-doc-properties-item`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @appliesMixin FBP
 */
class FuroDocPropertiesItem extends FBP(LitElement) {
  constructor() {
    super();
    this.prop = {};
  }

  data(data) {
    this.prop = data;
    if (data.privacy === 'protected') {
      this.setAttribute('hidden', '');
    }
    if (data.privacy === 'private') {
      this.setAttribute('hidden', '');
    }

    this._FBPTriggerWire('--data', data);

    this.requestUpdate();
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
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FuroDocPropertiesItem') ||
      css`
        :host {
          display: block;
          font-size: 13px;
          margin-bottom: 36px;
        }

        :host([hidden]) {
          display: none;
        }
        span.default {
          color: green;
        }
        span.propname {
          font-family: 'Roboto Mono', 'Courier New', 'Courier', monospace;
          font-weight: 900;
        }
      `
    );
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    this.cname = this.prop.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    // language=HTML
    return html`
      <span class="propname">${this.cname}</span>
      <span class="propname">(${this.prop.name}):</span> ${this.prop.type} =
      <span class="default">${this.prop.defaultValue}</span> <i>${this.prop.inheritedFrom}</i>
      <furo-markdown ƒ-parse-markdown="--data(*.description)">></furo-markdown>
    `;
  }
}

window.customElements.define('furo-doc-properties-item', FuroDocPropertiesItem);