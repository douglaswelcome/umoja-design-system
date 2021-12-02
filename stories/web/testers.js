import { html } from 'lit-html';
import '/src/components/web/testers/testers.js'

export default {
    title: 'Components/Web/Testers',
    component: 'umoja-c-web-testers',
    parameters: {
      docs: {
          description: {
              component: '**<umoja-c-web-textfield>**',
          },
          source: {
              type: 'code',
          }
      }
  }
}

  const Template = ({  }) =>
  html`
    <umoja-c-web-testers>
    </umoja-c-web-testers>
  `;

  export const Default = Template.bind({});