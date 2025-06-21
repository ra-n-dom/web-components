import { LitElement, html, css } from 'lit';

export class DynamicForm extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    
    .dynamic-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      background-color: #fafafa;
    }
    
    .form-actions {
      display: flex;
      gap: 0.5rem;
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid #e0e0e0;
    }
    
    .submit-button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
    }
    
    .submit-button:hover {
      background-color: #0056b3;
    }
    
    .submit-button:disabled {
      background-color: #6c757d;
      cursor: not-allowed;
    }
    
    .reset-button {
      background-color: #6c757d;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
    }
    
    .reset-button:hover {
      background-color: #545b62;
    }
  `;

  static properties = {
    showActions: { type: Boolean },
    submitText: { type: String },
    resetText: { type: String },
    disabled: { type: Boolean }
  };

  declare showActions: boolean;
  declare submitText: string;
  declare resetText: string;
  declare disabled: boolean;

  constructor() {
    super();
    this.showActions = true;
    this.submitText = 'Submit';
    this.resetText = 'Reset';
    this.disabled = false;
  }

  private _handleSubmit(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    
    // Collect form data from form elements and custom components
    const formData = new FormData(form);
    const data: Record<string, any> = {};
    
    // Get data from FormData (standard form elements)
    formData.forEach((value, key) => {
      data[key] = value;
    });
    
    // Get data from custom web components
    const customInputs = form.querySelectorAll('text-input, select-dropdown');
    customInputs.forEach((input: any) => {
      if (input.name || input.id) {
        const key = input.name || input.id;
        data[key] = input.value;
      }
    });
    
    this.dispatchEvent(new CustomEvent('form-submit', {
      detail: { data, formElement: form },
      bubbles: true
    }));
  }

  private _handleReset(e: Event) {
    e.preventDefault();
    const form = this.shadowRoot?.querySelector('form') as HTMLFormElement;
    
    if (form) {
      form.reset();
      
      // Reset custom web components
      const customInputs = form.querySelectorAll('text-input, select-dropdown');
      customInputs.forEach((input: any) => {
        if ('value' in input) {
          input.value = '';
        }
      });
    }
    
    this.dispatchEvent(new CustomEvent('form-reset', {
      detail: { formElement: form },
      bubbles: true
    }));
  }

  render() {
    return html`
      <form class="dynamic-form" @submit=${this._handleSubmit}>
        <slot></slot>
        
        ${this.showActions ? html`
          <div class="form-actions">
            <button 
              type="submit" 
              class="submit-button"
              ?disabled=${this.disabled}
            >
              ${this.submitText}
            </button>
            <button 
              type="button" 
              class="reset-button"
              @click=${this._handleReset}
              ?disabled=${this.disabled}
            >
              ${this.resetText}
            </button>
          </div>
        ` : ''}
      </form>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dynamic-form': DynamicForm;
  }
}

customElements.define('dynamic-form', DynamicForm);
