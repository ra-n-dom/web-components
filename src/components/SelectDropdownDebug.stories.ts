import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

// Import the component
import './SelectDropdown/SelectDropdown.js';

const meta: Meta = {
  title: 'Debug/SelectDropdown Test',
};

export default meta;
type Story = StoryObj;

export const DirectTest: Story = {
  render: () => {
    console.log('DirectTest render called');
    const result = html`
      <div>
        <h2>Direct Component Test</h2>
        <select-dropdown
          label="Test Label"
          placeholder="Select something"
          .options=${['Option 1', 'Option 2', 'Option 3']}
        ></select-dropdown>
      </div>
    `;
    console.log('DirectTest result:', result);
    return result;
  }
};

export const MinimalTest: Story = {
  render: () => {
    console.log('MinimalTest render called');
    return html`<select-dropdown label="Minimal"></select-dropdown>`;
  }
};

export const StringTest: Story = {
  render: () => {
    console.log('StringTest render called');
    return 'This is just a string';
  }
};
