import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/DynamicForm.js';
import '../components/TextInput.js';
import '../components/SelectDropdown.js';
import '../components/AppButton.js';

interface DynamicFormArgs {
  showActions: boolean;
  submitText: string;
  resetText: string;
  disabled: boolean;
}

const meta: Meta<DynamicFormArgs> = {
  title: 'Components/DynamicForm',
  component: 'dynamic-form',
  parameters: {
    docs: {
      description: {
        component: 'A form container that handles submission and reset for custom web components.'
      }
    }
  },
  argTypes: {
    showActions: {
      control: 'boolean',
      description: 'Whether to show the submit and reset buttons'
    },
    submitText: {
      control: 'text',
      description: 'Text for the submit button'
    },
    resetText: {
      control: 'text',
      description: 'Text for the reset button'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the form actions are disabled'
    }
  }
};

export default meta;
type Story = StoryObj<DynamicFormArgs>;

const Template = ({ showActions, submitText, resetText, disabled }: DynamicFormArgs) => html`
  <dynamic-form
    ?showActions=${showActions}
    submitText=${submitText}
    resetText=${resetText}
    ?disabled=${disabled}
    @form-submit=${(e: CustomEvent) => {
      console.log('Form submitted:', e.detail.data);
      alert('Form submitted! Check console for data.');
    }}
    @form-reset=${() => {
      console.log('Form reset');
      alert('Form has been reset!');
    }}
  >
    <text-input
      label="Full Name"
      required
      placeholder="Enter your full name"
    ></text-input>
    
    <text-input
      label="Email"
      type="email"
      required
      placeholder="you@example.com"
    ></text-input>
    
    <select-dropdown
      label="Department"
      required
      placeholder="Choose your department"
      .options=${['Engineering', 'Marketing', 'Sales', 'Support']}
    ></select-dropdown>
  </dynamic-form>
`;

export const Default: Story = {
  render: Template,
  args: {
    showActions: true,
    submitText: 'Submit',
    resetText: 'Reset',
    disabled: false
  }
};

export const CustomActions: Story = {
  render: Template,
  args: {
    showActions: true,
    submitText: 'Save Changes',
    resetText: 'Clear Form',
    disabled: false
  }
};

export const NoActions: Story = {
  render: Template,
  args: {
    showActions: false,
    submitText: 'Submit',
    resetText: 'Reset',
    disabled: false
  }
};

export const Disabled: Story = {
  render: Template,
  args: {
    showActions: true,
    submitText: 'Submit',
    resetText: 'Reset',
    disabled: true
  }
};

export const ComplexForm: Story = {
  render: () => html`
    <dynamic-form
      @form-submit=${(e: CustomEvent) => {
        console.log('Complex form submitted:', e.detail.data);
        alert('Check console for form data!');
      }}
    >
      <text-input
        label="First Name"
        required
        placeholder="Enter your first name"
      ></text-input>
      
      <text-input
        label="Last Name"
        required
        placeholder="Enter your last name"
      ></text-input>
      
      <text-input
        label="Email"
        type="email"
        required
        placeholder="you@example.com"
      ></text-input>
      
      <text-input
        label="Phone"
        type="tel"
        placeholder="+1 (555) 123-4567"
      ></text-input>
      
      <select-dropdown
        label="Country"
        required
        placeholder="Select your country"
        .options=${['United States', 'Canada', 'United Kingdom', 'Australia', 'Germany']}
      ></select-dropdown>
      
      <select-dropdown
        label="How did you hear about us?"
        placeholder="Choose an option"
        .options=${[
          'Google Search',
          'Social Media',
          'Friend Referral',
          'Advertisement',
          'Other'
        ]}
      ></select-dropdown>
      
      <text-input
        label="Message"
        placeholder="Tell us about yourself..."
      ></text-input>
    </dynamic-form>
  `
};
