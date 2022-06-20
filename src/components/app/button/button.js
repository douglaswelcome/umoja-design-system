import {LitElement, html} from 'lit';
import {classMap} from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './button.styles.js';

/**
 * Button.
 * @element umoja-btn
 */

export default class UmojaButton extends LitElement {
  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      kind: {type: String, reflect: true},
      title: {type: String, reflect: true},
      disabled: {type: Boolean, reflect: true},
      href: {type: String, reflect: true},
      target: {type: String, reflect: true},
      submit: {type: Boolean, reflect: true},
      download: {type: String},
      icon: {type: String, reflect: true}
    };
  }

  constructor() {
    super();
    this.kind = 'primary';
    this.disabled = false;
    this.submit = this.getAttribute('submit');
    if(this.submit){
      //TODO: future switch over to HTMLELement.attachInternals() method. Method only compatibile in Chrome as of 8/21
      const formAssociation = `<button class="umoja-u-form-association" type="submit"></button>`;
      this.insertAdjacentHTML('afterbegin', formAssociation);
    }
  }

  connectedCallback() {
    super.connectedCallback();
  }

  handleClick(e) {
    if (this.disabled) {
      e.preventDefault();
      e.stopPropagation();
    }
    if(this.submit){
      this.querySelector('.umoja-u-form-association').click();
      this.querySelector('.umoja-u-form-association').remove();
    }
  }

  render() {
    const {title, kind, disabled, href, target, submit, download, icon, handleClick} = this;
    let iconLayout = icon;
    iconLayout = (title ? false : true);

    return href
      ? html`
        <a
          class=${classMap({
            [`umoja-c-btn`]: true,
            [`umoja-c-btn--${kind}`]: kind,
            [`umoja-c-btn--disabled`]: disabled,
            [`umoja-c-btn--icon`]: iconLayout
          })}
          href=${ifDefined(href)}
          target=${ifDefined(target)}
          ?download=${ifDefined(download)}
          rel=${ifDefined(target ? 'noreferrer noopener' : undefined)}
          role="button"
          aria-disabled=${disabled ? 'true' : 'false'}
          tabindex=${disabled ? '-1' : '0'}
          @click=${handleClick}
        >
          ${icon ? html `<span class="material-icons">${icon}</span>`: ''}
          ${ifDefined(title)}        
        </a>
      `
      : html`
        <button 
          type=${submit ? 'submit' : 'button'}
          class=${classMap({
            [`umoja-c-btn`]: true,
            [`umoja-c-btn--${kind}`]: kind,
            [`umoja-c-btn--disabled`]: disabled,
            [`umoja-c-btn--icon`]: iconLayout
          })}
          ?disabled="${disabled}"
          @click=${handleClick}
        >
          ${icon ? html `<span class="material-icons">${icon}</span>`: ''}
          ${ifDefined(title)}
        </button>
    `;
  }
}

customElements.define('umoja-btn', UmojaButton);
