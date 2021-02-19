import { LitElement, html, css } from 'lit-element';
import { Env } from '@furo/framework/src/furo.js';

/**
 * `display-google-type-date`
 * The display-google-type-date component displays a FieldNode of type `google.type.Date` in read only mode.
 *
 * The component uses locale from the environment to display the date value accordingly.
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 * - attribute: tabular-form (this attribute is set, if the component is inside of a furo-data-table. This attribute is only needed, if the styling inside of a table is different)
 *
 * @summary
 * @customElement
 * @demo demo display-google-type-date Basic Usage
 */
class DisplayGoogleTypeDate extends LitElement {
  constructor() {
    super();
    this._field = undefined;
    this._formattedDateString = '';
  }

  static get styles() {
    // language=CSS
    return [
      css`
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
      `,
    ];
  }

  /**
   * Binds a field node to the component
   * @param fieldNode
   */
  bindData(fieldNode) {
    this._field = fieldNode;

    if (this._field) {
      this._field.addEventListener('field-value-changed', () => {
        this._formattedDateString = DisplayGoogleTypeDate._convertDateToString(this._field);
        this.requestUpdate();
      });
    }

    this._formattedDateString = DisplayGoogleTypeDate._convertDateToString(this._field);
  }

  /**
   * convert date object to String according to Intl DateTimeFormat
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
   * Example output: locale de-CH 31.12.2021
   * @param date
   * @returns {string}
   * @private
   */
  static _convertDateToString(fieldNode) {
    const date = new Date(
      Date.UTC(fieldNode.year._value, fieldNode.month._value - 1, fieldNode.day._value, 0, 0, 0, 0),
    );
    return new Intl.DateTimeFormat([Env.locale, 'de-CH'], {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(date);
  }

  /**
   * Template logic
   * @returns {*}
   * @private
   */
  _getTemplate() {
    return html` <span>${this._formattedDateString}</span> `;
  }

  /**
   * render function
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html` ${this._getTemplate()} `;
  }
}

window.customElements.define('display-google-type-date', DisplayGoogleTypeDate);
