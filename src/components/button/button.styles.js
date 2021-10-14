import {css} from 'lit';
import globalCSS from '../../styles/global-styles.js';

export default css`
  ${globalCSS}
  .umoja-c-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 75px;
    height: 30px;
    margin: 0;
    border: none;
    border-radius: 2px;
    padding: 0 16px;
    outline: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.875rem;
    font-family: inherit;
    font-weight: 600;
    line-height: 1;
    text-decoration: none;
    vertical-align: bottom;
    position: relative;
    cursor: pointer;
    transition: all 0.15s linear;
  }
  .umoja-c-btn:active:enabled,
  .umoja-c-btn:focus:enabled {
    border: 1px solid var(--color-purple);
    box-shadow: 0px 0px 0px 3px rgba(73, 55, 120, 0.4);
  }
  .umoja-c-btn--primary {
    background-color: var(--color-charcoal3);
    color: var(--color-charcoal6);
  }
  .umoja-c-btn--primary:hover:enabled,
  .umoja-c-btn--primary:active:enabled,
  .umoja-c-btn--primary:focus:enabled {
    background-color: var(--color-charcoal4);
    color: #fff;
  }
  .umoja-c-btn--secondary {
    background-color: #fff;
    color: var(--color-charcoal2);
  }
  .umoja-c-btn--secondary:hover:enabled,
  .umoja-c-btn--secondary:active:enabled,
  .umoja-c-btn--secondary:focus:enabled {
    background-color: var(--color-charcoal7);
  }
  .umoja-c-btn--disabled,
  .umoja-c-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  .umoja-c-btn--icon{
    height: 36px;
    width: 36px;
    min-width: 0;
  }
  .umoja-c-btn .material-icons{
    display: inline-block;
    margin-right: 4px;
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 1.25rem;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: 'liga';
  }
  .umoja-c-btn--icon .material-icons{
    margin-right: 0;
  }
`;
