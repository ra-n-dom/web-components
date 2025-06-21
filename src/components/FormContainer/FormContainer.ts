import { LitElement, html, css } from 'lit';

export class FormContainer extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    
    .container {
      padding: 1.5rem;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      background-color: white;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      max-width: 600px;
      margin: 0 auto;
    }
    
    .container.compact {
      padding: 1rem;
      max-width: 400px;
    }
    
    .container.wide {
      max-width: 800px;
    }
    
    .container.borderless {
      border: none;
      box-shadow: none;
      background-color: transparent;
    }
    
    .header {
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid #e0e0e0;
    }
    
    .title {
      font-size: 1.5rem;
      font-weight: 600;
      color: #333;
      margin: 0 0 0.5rem 0;
    }
    
    .description {
      font-size: 0.9rem;
      color: #666;
      margin: 0;
    }
  `;

  static properties = {
    title: { type: String },
    description: { type: String },
    variant: { type: String },
    borderless: { type: Boolean }
  };

  declare title: string;
  declare description: string;
  declare variant: 'default' | 'compact' | 'wide';
  declare borderless: boolean;

  constructor() {
    super();
    this.title = '';
    this.description = '';
    this.variant = 'default';
    this.borderless = false;
  }

  render() {
    const containerClasses = [
      'container',
      this.variant !== 'default' ? this.variant : '',
      this.borderless ? 'borderless' : ''
    ].filter(Boolean).join(' ');

    return html`
      <div class=${containerClasses}>
        ${this.title || this.description ? html`
          <div class="header">
            ${this.title ? html`<h2 class="title">${this.title}</h2>` : ''}
            ${this.description ? html`<p class="description">${this.description}</p>` : ''}
          </div>
        ` : ''}
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'form-container': FormContainer;
  }
}

customElements.define('form-container', FormContainer);
