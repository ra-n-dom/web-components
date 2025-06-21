import { LitElement, html, css } from 'lit';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export class SelectDropdownSimple extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin-bottom: 1rem;
    }
    
    select {
      font-size: 1rem;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: white;
      cursor: pointer;
    }
  `;

  static properties = {
    options: { type: Array }
  };

  options: (string | SelectOption)[] = [];

  render() {
    console.log('SelectDropdownSimple render - options:', this.options);
    
    return html`
      <div>
        <p>Options (${this.options.length}): ${JSON.stringify(this.options)}</p>
        <select>
          <option value="">Choose...</option>
          ${this.options.map((opt, index) => {
            console.log(`Option ${index}:`, opt, typeof opt);
            
            if (typeof opt === 'string') {
              return html`<option value="${opt}">STRING: ${opt}</option>`;
            } else {
              return html`<option value="${opt.value}">OBJECT: ${opt.label}</option>`;
            }
          })}
        </select>
      </div>
    `;
  }
}

customElements.define('select-dropdown-simple', SelectDropdownSimple);
