import './style.css'
import './components/index.js'
import './components/SelectDropdownSimple.js'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Form Web Components - Debug Mode</h1>
    
    <h2>SelectDropdown Debug Test</h2>
    
    <h3>Test 1: String Options</h3>
    <select-dropdown
      id="string-test"
      label="Colors (String Options)"
      placeholder="Choose a color"
    ></select-dropdown>
    
    <h3>Test 2: Object Options</h3>
    <select-dropdown
      id="object-test"
      label="User Roles (Object Options)"
      placeholder="Select a role"
    ></select-dropdown>
    
    <h3>Test 3: Simple Component (String Options)</h3>
    <select-dropdown-simple id="simple-string"></select-dropdown-simple>
    
    <h3>Test 4: Simple Component (Object Options)</h3>
    <select-dropdown-simple id="simple-object"></select-dropdown-simple>
    
    <h3>Debug Info</h3>
    <div id="debug-info" style="background: #f0f0f0; padding: 1rem; margin: 1rem 0; font-family: monospace; white-space: pre-wrap; font-size: 12px;"></div>
    
    <hr>
    
    <h2>Original Demo</h2>
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
          id="department-select"
          label="Department"
          required
          placeholder="Choose your department"
        ></select-dropdown>
      </dynamic-form>
    </form-container>
  </div>
`

// Setup simple component tests
const simpleString = document.querySelector('#simple-string') as any;
const simpleObject = document.querySelector('#simple-object') as any;

if (simpleString) {
  simpleString.options = ['Red', 'Green', 'Blue'];
  console.log('Simple string options set:', simpleString.options);
}

if (simpleObject) {
  simpleObject.options = [
    { value: 'admin', label: 'Administrator' },
    { value: 'editor', label: 'Content Editor' }
  ];
  console.log('Simple object options set:', simpleObject.options);
}

// Setup string options test
const stringTest = document.querySelector('#string-test') as any;
if (stringTest) {
  stringTest.options = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];
  console.log('String test options set:', stringTest.options);
}

// Setup object options test
const objectTest = document.querySelector('#object-test') as any;
if (objectTest) {
  objectTest.options = [
    { value: 'admin', label: 'Administrator' },
    { value: 'editor', label: 'Content Editor' },
    { value: 'viewer', label: 'Viewer' },
    { value: 'guest', label: 'Guest User', disabled: true }
  ];
  console.log('Object test options set:', objectTest.options);
}

// Setup original demo
const selectDropdown = document.querySelector('#department-select') as any;
if (selectDropdown) {
  selectDropdown.options = ['Engineering', 'Marketing', 'Sales', 'Support', 'HR'];
}

// Debug logging
const debugInfo = document.querySelector('#debug-info');
function updateDebugInfo() {
  if (debugInfo && stringTest && objectTest && simpleString && simpleObject) {
    debugInfo.textContent = `
Debug Information:
==================
String Test Options: ${JSON.stringify(stringTest.options, null, 2)}
Object Test Options: ${JSON.stringify(objectTest.options, null, 2)}

Simple String Options: ${JSON.stringify(simpleString.options, null, 2)}
Simple Object Options: ${JSON.stringify(simpleObject.options, null, 2)}

String Test Shadow DOM (first 300 chars):
${stringTest.shadowRoot?.innerHTML?.slice(0, 300)}...

Object Test Shadow DOM (first 300 chars):
${objectTest.shadowRoot?.innerHTML?.slice(0, 300)}...
    `;
  }
}

// Update debug info after a short delay to let components render
setTimeout(updateDebugInfo, 500);

// Add event listeners for demo
const dynamicForm = document.querySelector('dynamic-form');
if (dynamicForm) {
  dynamicForm.addEventListener('form-submit', (e: any) => {
    console.log('Demo form submitted:', e.detail.data);
    alert('Form submitted successfully! Check the console for data.');
  });
}
