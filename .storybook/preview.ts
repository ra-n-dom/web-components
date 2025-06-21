import type { Preview } from '@storybook/web-components-vite';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // Show a11y violations in the test UI
      test: 'todo'
    },
    docs: {
      toc: true, // Enable table of contents in docs
    },
    viewport: {
      defaultViewport: 'responsive',
    }
  }
};

export default preview;