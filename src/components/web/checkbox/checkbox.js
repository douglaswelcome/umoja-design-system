import {
    LitElement,
    html
  } from 'lit';
  import styles from './textfield.styles';
  import {
    classMap
  } from 'lit/directives/class-map.js';


  export default class UmojaWebCheckbox extends Litelement {
      static get styles(){
          return [styles];
      }

      static get properties() {
          return {
              type:{
                  type: String,
              },
              name:{
                  type: String,
              },
              disabled:{
                  type: Boolean,
              },
              id: {
                  type: String,
              },
              label: {
                  type: String,
              }
          }
      }
  }