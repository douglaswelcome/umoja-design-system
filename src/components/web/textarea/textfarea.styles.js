import {css} from 'lit';
import globalCSS from '../../../styles/global-styles.js';


export default css`
  ${globalCSS}

  :host{
    width:100%;
  }

    .__wrap {
    position: relative;
    margin: 1rem 0;
    }

    label {
    position: absolute;
    font-size: 1rem;
    left: 0;
    top: 1.25rem;
    background-color:var(--color-charcoal0);
    transform: translateY(-50%);
    color:var(--color-charcoal5);
    margin: 0 0.5rem;
    transition: 0.1s ease-out;
    transform-origin: left top;
    pointer-events: none;
    }

    textarea {
    font-size: 1rem;
    outline: none;
    border: 1px solid;
    border-color:var(--color-charcoal3);
    border-radius: .25rem;
    background-color:var(--color-charcoal0);
    padding: 1rem 0.6rem;
    color:  var(--color-charcoal7);
    transition: 0.1s ease-out;
    cursor: text;
    margin-left: auto;
    width: 100%;
    margin-right: auto;
    padding: 2rem 0.5rem 1rem;
    }

    textarea:hover + label, .hover + label {
      color:  var(--color-charcoal7);
    }

    textarea:focus{
    border-color:var(--color-sunshine);
    }
    .filled > label
    {
      color:  var(--color-charcoal5);
      transform: translateY(-55%) scale(0.7);
    
    }

    textarea:not(:placeholder-shown) + label {

    }

   
    textarea:disabled,  input:disabled ~ .label {
    opacity: 0.5;
    }


  


  
`;
