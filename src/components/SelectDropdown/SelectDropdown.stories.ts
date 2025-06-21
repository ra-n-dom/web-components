import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

// Import the component to ensure it's registered
import './SelectDropdown.js';

interface SelectDropdownArgs {
  label: string;
  value: string;
  required: boolean;
  disabled: boolean;
  placeholder: string;
  error: string;
  options: string[];
}

// Function to create the web component template
const createSelectDropdown = (args: SelectDropdownArgs) => {
  const { label, value, required, disabled, placeholder, error, options } = args;
  return html`
    <select-dropdown
      label=${label}
      .value=${value}
      ?required=${required}
      ?disabled=${disabled}
      placeholder=${placeholder}
      error=${error}
      .options=${options}
    ></select-dropdown>
  `;
};

const meta = {
  title: 'Components/SelectDropdown',
  tags: ['autodocs'],
  render: (args: SelectDropdownArgs) => createSelectDropdown(args),
  parameters: {
    docs: {
      description: {
        component: 'A flexible select dropdown component that supports both string and object options. The options control is disabled in Storybook to prevent [object Object] display issues - use the predefined stories to see different option configurations.'
      }
    }
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'The label text for the select'
    },
    value: {
      control: 'text',
      description: 'The currently selected value'
    },
    required: {
      control: 'boolean',
      description: 'Whether the select is required'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for empty state'
    },
    error: {
      control: 'text',
      description: 'Error message to display'
    },
    options: {
      control: false,
      description: 'Array of options - can be strings or objects with value/label properties. Use the predefined stories to see examples.',
      table: {
        type: { summary: 'string[] | SelectOption[]' }
      }
    }
  },
  args: {
    label: 'Choose a color',
    value: '',
    required: false,
    disabled: false,
    placeholder: 'Select a color...',
    error: '',
    options: ['Red', 'Green', 'Blue', 'Yellow', 'Purple']
  }
} satisfies Meta<SelectDropdownArgs>;

export default meta;
type Story = StoryObj<SelectDropdownArgs>;

const Template = ({ label, value, required, disabled, placeholder, error, options }: SelectDropdownArgs) => html`
  <select-dropdown
    label=${label}
    .value=${value}
    ?required=${required}
    ?disabled=${disabled}
    placeholder=${placeholder}
    error=${error}
    .options=${options}
  ></select-dropdown>
`;

export const Default: Story = {
  render: Template,
  args: {
    label: 'Choose a color',
    value: '',
    required: false,
    disabled: false,
    placeholder: 'Select a color...',
    error: '',
    options: ['Red', 'Green', 'Blue', 'Yellow', 'Purple']
  }
};

export const Required: Story = {
  render: Template,
  args: {
    label: 'Country',
    value: '',
    required: true,
    disabled: false,
    placeholder: 'Select your country',
    error: '',
    options: ['United States', 'Canada', 'United Kingdom', 'Australia', 'Germany']
  }
};

export const WithError: Story = {
  render: Template,
  args: {
    label: 'Priority Level',
    value: '',
    required: true,
    disabled: false,
    placeholder: 'Choose priority',
    error: 'Priority level is required',
    options: ['Low', 'Medium', 'High', 'Critical']
  }
};

export const Disabled: Story = {
  render: Template,
  args: {
    label: 'Disabled Select',
    value: 'Option 1',
    required: false,
    disabled: true,
    placeholder: '',
    error: '',
    options: ['Option 1', 'Option 2', 'Option 3']
  }
};

export const ObjectOptions: Story = {
  render: () => html`
    <select-dropdown
      label="User Role"
      placeholder="Select a role..."
      .options=${[
        { value: 'admin', label: 'Administrator' },
        { value: 'editor', label: 'Content Editor' },
        { value: 'viewer', label: 'Viewer' },
        { value: 'guest', label: 'Guest User', disabled: true }
      ]}
    ></select-dropdown>
  `
};

export const FormExample: Story = {
  render: () => html`
    <form style="max-width: 400px;">
      <select-dropdown
        label="Department"
        required
        placeholder="Choose your department"
        .options=${['Engineering', 'Marketing', 'Sales', 'Support', 'HR']}
      ></select-dropdown>
      
      <select-dropdown
        label="Experience Level"
        required
        placeholder="Select experience level"
        .options=${['Entry Level', 'Mid Level', 'Senior Level', 'Lead/Principal']}
      ></select-dropdown>
    </form>
  `
};

export const DebugOptions: Story = {
  render: () => html`
    <div>
      <h3>Debug: String Options</h3>
      <select-dropdown
        label="String Options"
        placeholder="Select a color"
        .options=${['Red', 'Green', 'Blue']}
      ></select-dropdown>
      
      <h3>Debug: Object Options</h3>
      <select-dropdown
        label="Object Options"
        placeholder="Select a role"
        .options=${[
          { value: 'admin', label: 'Administrator' },
          { value: 'user', label: 'Regular User' }
        ]}
      ></select-dropdown>
      
      <h3>Debug: Mixed Options (not recommended)</h3>
      <select-dropdown
        label="Mixed Options"
        placeholder="Select something"
        .options=${[
          'Simple String',
          { value: 'obj', label: 'Object Option' }
        ]}
      ></select-dropdown>
      
      <div style="margin-top: 1rem; padding: 1rem; background: #f0f0f0;">
        <strong>If you see [object Object] in any dropdown above, there's an issue with the component's option rendering.</strong>
      </div>
    </div>
  `
};
