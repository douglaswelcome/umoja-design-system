import {css} from 'lit';
import globalCSS from '../../styles/global-styles.js';

export default css`
  ${globalCSS}
  :host-context(umoja-radio-btn-group){
    margin-right: 1rem;
  }
  .umoja-c-radio-btn__container{
    display: inline-block;
    position: relative;
  }

  .umoja-c-radio-btn{
    width: 100%;
    height: 100%;
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
    z-index: 1;
  }

  .umoja-c-radio-btn__label{
    display: inline-grid;
    grid-template-columns: 1rem auto;
    align-items: center;
    grid-column-gap: 0.5rem;
    position: relative;
    transition: all 0.15s linear;
  }

  .umoja-c-radio-btn__appearance{
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border: 1px solid var(--color-charcoal3);
    border-radius: 50%;
    background-color: var(--color-charcoal1);
    position: relative;
  }

  .umoja-c-radio-btn__appearance:before{
    content: "";
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: var(--color-charcoal5);
    position: absolute;
    position: absolute;
    top: 0;
    left: 0;
    transform: scale(0);
  }

  /* states */
  .umoja-c-radio-btn:hover:enabled ~ .umoja-c-radio-btn__label,
  .umoja-c-radio-btn:checked ~ .umoja-c-radio-btn__label{
    color: #FFF
  }

  .umoja-c-radio-btn:active:enabled ~ .umoja-c-radio-btn__label .umoja-c-radio-btn__appearance,
  .umoja-c-radio-btn:focus:enabled ~ .umoja-c-radio-btn__label .umoja-c-radio-btn__appearance{
    box-shadow: 0px 0px 0px 3px rgba(73, 55, 120, 0.4); /*purple glow*/
  }

  .umoja-c-radio-btn:disabled{
    cursor: not-allowed;
  }

  .umoja-c-radio-btn:disabled ~ *{
    opacity: 0.5;
  }

  /* checked */
  .umoja-c-radio-btn:checked ~ .umoja-c-radio-btn__label .umoja-c-radio-btn__appearance{
    border-color: var(--color-purple2);
  }

  .umoja-c-radio-btn:checked ~ .umoja-c-radio-btn__label .umoja-c-radio-btn__appearance:before{
    transform: scale(0.66);
  }

  /* image layout */
  .umoja-c-radio-btn--img .umoja-c-radio-btn__label{
    grid-template-columns: 1fr;
    grid-template-rows: 88px auto;
    min-width: 175px;
    border: 2px solid var(--color-charcoal0);
    border-radius: 10px;
    overflow: hidden;
  }

  .umoja-c-radio-btn--img .umoja-c-radio-btn__label > *{
    padding: 0.5rem 1rem;
  }

  .umoja-c-radio-btn--img__top{
    width: 100%;
    height: 100%;
    background: var(--backgroundImg) no-repeat center / cover;
  }
  .umoja-c-radio-btn--img .umoja-c-radio-btn__label-txt{
    text-align: center;
    background-color: var(--color-charcoal3);
  }

  .umoja-c-radio-btn--img .umoja-c-radio-btn:focus:enabled ~ .umoja-c-radio-btn__label .umoja-c-radio-btn__appearance{
    box-shadow: none;
  }

  .umoja-c-radio-btn--img .umoja-c-radio-btn:checked ~ .umoja-c-radio-btn__label{
    border-color: var(--color-purple2);
  }

  /* themes */
  .umoja-c-radio-btn--light .umoja-c-radio-btn__appearance{
    background-color: #FFF;
    border: 2px solid var(--color-charcoal0);
  }

  .umoja-c-radio-btn--light .umoja-c-radio-btn__appearance:before{
    background-color: var(--color-purple1);
  }

  .umoja-c-radio-btn--light .umoja-c-radio-btn__label-txt{
    color: var(--color-charcoal0);
    font-weight: 600;
  }

  .umoja-c-radio-btn--light .umoja-c-radio-btn:hover:enabled ~ .umoja-c-radio-btn__label .umoja-c-radio-btn__appearance,
  .umoja-c-radio-btn--light .umoja-c-radio-btn:active:enabled ~ .umoja-c-radio-btn__label .umoja-c-radio-btn__appearance,
  .umoja-c-radio-btn--light .umoja-c-radio-btn:focus:enabled ~ .umoja-c-radio-btn__label .umoja-c-radio-btn__appearance{
    background-color: rgb(0 0 0 / 10%);
  }

  .umoja-c-radio-btn--light .umoja-c-radio-btn:hover:enabled ~ .umoja-c-radio-btn__label .umoja-c-radio-btn__appearance{
    box-shadow: -3px 3px 0px rgba(0, 0, 0, 0.1);
  }

  .umoja-c-radio-btn--light .umoja-c-radio-btn:active:enabled ~ .umoja-c-radio-btn__label .umoja-c-radio-btn__appearance,
  .umoja-c-radio-btn--light .umoja-c-radio-btn:focus:enabled ~ .umoja-c-radio-btn__label .umoja-c-radio-btn__appearance{
    box-shadow: none;
  }

  .umoja-c-radio-btn--light .umoja-c-radio-btn:checked ~ .umoja-c-radio-btn__label .umoja-c-radio-btn__appearance{
    border-color: var(--color-purple1);
  }

  .umoja-c-radio-btn--light.umoja-c-radio-btn--img .umoja-c-radio-btn__label-txt{
    background-color: #FFF;
  }

  .umoja-c-radio-btn--light.umoja-c-radio-btn--img .umoja-c-radio-btn:hover:enabled ~ .umoja-c-radio-btn__label{
    box-shadow: -3px 3px 0px rgba(0, 0, 0, 0.1);
  }

  .umoja-c-radio-btn--light.umoja-c-radio-btn--img .umoja-c-radio-btn:hover:enabled ~ .umoja-c-radio-btn__label .umoja-c-radio-btn__appearance{
    background-color: #EAEAEA;
    box-shadow: none;
  }

  .umoja-c-radio-btn--light.umoja-c-radio-btn--img .umoja-c-radio-btn:active:enabled ~ .umoja-c-radio-btn__label .umoja-c-radio-btn__appearance,
  .umoja-c-radio-btn--light.umoja-c-radio-btn--img .umoja-c-radio-btn:focus:enabled ~ .umoja-c-radio-btn__label .umoja-c-radio-btn__appearance{
    background-color: #EAEAEA;
  }

  .umoja-c-radio-btn--light.umoja-c-radio-btn--img .umoja-c-radio-btn:checked ~ .umoja-c-radio-btn__label{
    border-color: var(--color-purple1);
  }

  .umoja-c-radio-btn--light.umoja-c-radio-btn--img .umoja-c-radio-btn:checked ~ .umoja-c-radio-btn__label .umoja-c-radio-btn__label-txt{
    color: var(--color-purple1);
  }

  .umoja-c-radio-btn--light .umoja-c-radio-btn:checked:hover:enabled ~ .umoja-c-radio-btn__label .umoja-c-radio-btn__appearance{
    border-color: var(--color-purple0);
  }
  .umoja-c-radio-btn--light .umoja-c-radio-btn:checked:hover:enabled ~ .umoja-c-radio-btn__label .umoja-c-radio-btn__appearance:before{
    background-color: var(--color-purple0);
  }
`;
