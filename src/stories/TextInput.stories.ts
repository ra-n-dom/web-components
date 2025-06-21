import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

// Import the component to ensure it's registered
import '../components/TextInput.js';

interface TextInputArgs {
  label: string;
  value: string;
  required: boolean;
  type: string;
  placeholder: string;
  disabled: boolean;
  error: string;
}

// Function to create the web component template
const createTextInput = ({ label, value, required, type, placeholder, disabled, error }: TextInputArgs) => html`
  <text-input
    label=${label}
    .value=${value}
    ?required=${required}
    type=${type}
    placeholder=${placeholder}
    ?disabled=${disabled}
    error=${error}
  ></text-input>
`;

const meta = {
  title: 'Components/TextInput',
  tags: ['autodocs'],
  render: createTextInput,
  argTypes: {
    label: {
      control: 'text',
      description: 'The label text for the input'
    },
    value: {
      control: 'text',
      description: 'The current value of the input'
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required'
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'The HTML input type'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled'
    },
    error: {
      control: 'text',
      description: 'Error message to display'
    }
  },
  args: {
    label: 'Username',
    value: '',
    required: false,
    type: 'text',
    placeholder: 'Enter your username',
    disabled: false,
    error: ''
  }
} satisfies Meta<TextInputArgs>;

export default meta;
type Story = StoryObj<TextInputArgs>;

export const Default: Story = {
  args: {
    label: 'Username',
    value: '',
    required: false,
    type: 'text',
    placeholder: 'Enter your username',
    disabled: false,
    error: ''
  }
};

export const Required: Story = {
  args: {
    label: 'Email Address',
    value: '',
    required: true,
    type: 'email',
    placeholder: 'you@example.com',
    disabled: false,
    error: ''
  }
};

export const WithError: Story = {
  args: {
    label: 'Password',
    value: '123',
    required: true,
    type: 'password',
    placeholder: 'Enter a secure password',
    disabled: false,
    error: 'Password must be at least 8 characters long'
  }
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    value: 'Cannot edit this',
    required: false,
    type: 'text',
    placeholder: '',
    disabled: true,
    error: ''
  }
};

export const FormExample: Story = {
  render: () => html`
    <form style="max-width: 400px;">
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
    </form>
  `,
  parameters: {
    controls: { disable: true }
  }
};
