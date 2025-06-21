import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

// Test story to debug the [object Object] issue
const meta: Meta = {
  title: 'Debug/Simple Test',
  parameters: {
    docs: {
      description: {
        component: 'A simple test to debug the [object Object] issue'
      }
    }
  }
};

export default meta;
type Story = StoryObj;

export const PlainHTML: Story = {
  render: () => html`
    <div>
      <h2>Plain HTML Test</h2>
      <p>This should render normally.</p>
      <select>
        <option value="">Choose...</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </select>
    </div>
  `
};

export const LitTemplateTest: Story = {
  render: () => {
    const testData = { name: 'Test', value: 123 };
    return html`
      <div>
        <h2>Lit Template Test</h2>
        <p>Test data: ${JSON.stringify(testData)}</p>
        <p>Simple string: ${'Hello World'}</p>
        <p>Number: ${42}</p>
      </div>
    `;
  }
};

export const ArgumentTest: Story = {
  render: (args) => {
    console.log('ArgumentTest args:', args);
    return html`
      <div>
        <h2>Argument Test</h2>
        <p>Args object: ${JSON.stringify(args)}</p>
        <p>Args type: ${typeof args}</p>
      </div>
    `;
  }
};
