# Form Web Components

A modern collection of reusable form web components built with [Lit](https://lit.dev/) and showcased with [Storybook](https://storybook.js.org/).

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start Storybook (recommended for component development)
npm run storybook

# Build for production
npm run build

# Build Storybook for deployment
npm run build-storybook

# Preview production build
npm run preview
```

## 🛠️ Development

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite development server (http://localhost:5173) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run storybook` | Start Storybook development server (http://localhost:6006) |
| `npm run build-storybook` | Build Storybook for deployment |

### Project Structure

```
src/
├── components/                    # Web components (co-located with stories)
│   ├── AppButton/
│   │   ├── AppButton.ts          # Component implementation
│   │   ├── AppButton.stories.ts  # Storybook stories
│   │   └── index.ts              # Component export
│   ├── TextInput/
│   │   ├── TextInput.ts
│   │   ├── TextInput.stories.ts
│   │   └── index.ts
│   ├── SelectDropdown/
│   ├── DynamicForm/
│   ├── FormContainer/
│   ├── CompleteDemo.stories.ts   # Full examples
│   └── index.ts                  # Main component exports
├── main.ts                       # Demo application entry
├── style.css                     # Global styles
└── vite-env.d.ts                # TypeScript environment
```

## 📦 Components

This project includes 5 production-ready form components:

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

## ✨ Features

- 🎨 **Modern Design System** - Consistent styling and theming
- ♿ **Accessibility First** - ARIA support and keyboard navigation
- 📱 **Responsive** - Works on desktop, tablet, and mobile
- 🔧 **TypeScript** - Full type safety and IntelliSense
- 📖 **Storybook Integration** - Interactive documentation and testing
- ⚡ **Performance** - Optimized with Lit's efficient rendering
- 🧪 **Testing Ready** - Prepared for unit and integration tests
- 🎯 **Path Aliases** - Clean imports with `@/components`

## 🌐 Browser Support

These components work in all modern browsers that support:
- **Custom Elements v1**
- **Shadow DOM v1** 
- **ES2017+**

Supported browsers:
- Chrome 54+
- Firefox 63+
- Safari 10.1+
- Edge 79+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-component`
3. Make your changes
4. Add/update tests and Storybook stories
5. Ensure accessibility compliance
6. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

**Built with ❤️ using [Lit](https://lit.dev/) and [Storybook](https://storybook.js.org/)**
