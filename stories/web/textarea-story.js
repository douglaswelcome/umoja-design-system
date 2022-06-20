import { html } from 'lit-html';
import '/src/components/web/textarea/textarea.js'

export default {
    title: 'Components/Web/Textarea',
    component: 'umoja-c-web-textarea',

}

  const Template = ({ label, value, name, rows, cols }) =>
  html`
    <umoja-c-web-textarea
    label=${label} 
    value=${value}
    name=${name}
    >
    </umoja-c-web-textarea>
  `;

  export const Default = Template.bind({});

  Default.args = {
    name: 'Text Field',
    label: 'Tell Us About Your Project...',
    value: '',
    rows:'',
    cols:''
  };