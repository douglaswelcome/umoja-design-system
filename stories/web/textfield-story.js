import { html } from 'lit-html';
import '/src/components/web/textfield/textfield.js'

export default {
    title: 'Components/Web/TextField',
    component: 'umoja-c-web-textfield',

}

  const Template = ({ label, placeholder, value }) =>
  html`
    <umoja-c-web-textfield 
    label=${label} 
    value=${value}
    >
    </umoja-c-web-textfield>
  `;

  export const Default = Template.bind({});

  Default.args = {
    label: 'First Name',
    value: ''
  };