import { html } from 'lit-html';
import '/src/components/web/checkbox/checkbox.js'

export default {
    title: 'Components/Web/Checkbox',
    component: 'umoja-c-web-checkbox',

}

  const Template = ({ label, value, name }) =>
  html`
    <umoja-c-web-checkbox
    label=${label} 

    name=${name}
    >
    </umoja-c-web-checkbox>
  `;

  export const Default = Template.bind({});

  Default.args = {
    name: 'name',
    label: 'Are you a dunce?'
  };