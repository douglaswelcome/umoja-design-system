import {LitElement, html} from 'lit';
import {classMap} from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './radio-button.styles.js';

/**
 * Radio Button.
 * @element umoja-radio-btn
 */

export default class UmojaRadioButton extends LitElement {
  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      img: {type: String, reflect: true},
      label: {type: String, reflect: true},
      name: {type: String, reflect: true},
      value: {type: String, reflect: true},
      disabled: {type: Boolean, reflect: true},
      checked: {type: Boolean, reflect: true},
      theme: {type: String, reflect: true}
    };
  }

  constructor() {
    super();
    this.disabled = false;
    this.checked = false;
    this.addEventListener('click', this.handleClick);
  }

  connectedCallback() {
    super.connectedCallback();
  }

  handleClick(e) {
    const { target } = e;
    if (target.disabled) {
        e.preventDefault();
        e.stopPropagation();
    }

    target.tabIndex = this.checked ? 0 : -1;

    if(!this.checked){
      let event = new CustomEvent('umoja-radio-btn-checked', {
        bubbles: true,
        composed: true,
        detail: {
          radio: this
        },
      })
      this.dispatchEvent(event);
    }
  }

  handleKeyEvent(e) {
    e.preventDefault();

    let event = new CustomEvent('umoja-radio-btn-keyevent', {
      bubbles: true,
      composed: true,
      detail: {
        radio: this,
        key: e.keyCode
      },
    })
    this.dispatchEvent(event);
  }

  set img(value) {
    if(value){
      this.style.setProperty("--backgroundImg", `url(${value})`);
    }
  }

  get img() {
    return this.style.getPropertyValue("--backgroundImg");
  }

  updated() {
    let input = this.shadowRoot.querySelector('.umoja-c-radio-btn');
    input.focus();
  }

  render() {
    const {img, label, disabled, checked, name, value, theme, handleClick, handleKeyEvent} = this;

    return html`
        <div 
          class= ${classMap({
            [`umoja-c-radio-btn__container`]: true,
            [`umoja-c-radio-btn--${theme}`]: theme,
            ['umoja-c-radio-btn--img']: img
          })}
        >
          <input
            type="radio"
            class= "umoja-c-radio-btn"
            .checked="${checked}"
            name=${ifDefined(name)}
            value=${ifDefined(value)}
            ?disabled="${disabled}"
            @click="${handleClick}"
            @keyup="${handleKeyEvent}"
            tabIndex="${checked ? 0 : -1}"
          />
          <label for="" class= "umoja-b-label umoja-c-radio-btn__label">
            ${img ?
              html`
              <div class="umoja-c-radio-btn--img__top">
                <span class="umoja-c-radio-btn__appearance"></span>
              </div>`
            :
            html`
              <span class="umoja-c-radio-btn__appearance"></span>
            `
            }
            <span class="umoja-c-radio-btn__label-txt">${label}</span>
          </label>
        </div>
    `;
  }
}

window.customElements.define('umoja-radio-btn', UmojaRadioButton);