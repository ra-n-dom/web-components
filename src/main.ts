import './style.css'
import './components/index.js'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Form Web Components</h1>
    <p>A collection of reusable form components built with Lit. View the components in Storybook for interactive examples.</p>
    
    <div style="margin: 2rem 0;">
      <form-container title="Demo Form" description="A quick example of the form components working together">
        <dynamic-form>
          <text-input
            label="Your Name"
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
          ></select-dropdown>
        </dynamic-form>
      </form-container>
    </div>
    
    <div style="margin-top: 2rem; padding: 1rem; background: #f5f5f5; border-radius: 8px;">
      <h3>Available Components:</h3>
      <ul>
        <li><strong>app-button</strong> - Versatile button with multiple variants</li>
        <li><strong>text-input</strong> - Text input with labels and validation</li>
        <li><strong>select-dropdown</strong> - Customizable select dropdown</li>
        <li><strong>dynamic-form</strong> - Form container with submission handling</li>
        <li><strong>form-container</strong> - Layout container for forms</li>
      </ul>
      <p><strong>View in Storybook:</strong> <code>npm run storybook</code></p>
    </div>
  </div>
`

// Set up the demo form
const selectDropdown = document.querySelector('select-dropdown');
if (selectDropdown) {
  (selectDropdown as any).options = ['Engineering', 'Marketing', 'Sales', 'Support', 'HR'];
}

// Add event listeners for demo
const dynamicForm = document.querySelector('dynamic-form');
if (dynamicForm) {
  dynamicForm.addEventListener('form-submit', (e: any) => {
    console.log('Demo form submitted:', e.detail.data);
    alert('Form submitted successfully! Check the console for data.');
  });
}
