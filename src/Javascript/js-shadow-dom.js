const template = document.createElement("template");
template.innerHTML = `
<style>.wrapper { background: red; } </style>
<div class="wrapper"><h1>my-component</h1></div>
`;

// <basic-web-component filter="some filter"><div>text-content</div></basic-web-component>
class BasicWebComponent extends HTMLElement {
  constructor() {
    super(); // Always call super first in constructor
    this.attachShadow({ mode: "open" });
    // we can avoid usage of head and body
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    // attributes available onMount but not inner dom nodes
    console.log("getAttribute", this.getAttribute("filter"));
  }

  disconnectedCallback() {
    // removed from page
  }

  adoptedCallback() {
    // moved to new page
  }

  static get observedAttributes() {
    return ["filter"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    //
  }
}

window.customElements.define("basic-web-component", BasicWebComponent);
