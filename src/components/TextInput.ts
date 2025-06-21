import { LitElement, html, css } from 'lit';

export class TextInput extends LitElement {
  static styles = css`
    :host { 
      display: block; 
      margin-bottom: 1rem;
    }
    
    .input-container {
      display: flex;
      flex-direction: column;
    }
    
    label {
      font-size: 0.9rem;
      color: #333;
      margin-bottom: 0.25rem;
      font-weight: 500;
    }
    
    input {
      font-size: 1rem;
      padding: 0.5rem;
      box-sizing: border-box;
      width: 100%;
      border: 1px solid #ccc;
      border-radius: 4px;
      transition: border-color 0.2s ease;
    }
    
    input:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
    }
    
    input:required {
      border-left: 3px solid #dc3545;
    }
    
    .error {
      color: #dc3545;
      font-size: 0.8rem;
      margin-top: 0.25rem;
    }
    
    .required-asterisk {
      color: #dc3545;
    }
  `;

  static properties = {
    label: { type: String },
    value: { type: String },
    required: { type: Boolean },
    type: { type: String },
    placeholder: { type: String },
    disabled: { type: Boolean },
    error: { type: String }
  };

  declare label: string;
  declare value: string;
  declare required: boolean;
  declare type: string;
  declare placeholder: string;
  declare disabled: boolean;
  declare error: string;

  constructor() {
    super();
    this.label = '';
    this.value = '';
    this.required = false;
    this.type = 'text';
    this.placeholder = '';
    this.disabled = false;
    this.error = '';
  }

  render() {
    return html`
      <div class="input-container">
        ${this.label ? html`
          <label>
            ${this.label}
            ${this.required ? html`<span class="required-asterisk">*</span>` : ''}
          </label>
        ` : ''}
        <input
          type=${this.type}
          .value=${this.value}
          placeholder=${this.placeholder}
          ?required=${this.required}
          ?disabled=${this.disabled}
          @input=${this._handleInput}
          @blur=${this._handleBlur}
        />
        ${this.error ? html`<div class="error">${this.error}</div>` : ''}
      </div>
    `;
  }

  private _handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.value = target.value;
    this.dispatchEvent(new CustomEvent('input-change', {
      detail: { value: this.value },
      bubbles: true
    }));
  }

  private _handleBlur(e: Event) {
    const target = e.target as HTMLInputElement;
    this.dispatchEvent(new CustomEvent('input-blur', {
      detail: { value: target.value },
      bubbles: true
    }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'text-input': TextInput;
  }
}

customElements.define('text-input', TextInput);
