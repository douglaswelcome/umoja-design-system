import {
  LitElement,
  html
} from 'lit';
import styles from './textfarea.styles';
import {
  classMap
} from 'lit/directives/class-map.js';

export default class UmojaCWebTextarea extends LitElement {
  static get styles() {
    return [styles];
  }

  // properties getter
  static get properties() {
    return {
      type: {
        type: String,
      },
      name: {
        name: String,
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
      rows: {
        type: Number,
      },
      cols: {
        type: Number,
      },
      classes: {}

    };
  }



  constructor() {
    super();
    // initialize the properties
    this.type = "text"
    this.name = "";
    this.value = "";
    this.disabled = false;
    this.placeholder = "";
    this.label = "Label"
    this.classes = {
      hover: false,
      filled: false
    };
    this.rows = 3
    this.cols = 35

    this.addEventListener('blur', this.areaFilled);
    this.addEventListener('focus', this.areaFocused);

  }


  // Render the UI as a function of component state
  render() {
    return html `
    <div class="__wrap">
    
    <label for=${this.name}>${this.label}</label>
    <textarea
      class=${classMap(this.classes)}
      @input=${this.inputHandler}
      type=${this.type}
      name=${this.name}
      id=${this.name}
      placeholder="${this.placeholder}"
      .value=${this.value}
      ?disabled="${this.disabled}"
      cols="${this.cols}"
      rows="${this.rows}"
   
    >
    ${this.value}
    </textarea>


    
    </div>
    `;
  }

  areaFocused (e) {
    let wrap = this.shadowRoot.querySelector('.__wrap');

    if (document.activeElement === this) {
      wrap.classList.add("filled");
    } else {
      wrap.classList.remove("filled");
    }
  }


  areaFilled (e) {
    let textarea = this.shadowRoot.querySelector('textarea');
    let wrap = this.shadowRoot.querySelector('.__wrap');
    
    if (textarea.value) {
      wrap.classList.add("filled") 
    } else {
      wrap.classList.remove("filled") 
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
customElements.define('umoja-c-web-textarea', UmojaCWebTextarea);
