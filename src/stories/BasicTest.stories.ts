import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

// Import our component
import '../components/AppButton.js';

// Debug function to check if component is registered
const SimpleTest = () => {
  // Check if the custom element is defined
  const isRegistered = customElements.get('app-button');
  console.log('app-button registered:', !!isRegistered);
  
  return html`
    <div style="padding: 1rem; border: 2px solid blue; background: #f0f0f0;">
      <h3>Web Component Test</h3>
      <p>Component registered: ${isRegistered ? 'YES' : 'NO'}</p>
      <p>Testing our app-button component:</p>
      <app-button variant="primary">Test Button</app-button>
      <br><br>
      <p>Regular HTML button for comparison:</p>
      <button style="padding: 0.5rem 1rem; background: red; color: white; border: none;">Regular Button</button>
    </div>
  `;
};

const meta = {
  title: 'Debug/SimpleTest',
  tags: ['autodocs'],
  render: SimpleTest,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
