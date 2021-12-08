import {
  LitElement,
  html
} from 'lit';
import styles from './textfield.styles';
import {
  classMap
} from 'lit/directives/class-map.js';

export default class UmojaCWebTextfield extends LitElement {
  static get styles() {
    return [styles];
  }

  // properties getter
  static get properties() {
    return {
      type: {
        type: String,
      },
      label: {
        type: String,
      },
      value: {
        type: String,
      },
      disabled: {
        type: Boolean,
      },
      outline: {
        type: Boolean,
      },
      placeholder: {
        type: String,

      },
      classes: {}

    };
  }



  constructor() {
    super();
    // initialize the properties
    this.value = "";
    this.disabled = false;
    this.placeholder = "";
    this.classes = {
      hover: false,
      filled: false
    };

    this.addEventListener('blur', this.inputFilled);

  }


  // Render the UI as a function of component state
  render() {
    return html `
    <div class="umoja-c-web-textfield__wrap">
    <input
      class=${classMap(this.classes)}
      @input=${this.inputHandler}
      type="${this.type}"
      placeholder="${this.placeholder}"
      .value=${this.value}
      ?disabled="${this.disabled}"
   
      
    />
    <label>${this.label}</label>
    </div>
    `;
  }

  inputFilled (e) {
    let input = this.shadowRoot.querySelector('input');
    
    if (input.value) {
      input.classList.add("filled") 
    } else {
      input.classList.remove("filled") 
    }
  }

  inputHandler(event) {
    this.dispatchEvent(
      new CustomEvent("val-change", {
        detail: {
          value: event.composedPath()[0].value
        }
      })
    );
  }
}
customElements.define('umoja-c-web-textfield', UmojaCWebTextfield);
