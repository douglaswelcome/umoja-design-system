import {LitElement, html} from 'lit';
import styles from './radio-button-group.styles.js';

/**
 * Radio Button Group.
 * @element umoja-radio-btn-group
 */

export default class UmojaRadioButtonGroup extends LitElement {
    static get styles() {
        return [styles];
    }

    static get properties() {
        return {
            name: {type: String, reflect: true},
            orientation: {type: String, reflect: true},
            labelPosition: {type: String, reflect: true},
            value: {type: String},
            radios: {type: Array},
            theme: {type: String, reflect: true}
        };
    }
      
    constructor() {
        super();
        this.name = this.getAttribute('name');
        this.theme = this.getAttribute('theme');
        this.value = this.getAttribute('value');

        this.addEventListener('umoja-radio-btn-checked', this.handleRadioButtonChange.bind(this));
        this.addEventListener('umoja-radio-btn-keyevent', this.handleRadioButtonKeyEvent.bind(this));
    }
    
    connectedCallback() {
        super.connectedCallback();

        //TODO: future switch over to HTMLELement.attachInternals() method. Method only compatibile in Chrome as of 8/21
        this.insertAdjacentHTML('beforeend', `<input class="umoja-u-form-association" type="hidden" name="${this.name}">`);
    }

    firstUpdated(){
        const formAssociation = this.querySelector('.umoja-u-form-association');
        this.radios = Array.from(this.getElementsByTagName('umoja-radio-btn'));
        if( !this.value && formAssociation.value ){
            this.value = formAssociation.value;
        }
    }

    updated(changedProperties){
        this.radios.map((radio) => {
            if( changedProperties.has('value') ){
                const radioValue = radio.value;
                if(radioValue == this.value){
                    radio.setAttribute('checked', 'checked');
                    this.querySelector('.umoja-u-form-association').setAttribute('value', radioValue);
                }else if((radioValue != this.value) && radio.hasAttribute('checked')){
                    radio.removeAttribute('checked')
                }
            }
            if(changedProperties.has('name')){
                radio.setAttribute('name', this.name);
                this.querySelector('.umoja-u-form-association').setAttribute('name', this.name);
            }
            if(changedProperties.has('theme')){
                if(this.theme){
                    radio.setAttribute('theme', this.theme);
                }else if(!this.theme && radio.hasAttribute('theme')){
                    radio.removeAttribute('theme');
                }
            }
        });

        return changedProperties;
    }

    handleRadioButtonChange(e){
        const newRadio = e.detail.radio;
        const oldRadio = this.radios.find(radio => radio.checked);
        this.manageRadios(oldRadio, newRadio);
    }

    handleRadioButtonKeyEvent(e){
        let direction;
        const oldRadio = this.radios.find(radio => radio.checked);
        const oldRadioIndex = this.radios.findIndex(radio => radio.checked);

        switch (e.detail.key) {
            case 37 || 38: //up or left
                direction = -1;
                break;
            case 39 || 40: //down or right
                direction = 1;
                break;
        }

        const newRadio = this.radios[oldRadioIndex + direction];
        this.manageRadios(oldRadio, newRadio);
    }

    manageRadios(oldRadio, newRadio) {
        if(!newRadio) return;
        const newValue = newRadio.value;
        const oldValue = this.value;

        if (oldValue !== newValue) {
            if( oldRadio ) oldRadio.checked = false;
            newRadio.checked = true;
            this.value = newValue;
            this.dispatchEvent(
                new CustomEvent('umoja-radio-btn-group-change', {
                    bubbles: true,
                    composed: true,
                    detail: {
                        value: newValue,
                    },
                })
            );
        }
    }

    render() {
        return html `
            <slot></slot>
        `;
    }
}

window.customElements.define('umoja-radio-btn-group', UmojaRadioButtonGroup);