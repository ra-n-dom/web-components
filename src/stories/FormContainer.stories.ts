import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/FormContainer.js';
import '../components/DynamicForm.js';
import '../components/TextInput.js';
import '../components/SelectDropdown.js';

interface FormContainerArgs {
  title: string;
  description: string;
  variant: 'default' | 'compact' | 'wide';
  borderless: boolean;
}

const meta: Meta<FormContainerArgs> = {
  title: 'Components/FormContainer',
  component: 'form-container',
  parameters: {
    docs: {
      description: {
        component: 'A container component that provides consistent styling and layout for forms.'
      }
    }
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'The title to display at the top of the container'
    },
    description: {
      control: 'text',
      description: 'A description to display below the title'
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'compact', 'wide'],
      description: 'The size variant of the container'
    },
    borderless: {
      control: 'boolean',
      description: 'Whether to remove borders and background'
    }
  }
};

export default meta;
type Story = StoryObj<FormContainerArgs>;

const Template = ({ title, description, variant, borderless }: FormContainerArgs) => html`
  <form-container
    title=${title}
    description=${description}
    variant=${variant}
    ?borderless=${borderless}
  >
    <text-input
      label="Username"
      required
      placeholder="Enter your username"
    ></text-input>
    
    <text-input
      label="Email"
      type="email"
      required
      placeholder="you@example.com"
    ></text-input>
    
    <select-dropdown
      label="Role"
      required
      placeholder="Select your role"
      .options=${['User', 'Admin', 'Moderator']}
    ></select-dropdown>
  </form-container>
`;

export const Default: Story = {
  render: Template,
  args: {
    title: 'User Registration',
    description: 'Please fill out the form below to create your account.',
    variant: 'default',
    borderless: false
  }
};

export const Compact: Story = {
  render: Template,
  args: {
    title: 'Quick Login',
    description: 'Sign in to your account.',
    variant: 'compact',
    borderless: false
  }
};

export const Wide: Story = {
  render: Template,
  args: {
    title: 'Detailed Form',
    description: 'This is a wider container for more complex forms.',
    variant: 'wide',
    borderless: false
  }
};

export const Borderless: Story = {
  render: Template,
  args: {
    title: 'Simple Form',
    description: 'A clean form without borders.',
    variant: 'default',
    borderless: true
  }
};

export const NoHeader: Story = {
  render: () => html`
    <form-container>
      <text-input
        label="Search"
        placeholder="Search for something..."
      ></text-input>
      
      <select-dropdown
        label="Category"
        placeholder="All categories"
        .options=${['All', 'Products', 'Articles', 'Users']}
      ></select-dropdown>
    </form-container>
  `
};

export const WithDynamicForm: Story = {
  render: () => html`
    <form-container
      title="Contact Us"
      description="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      variant="default"
    >
      <dynamic-form
        @form-submit=${(e: CustomEvent) => {
          console.log('Contact form submitted:', e.detail.data);
          alert('Thank you for your message!');
        }}
      >
        <text-input
          label="Name"
          required
          placeholder="Your full name"
        ></text-input>
        
        <text-input
          label="Email"
          type="email"
          required
          placeholder="your.email@example.com"
        ></text-input>
        
        <select-dropdown
          label="Subject"
          required
          placeholder="What is this regarding?"
          .options=${[
            'General Inquiry',
            'Technical Support',
            'Billing Question',
            'Feature Request',
            'Bug Report'
          ]}
        ></select-dropdown>
        
        <text-input
          label="Message"
          placeholder="Tell us more about your inquiry..."
        ></text-input>
      </dynamic-form>
    </form-container>
  `
};
