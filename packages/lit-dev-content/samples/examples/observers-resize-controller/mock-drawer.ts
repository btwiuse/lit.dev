import {LitElement, html, css} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';

// Material icon: https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Atouch_app%3AFILL%400%3Bwght%40400%3BGRAD%400%3Bopsz%4048
const touch_app_svg = html`<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="white"
  height="48"
  width="48"
  viewBox="0 0 48 48"
>
  <path
    d="M23.25 2q4.55 0 7.775 3.175Q34.25 8.35 34.25 12.9q0 2.6-1.125 4.9Q32 20.1 29.95 21.7h-1.7v-2.5q1.45-1.15 2.225-2.8.775-1.65.775-3.5 0-3.3-2.35-5.6T23.25 5q-3.3 0-5.65 2.3-2.35 2.3-2.35 5.6 0 1.85.775 3.5t2.225 2.8v3.6q-2.8-1.45-4.4-4.1-1.6-2.65-1.6-5.8 0-4.55 3.225-7.725T23.25 2Zm-1.9 42q-.85 0-1.6-.325-.75-.325-1.3-.875L8.15 32.5l2.8-2.9q.7-.7 1.575-1.075t1.825-.125l3.9.9V13q0-2.1 1.45-3.55Q21.15 8 23.25 8q2.1 0 3.55 1.45 1.45 1.45 1.45 3.55v8.6h1.3q.25 0 .45.1t.45.2l7.4 3.6q1.2.55 1.775 1.775.575 1.225.325 2.525l-1.8 10.9q-.25 1.45-1.4 2.375t-2.6.925Zm-.4-3H35l2.15-12.45L28 24h-2.75V13q0-.9-.55-1.45-.55-.55-1.45-.55-.9 0-1.45.55-.55.55-.55 1.45v19.95l-7.7-1.65-1.15 1.15ZM35 41H20.95 35Z"
  />
</svg>`;

/**
 * `mock-drawer` imitates a menu drawer on the page. Clicking this drawer
 * expands and contracts it.
*/
@customElement('mock-drawer')
export class MockDrawer extends LitElement {
  @state() extended = false;

  toggleExtended() {
    this.extended = !this.extended;
  }

  render() {
    return html`
      <div
        style=${styleMap({width: this.extended ? '200px' : '50px'})}
        @click=${this.toggleExtended}
      >
        ${touch_app_svg}
      </div>
    `;
  }

  static styles = css`
    :host {
      display: flex;
      height: calc(100vh - 90px);
    }
    div {
      background-color: #324fff;
      transition: width 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      cursor: pointer;
      display: flex;
      align-items: center;
    }
    div:hover {
      background-color: #101ccc;
    }
  `;
}