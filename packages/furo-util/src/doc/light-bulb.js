import {LitElement, html, css} from 'lit';

import {FBP} from "@furo/fbp";

/**
 * `light-bulb`
 *
 *  This component is for the documentation
 *
 * @summary a light bulb for the documentation
 * @customElement
 * @appliesMixin FBP
 */
class LightBulb extends FBP(LitElement) {

  constructor() {
    super();
    this.off = true;
    this.color = "#fee753"
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
      off: {type: Boolean, reflect: true},
      on: {type: Boolean}
    };
  }

  set on(v){
    this.off = !v;
  }

  setColor(color){
    this.color = color;
    this.requestUpdate();
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
          display: inline-block;
          width: 96px;
          height: 96px;
          stroke: black;
          stroke-width: 0.1px;
        }

        :host([hidden]) {
            display: none;
        }

        :host([off])   {
          fill: transparent;

        }


    `
  }

  /**
   * toggles the light bulb on off
   */
  toggle() {
    this.off = !this.off;
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <style>
        :host {
          fill:${this.color}
        }

      </style>
      <svg id="furo-icon-svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></g></svg>
    `;
  }
}

window.customElements.define('light-bulb', LightBulb);
