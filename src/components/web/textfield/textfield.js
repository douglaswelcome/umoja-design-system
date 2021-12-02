import {LitElement, css, html} from 'lit';
import '@material/mwc-textfield';

export class UmojaCWebTextfield extends LitElement {
  static properties = {
    name: {},
  };
  // Define scoped styles right with your component, in plain CSS


  constructor() {
    super();
    // Declare reactive properties
    this.name = 'World';
  }

  // Render the UI as a function of component state
  render() {
    return html`<mwc-textfield label="My Textfield" icon="event"></mwc-textfield>`;
  }
}
customElements.define('umoja-c-web-textfield', UmojaCWebTextfield);
