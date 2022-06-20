import {html} from 'lit-html';
import ifExists from '/src/utils/if-exists';

import '/src/components/app/button/button.js';

export default {
  title: 'Components/App/Button',
  component: 'umoja-btn',
  parameters: {
    docs: {
        description: {
            component: '**<umoja-btn>**',
        },
        source: {
            type: 'code',
        }
    }
},
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    kind: {
      options: ['primary', 'secondary'],
      table: {
        defaultValue: { 
          summary: 'primary', 
        },
      },
      control: {
        type: 'select',
      },
    },
    disabled: {
      description: 'Specifices if a button is disabled. When attribute is set, the button will be unusable and un-clickable.',
      table: {
        type: { 
          summary: 'boolean',
          detail: '<umoja-btn disabled></umoja-btn>', 
        },
      },
      control: {
        type: 'boolean',
      },
    },
    href: {
      description: 'If the href attribute is set the button will render as a link element.',
      control: {
        type: 'text',
      },
    },
    target: {
      description: 'Changes where the link should open. Requires href attribute to be set.',
      options: ['_blank', '_parent', '_self', '_top'],
      control: {
        type: 'select',
      },
    },
    download: {
      description: 'Specifies that the link target will be downloaded when the link is clicked. Requires href attribute to be set.',
      control: {
        type: 'text',
      },
    },
    submit: {
      description: 'Changes the button type attribute to type="submit".',
      table: {
        type: { 
          summary: 'boolean',
          detail: '<umoja-btn submit></umoja-btn>', 
        },
      },
      control: {
        type: 'boolean',
      },
    },
    icon: {
      description: 'Render a Material UI Icon in the button. Attribute value should be a valid Material Icon name.',
      control:{
        type: 'text'
      }
    },
    onClick: { 
      action: 'handleClick' 
    },
  },
};

const Template = ({ kind, title, disabled, href, target, download, submit, icon, onClick }) =>
  html`
  <umoja-btn
    title=${ifExists(title)} 
    kind=${ifExists(kind)} 
    ?disabled=${disabled} 
    href=${ifExists(href)}
    target=${ifExists(target)}
    download=${ifExists(download)}
    submit=${ifExists(submit)}
    icon=${ifExists(icon)}
    @click=${onClick}
  >
  </umoja-btn>
  `;

export const Default = Template.bind({});

Default.args = {
  title: 'Button'
};

Default.parameters = { 
  docs: {
    source: {
      code: '<umoja-btn title="Button"></umoja-btn>',
    },
  },
  controls: { 
    exclude: ['icon'] 
  } 
};

export const Icon = Template.bind({});

Icon.args = {
  icon: 'home'
};

Icon.parameters = {
  docs: {
    source: {
      code: '<umoja-btn icon="home"></umoja-btn>',
    },
  },
}
