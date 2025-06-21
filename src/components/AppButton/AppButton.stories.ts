import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

// Import the component to ensure it's registered
import './AppButton.js';

interface AppButtonArgs {
  variant: 'primary' | 'secondary' | 'link';
  disabled: boolean;
  label: string;
}

// Function to create the web component template
const createAppButton = ({ variant, disabled, label }: AppButtonArgs) => html`
  <app-button variant=${variant} ?disabled=${disabled}>
    ${label}
  </app-button>
`;

const meta = {
  title: 'Components/AppButton',
  tags: ['autodocs'],
  render: (args: AppButtonArgs) => createAppButton(args),
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'link'],
      description: 'The visual style variant of the button'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled'
    },
    label: {
      control: 'text',
      description: 'The text content of the button'
    }
  },
  args: {
    variant: 'primary',
    disabled: false,
    label: 'Button'
  }
} satisfies Meta<AppButtonArgs>;

export default meta;
type Story = StoryObj<AppButtonArgs>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Primary Button'
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Secondary Button'
  }
};

export const Link: Story = {
  args: {
    variant: 'link',
    label: 'Link Button'
  }
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    label: 'Disabled Button'
  }
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <app-button variant="primary">Primary</app-button>
      <app-button variant="secondary">Secondary</app-button>
      <app-button variant="link">Link</app-button>
      <app-button variant="primary" disabled>Disabled</app-button>
    </div>
  `,
  parameters: {
    controls: { disable: true }
  }
};
