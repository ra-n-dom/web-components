# Web Components Project

A collection of reusable form web components built with [Lit](https://lit.dev/) and showcased with [Storybook](https://storybook.js.org/).

## Components

This project includes the following web components:

### 🔘 AppButton (`<app-button>`)
A versatile button component with multiple visual variants.

**Properties:**
- `variant`: `'primary' | 'secondary' | 'link'` - Button style variant
- `disabled`: `boolean` - Whether the button is disabled

**Events:**
- `button-click` - Fired when the button is clicked

**Usage:**
```html
<app-button variant="primary">Primary Button</app-button>
<app-button variant="secondary">Secondary Button</app-button>
<app-button variant="link">Link Button</app-button>
```

### 📝 TextInput (`<text-input>`)
A flexible text input component with label, validation, and error states.

**Properties:**
- `label`: `string` - Label text
- `value`: `string` - Input value
- `type`: `string` - HTML input type (text, email, password, etc.)
- `required`: `boolean` - Whether the field is required
- `placeholder`: `string` - Placeholder text
- `disabled`: `boolean` - Whether the input is disabled
- `error`: `string` - Error message to display

**Events:**
- `input-change` - Fired when the input value changes
- `input-blur` - Fired when the input loses focus

**Usage:**
```html
<text-input 
  label="Email Address" 
  type="email" 
  required 
  placeholder="you@example.com">
</text-input>
```

### 📋 SelectDropdown (`<select-dropdown>`)
A customizable select dropdown with support for string or object options.

**Properties:**
- `label`: `string` - Label text
- `value`: `string` - Selected value
- `options`: `Array<string | SelectOption>` - Available options
- `required`: `boolean` - Whether selection is required
- `disabled`: `boolean` - Whether the select is disabled
- `placeholder`: `string` - Placeholder text
- `error`: `string` - Error message to display

**Events:**
- `select-change` - Fired when the selection changes

**Usage:**
```html
<!-- String options -->
<select-dropdown 
  label="Color" 
  .options=${['Red', 'Green', 'Blue']}>
</select-dropdown>

<!-- Object options -->
<select-dropdown 
  label="Role" 
  .options=${[
    { value: 'admin', label: 'Administrator' },
    { value: 'user', label: 'User' }
  ]}>
</select-dropdown>
```

### 📄 DynamicForm (`<dynamic-form>`)
A form container that handles submission and reset for custom web components.

**Properties:**
- `showActions`: `boolean` - Whether to show submit/reset buttons
- `submitText`: `string` - Text for submit button
- `resetText`: `string` - Text for reset button
- `disabled`: `boolean` - Whether form actions are disabled

**Events:**
- `form-submit` - Fired when form is submitted with collected data
- `form-reset` - Fired when form is reset

**Usage:**
```html
<dynamic-form>
  <text-input label="Name" required></text-input>
  <select-dropdown label="Department" required></select-dropdown>
</dynamic-form>
```

### 📦 FormContainer (`<form-container>`)
A container component that provides consistent styling and layout for forms.

**Properties:**
- `title`: `string` - Container title
- `description`: `string` - Container description
- `variant`: `'default' | 'compact' | 'wide'` - Size variant
- `borderless`: `boolean` - Whether to remove borders

**Usage:**
```html
<form-container 
  title="User Registration" 
  description="Create your account">
  <!-- Form content -->
</form-container>
```

## Development

### Prerequisites
- Node.js (v18 or higher)
- pnpm (or npm)

### Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Start Storybook:**
   ```bash
   npm run storybook
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

### Available Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production

## Project Structure

```
src/
├── components/           # Web components
│   ├── AppButton.ts
│   ├── TextInput.ts
│   ├── SelectDropdown.ts
│   ├── DynamicForm.ts
│   ├── FormContainer.ts
│   └── index.ts         # Component exports
├── stories/             # Storybook stories
│   ├── AppButton.stories.ts
│   ├── TextInput.stories.ts
│   ├── SelectDropdown.stories.ts
│   ├── DynamicForm.stories.ts
│   ├── FormContainer.stories.ts
│   └── CompleteDemo.stories.ts
└── main.ts             # Main application entry
```

## Features

- ✅ Built with modern Lit web components
- ✅ TypeScript support
- ✅ Comprehensive Storybook documentation
- ✅ Accessible form components
- ✅ Event-driven architecture
- ✅ Customizable styling
- ✅ Responsive design
- ✅ Production-ready build

## Browser Support

These components work in all modern browsers that support:
- Custom Elements v1
- Shadow DOM v1
- ES2017+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add/update tests and stories
5. Submit a pull request

## License

MIT License - see LICENSE file for details
