import { LitElement, html, css } from 'lit';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export class SelectDropdown extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin-bottom: 1rem;
    }
    
    .select-container {
      display: flex;
      flex-direction: column;
    }
    
    label {
      font-size: 0.9rem;
      color: #333;
      margin-bottom: 0.25rem;
      font-weight: 500;
    }
    
    select {
      font-size: 1rem;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: white;
      cursor: pointer;
      transition: border-color 0.2s ease;
    }
    
    select:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
    }
    
    select:disabled {
      background-color: #f8f9fa;
      cursor: not-allowed;
      opacity: 0.6;
    }
    
    .required-asterisk {
      color: #dc3545;
    }
    
    .error {
      color: #dc3545;
      font-size: 0.8rem;
      margin-top: 0.25rem;
    }
  `;

  static properties = {
    label: { type: String },
    options: { type: Array },
    value: { type: String },
    required: { type: Boolean },
    disabled: { type: Boolean },
    placeholder: { type: String },
    error: { type: String }
  };

  declare label: string;
  declare options: (string | SelectOption)[];
  declare value: string;
  declare required: boolean;
  declare disabled: boolean;
  declare placeholder: string;
  declare error: string;

  constructor() {
    super();
    this.label = '';
    this.options = [];
    this.value = '';
    this.required = false;
    this.disabled = false;
    this.placeholder = 'Select an option...';
    this.error = '';
  }

  private _normalizeOptions(): SelectOption[] {
    if (!Array.isArray(this.options)) {
      console.error('Options is not an array:', this.options);
      return [];
    }
    
    return this.options.map((opt, index) => {
      if (typeof opt === 'string') {
        return { value: opt, label: opt, disabled: false };
      } else if (opt && typeof opt === 'object') {
        // Handle object options
        const value = opt.value !== undefined ? String(opt.value) : `option-${index}`;
        const label = opt.label !== undefined ? String(opt.label) : value;
        const disabled = Boolean(opt.disabled);
        
        return { value, label, disabled };
      } else {
        // Handle unexpected types
        console.warn('Unexpected option type:', typeof opt, opt);
        const fallback = String(opt);
        return { value: fallback, label: fallback, disabled: false };
      }
    });
  }

  private _handleChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    this.value = target.value;
    this.dispatchEvent(new CustomEvent('select-change', {
      detail: { value: this.value },
      bubbles: true
    }));
  }

  render() {
    const normalizedOptions = this._normalizeOptions();
    
    return html`
      <div class="select-container">
        ${this.label ? html`
          <label>
            ${this.label}
            ${this.required ? html`<span class="required-asterisk">*</span>` : ''}
          </label>
        ` : ''}
        <select 
          .value=${this.value} 
          ?required=${this.required}
          ?disabled=${this.disabled}
          @change=${this._handleChange}
        >
          ${this.placeholder ? html`
            <option value="" ?disabled=${this.required}>
              ${this.placeholder}
            </option>
          ` : ''}
          ${normalizedOptions.map(option => {
            // Ensure we have strings
            const optionValue = String(option.value);
            const optionLabel = String(option.label);
            const isDisabled = Boolean(option.disabled);
            
            return html`
              <option 
                value=${optionValue}
                ?disabled=${isDisabled}
              >
                ${optionLabel}
              </option>
            `;
          })}
        </select>
        ${this.error ? html`<div class="error">${this.error}</div>` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'select-dropdown': SelectDropdown;
  }
}

customElements.define('select-dropdown', SelectDropdown);
