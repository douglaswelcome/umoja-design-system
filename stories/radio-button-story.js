import {html} from 'lit-html';
import '../src/components/radio-button/radio-button.js';

export default {
  title: 'Components/Radio Button',
  component: 'umoja-radio-btn',
  parameters: {
    docs: {
        description: {
            component: '**<umoja-radio-btn>**',
        },
        source: {
            type: 'code',
        }
    }
},
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    name: {
        control: {
          type: 'text',
        },
    },
    value: {
        control: {
          type: 'text',
        },
    },
    disabled: {
      description: 'Specifices if a button is disabled. When attribute is set, the button will be unusable and un-clickable.',
      table: {
        type: { 
          summary: 'boolean',
          detail: '<umoja-radio-btn disabled></umoja-radio-btn>', 
        },
      },
      control: {
        type: 'boolean',
      },
    },
    checked: {
        control: {
          type: 'boolean',
        },
        table: {
          type: { 
            summary: 'boolean',
            detail: '<umoja-radio-btn checked></umoja-radio-btn>', 
          },
        },
    },
    img: {
      description: "If the img attribute is set to a valid image url, the radio button will render with the image as its background.",
      control: {
        type: 'text',
      },
    },
    theme: {
      description: "The theme color of the button. Default theme is dark mode.",
      table: {
          defaultValue: { 
            summary: 'dark', 
          },
      },
      options: ['dark','light'],
      control: {
          type: 'select',
      },
    },
    onClick: {
      action: 'handleClick'
    }
  },
};

const Template = ({ img, label, disabled, checked, name, value, theme, onClick }) =>
  html`
    <umoja-radio-btn 
      label=${label} 
      name=${name}
      value=${value}
      .img=${img}
      .theme=${theme}
      .checked=${checked} 
      .disabled=${disabled} 
      @click=${onClick}
    >
    </umoja-radio-btn>
  `;

export const Default = Template.bind({});

Default.args = {
  label: 'Radio Button',
  name: 'radio_button',
  value: 'value',
  checked: false,
  disabled: false,
};

Default.parameters = {
  docs: {
    source: {
      code: '<umoja-radio-btn label="Radio Button" name="radio_button" value="value"></umoja-radio-btn>',
    },
  },
};

export const Image = Template.bind({});

Image.args = {
  label: 'Radio Button',
  name: 'radio_button',
  value: 'value',
  checked: false,
  disabled: false,
  img: 'https://www.sama.com/hubfs/edgecases_rain1.png',
  theme: 'light'
};

Default.parameters = {
  docs: {
    source: {
      code: '<umoja-radio-btn label="Radio Button" name="radio_button" value="value" theme="light" style="--backgroundImg:url(edgecases_rain1.png);"></umoja-radio-btn>',
    },
  },
};
