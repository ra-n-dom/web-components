import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

// Import the component
import '../components/TestButton.js';

const meta: Meta = {
  title: 'Test/SimpleButton',
  tags: ['autodocs'],
  render: () => html`<test-button>Test Button</test-button>`
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
