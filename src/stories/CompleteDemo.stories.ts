import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/index.js';

const meta: Meta = {
  title: 'Examples/Complete Form Demo',
  parameters: {
    docs: {
      description: {
        component: 'A comprehensive example showing all form components working together.'
      }
    }
  }
};

export default meta;
type Story = StoryObj;

export const RegistrationForm: Story = {
  render: () => html`
    <form-container
      title="Create Your Account"
      description="Join our community by filling out the registration form below."
    >
      <dynamic-form
        submitText="Create Account"
        resetText="Clear Form"
        @form-submit=${(e: CustomEvent) => {
          console.log('Registration form submitted:', e.detail.data);
          alert('Account created successfully! Check console for details.');
        }}
        @form-reset=${() => {
          console.log('Form reset');
        }}
      >
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <text-input
            label="First Name"
            required
            placeholder="Enter your first name"
          ></text-input>
          
          <text-input
            label="Last Name"
            required
            placeholder="Enter your last name"
          ></text-input>
        </div>
        
        <text-input
          label="Email Address"
          type="email"
          required
          placeholder="you@example.com"
        ></text-input>
        
        <text-input
          label="Phone Number"
          type="tel"
          placeholder="+1 (555) 123-4567"
        ></text-input>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <select-dropdown
            label="Country"
            required
            placeholder="Select your country"
            .options=${[
              'United States',
              'Canada',
              'United Kingdom',
              'Australia',
              'Germany',
              'France',
              'Japan',
              'Other'
            ]}
          ></select-dropdown>
          
          <select-dropdown
            label="Account Type"
            required
            placeholder="Choose account type"
            .options=${[
              { value: 'personal', label: 'Personal' },
              { value: 'business', label: 'Business' },
              { value: 'enterprise', label: 'Enterprise' }
            ]}
          ></select-dropdown>
        </div>
        
        <select-dropdown
          label="How did you hear about us?"
          placeholder="Optional - help us improve"
          .options=${[
            'Google Search',
            'Social Media',
            'Friend Referral',
            'Online Advertisement',
            'Blog or Article',
            'Conference or Event',
            'Other'
          ]}
        ></select-dropdown>
        
        <text-input
          label="Additional Comments"
          placeholder="Tell us anything else you'd like us to know..."
        ></text-input>
      </dynamic-form>
    </form-container>
  `
};

export const ContactForm: Story = {
  render: () => html`
    <form-container
      title="Get in Touch"
      description="Have a question or need support? We're here to help!"
      variant="compact"
    >
      <dynamic-form
        submitText="Send Message"
        resetText="Clear"
        @form-submit=${(e: CustomEvent) => {
          console.log('Contact form submitted:', e.detail.data);
          alert('Message sent! We\'ll get back to you soon.');
        }}
      >
        <text-input
          label="Your Name"
          required
          placeholder="How should we address you?"
        ></text-input>
        
        <text-input
          label="Email Address"
          type="email"
          required
          placeholder="We'll reply to this email"
        ></text-input>
        
        <select-dropdown
          label="Message Type"
          required
          placeholder="What can we help with?"
          .options=${[
            'General Question',
            'Technical Support',
            'Billing Inquiry',
            'Feature Request',
            'Bug Report',
            'Partnership Opportunity'
          ]}
        ></select-dropdown>
        
        <text-input
          label="Subject"
          required
          placeholder="Brief summary of your message"
        ></text-input>
        
        <text-input
          label="Message"
          required
          placeholder="Please provide details about your inquiry..."
        ></text-input>
      </dynamic-form>
    </form-container>
  `
};

export const SurveyForm: Story = {
  render: () => html`
    <form-container
      title="Product Feedback Survey"
      description="Your feedback helps us improve our products and services."
      variant="wide"
    >
      <dynamic-form
        submitText="Submit Feedback"
        @form-submit=${(e: CustomEvent) => {
          console.log('Survey submitted:', e.detail.data);
          alert('Thank you for your feedback!');
        }}
      >
        <text-input
          label="Product/Service Used"
          required
          placeholder="Which product or service are you reviewing?"
        ></text-input>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <select-dropdown
            label="Overall Rating"
            required
            placeholder="Rate your experience"
            .options=${[
              '5 - Excellent',
              '4 - Very Good',
              '3 - Good',
              '2 - Fair',
              '1 - Poor'
            ]}
          ></select-dropdown>
          
          <select-dropdown
            label="Recommendation Likelihood"
            required
            placeholder="Would you recommend us?"
            .options=${[
              'Definitely',
              'Very Likely',
              'Somewhat Likely',
              'Not Likely',
              'Definitely Not'
            ]}
          ></select-dropdown>
        </div>
        
        <text-input
          label="What did you like most?"
          placeholder="Tell us about the best parts of your experience"
        ></text-input>
        
        <text-input
          label="What could we improve?"
          placeholder="How can we make your experience better?"
        ></text-input>
        
        <text-input
          label="Additional Comments"
          placeholder="Any other feedback you'd like to share?"
        ></text-input>
        
        <text-input
          label="Email (Optional)"
          type="email"
          placeholder="Leave your email if you'd like a follow-up"
        ></text-input>
      </dynamic-form>
    </form-container>
  `
};

export const ComponentShowcase: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 1200px; margin: 0 auto;">
      <!-- Buttons Demo -->
      <form-container title="Button Components" borderless>
        <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 1rem;">
          <app-button variant="primary">Primary Action</app-button>
          <app-button variant="secondary">Secondary Action</app-button>
          <app-button variant="link">Link Action</app-button>
          <app-button variant="primary" disabled>Disabled</app-button>
        </div>
      </form-container>
      
      <!-- Inputs Demo -->
      <form-container title="Input Components" borderless>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <text-input label="Text Input" placeholder="Enter text here"></text-input>
          <text-input label="Required Field" required placeholder="This field is required"></text-input>
          <text-input label="Email Input" type="email" placeholder="email@example.com"></text-input>
          <text-input label="With Error" error="This field has an error" value="Invalid value"></text-input>
        </div>
      </form-container>
      
      <!-- Selects Demo -->
      <form-container title="Select Components" borderless>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <select-dropdown
            label="Simple Options"
            placeholder="Choose an option"
            .options=${['Option 1', 'Option 2', 'Option 3']}
          ></select-dropdown>
          
          <select-dropdown
            label="Object Options"
            placeholder="Select a role"
            .options=${[
              { value: 'admin', label: 'Administrator' },
              { value: 'user', label: 'Regular User' },
              { value: 'guest', label: 'Guest User', disabled: true }
            ]}
          ></select-dropdown>
        </div>
      </form-container>
    </div>
  `
};
