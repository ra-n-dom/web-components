import { LitElement, html, css } from 'lit';

export class AppButton extends LitElement {
  static styles = css`
    :host { 
      display: inline-block; 
    }
    
    button {
      font-size: 1rem;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    
    button.primary {
      background-color: #007bff;
      color: white;
      border: none;
    }
    
    button.primary:hover {
      background-color: #0056b3;
    }
    
    button.secondary {
      background-color: white;
      color: #007bff;
      border: 2px solid #007bff;
    }
    
    button.secondary:hover {
      background-color: #007bff;
      color: white;
    }
    
    button.link {
      background: none;
      border: none;
      color: #007bff;
      text-decoration: underline;
      padding: 0;
    }
    
    button.link:hover {
      color: #0056b3;
    }
    
    button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `;

  static properties = {
    variant: { type: String },
    disabled: { type: Boolean }
  };

  // Declare properties but let Lit handle reactivity
  declare variant: 'primary' | 'secondary' | 'link';
  declare disabled: boolean;

  constructor() {
    super();
    this.variant = 'primary';
    this.disabled = false;
  }

  render() {
    return html`
      <button 
        class=${this.variant}
        ?disabled=${this.disabled}
        @click=${this._handleClick}
      >
        <slot></slot>
      </button>
    `;
  }

  private _handleClick(e: Event) {
    if (this.disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    
    this.dispatchEvent(new CustomEvent('button-click', {
      detail: { variant: this.variant },
      bubbles: true
    }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-button': AppButton;
  }
}

customElements.define('app-button', AppButton);
