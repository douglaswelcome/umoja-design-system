import { html } from 'lit-html';
import '/src/components/web/textfield/textfield.js'

export default {
    title: 'Components/Web/TextField',
    component: 'umoja-c-web-textfield',
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
    <umoja-c-web-textfield>
    </umoja-c-web-textfield>
  `;

  export const Default = Template.bind({});