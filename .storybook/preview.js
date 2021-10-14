import {html} from 'lit-html';
import samaTheme from './sama-theme.js';

const canvasStyles =
  `
  html{
    font-size: 100%;
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
    --color-purple: #7761b0;
    --font-manrope: "Manrope", sans-serif;
  }

  body{
    background-color:  var(--color-charcoal2);
    font-size: 1rem;
    font-weight: 400;
    font-family: var(--font-manrope);
    line-height: 1.5;
  }

  .main-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem;
  }
`;

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      {name: 'charcoal0', value: '#0e0e11'},
      {name: 'charcoal1', value: '#1E1E24'},
      {name: 'charcoal2', value: '#2E2E38'},
      {name: 'charcoal3', value: '#40404f'},
      {name: 'charcoal4', value: '#606076'},
      {name: 'charcoal5', value: '#9D9DB5'},
      {name: 'charcoal6', value: '#cdcde1'},
      {name: 'charcoal7', value: '#e2e2ee'},
      {name: 'white', value: '#FFFFFF'},
    ],
  },
  docs: {
    theme: samaTheme,
  }
}


export const decorators = [
  (story) => html`<style>${canvasStyles}</style><div class="main-content">${story()}</div>`,
];