import {css} from 'lit';
import layoutCSS from './layout-styles.js';

export default css`
  :host {
    position: relative;
    box-sizing: border-box;
    --color-charcoal0: #0e0e11;
    --color-charcoal1: #1E1E24;
    --color-charcoal2: #2E2E38;
    --color-charcoal3: #40404f;
    --color-charcoal4: #606076;
    --color-charcoal5: #9D9DB5;
    --color-charcoal6: #cdcde1;
    --color-charcoal7: #e2e2ee;
    --color-purple0: #370c7c;
    --color-purple1: #5f2eae;
    --color-purple2: #885ad3;
    --color-purple3: #a378e9;
    --color-purple4: #c9aef5;
    --color-purple5: #e9dcfd;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }
  body {
    margin: 0;
  }
  a {
    background-color: transparent;
  }
  button {
    font-family: inherit;
    font-size: 100%;
    margin: 0;
  }
  /**
     * Show the overflow in IE.
     * 1. Show the overflow in Edge.
     */
  button,
  input {
    overflow: visible;
  }
  /**
     * Remove the inheritance of text transform in Edge, Firefox, and IE.
     * 1. Remove the inheritance of text transform in Firefox.
     */
  button,
  select {
    /* 1 */
    text-transform: none;
  }
  /**
     * Correct the inability to style clickable types in iOS and Safari.
     */
  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }
  /**
     * Remove the inner border and padding in Firefox.
     */

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  /**
     * Restore the focus styles unset by the previous rule.
     */

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  /**
     * Add the correct display in IE 10.
     */
  [hidden] {
    display: none;
  }
  .umoja-b-label{
    font-size: 0.875rem;
    font-family: inherit;
    font-weight: 400;
    line-height: 1.43;
    color: var(--color-charcoal6);
  }
  .umoja-u-hidden{
    display: none;
  }
  ${layoutCSS}
`;
