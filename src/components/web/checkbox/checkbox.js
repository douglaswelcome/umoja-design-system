import {
  LitElement,
  html
} from 'lit';
import styles from './checkbox.styles';
import {
  classMap
} from 'lit/directives/class-map.js';


export default class UmojaCWebCheckbox extends LitElement {
  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      type: {
        type: String,
      },
      name: {
        type: String,
      },
      checked: {
        type: Boolean,
      },
      disabled: {
        type: Boolean,
      },
      id: {
        type: String,
      },
      label: {
        type: String,
      },
      classes: {}
    }
  }

  constructor() {
    super();
    // initialize the properties
    this.disabled = false;
    this.name = "";
    this.classes = {};
    this.checked = false;
    this.tabIndex = 0;
    this.label = "Label"

  }

  connectedCallback() {
    super.connectedCallback();      
  }

  render() {
    return html `
        <label for=${this.name} class="__label"> 
            <input 
            type="checkbox"
            id=${this.name} 
            name=${this.name}
            class=${classMap(this.classes)}
            ?disabled="${this.disabled}"
            .checked="${this.checked}"
            aria-checked=${this.checked}
            >
            
            ${this.label}

            <span class="__checkmark"></span>


        </label>
    `
  }
  




}

customElements.define('umoja-c-web-checkbox', UmojaCWebCheckbox);
