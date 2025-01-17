import { LitElement, css } from 'lit';
import { Config } from './lib/Config.js';

/**
 * `furo-config`
 *
 *  Access config data
 *
 *
 * ```html
 * <!-- set with config-loader -->
 * <furo-config-loader
 *     section="views"
 *     src="/viewconfig.json"
 *     ></furo-config>
 *
 *
 * <!-- consume a config -->
 * <furo-config
 *     section="views" @-config-updated="--conf"
 *     ></furo-config>
 *
 * <!-- consume a sub path of a config section -->
 * <furo-config
 *     section="views.subset.deep" @-config-updated="--deepconf"
 *     ></furo-config>
 * ```
 *
 * @fires {config.section} config-updated - Fired when section changed
 * @summary config access
 * @customElement
 */
class FuroConfig extends LitElement {
  constructor() {
    super();
    /**
     * The current section of the config, which was defined by `section`.
     */
    this.config = Config;
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * section of the config object that you are interested in
       *
       * access deep object with dots like `main.sub.sub`
       */
      section: { type: String },
    };
  }

  set section(val) {
    Config.watch(val, section => {
      const customEvent = new Event('config-updated', { composed: true, bubbles: true });
      customEvent.detail = section.detail._value;
      this.dispatchEvent(customEvent);
    });
  }

  static get styles() {
    // language=CSS
    return css`
      :host {
        display: none;
      }
    `;
  }
}

window.customElements.define('furo-config', FuroConfig);
