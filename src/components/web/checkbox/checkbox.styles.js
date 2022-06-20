import {css} from 'lit';
import globalCSS from '../../../styles/global-styles.js';


export default css`
  ${globalCSS}

  :host{
    width:100%;
  }

  .__label {
    position: relative;
    padding-left: 2rem;
    padding-bottom:.125rem;
    cursor:pointer;
    user-select: none;
    transition: 0.1s ease-out;
    color:var(--color-white);

  }

  .__label input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .__checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 1.5rem;
    width: 1.5rem;
    background-color: transparent;
    border: 1px solid;
    border-radius: .25rem;
    border-color:var(--color-charcoal5);
    transition: 0.1s ease-out;
  }



  .__label:hover > .__checkmark {
    border-color:var(--color-sunshine);
  }

  .__label:focus > .__checkmark {
    border-color:var(--color-sunshine);
  }


  

  .__label input:checked ~ .__checkmark {
    background-color: var(--color-sunshine);
    border-color:var(--color-sunshine);
  }

  .__checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .__label input:checked ~ .__checkmark:after {
    display: block;
  }

  .__label .__checkmark:after {
    left: 7px;
    top: 3px;
    width: 7px;
    height: 12px;
    border: solid;
    border-color:var(--color-charcoal1);
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }




    

  `;