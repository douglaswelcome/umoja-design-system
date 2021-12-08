import { html } from 'lit-html';
import '/src/components/web/textfield/textfield.js'

export default {
    title: 'Components/Web/TextField',
    component: 'umoja-c-web-textfield',

}

  const Template = ({ label, value, name }) =>
  html`
    <umoja-c-web-textfield 
    label=${label} 
    value=${value}
    name=${name}
    >
    </umoja-c-web-textfield>
  `;

  export const Default = Template.bind({});

  Default.args = {
    name: 'Text Field',
    label: 'First Name',
    value: ''
  };