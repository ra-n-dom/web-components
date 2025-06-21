import { LitElement, html, css } from 'lit';

export class TestButton extends LitElement {
  static styles = css`
    button {
      background: blue;
      color: white;
      padding: 10px;
      border: none;
      border-radius: 4px;
    }
  `;

  render() {
    return html`<button><slot></slot></button>`;
  }
}

customElements.define('test-button', TestButton);
