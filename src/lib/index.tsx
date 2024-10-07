import { createRoot, Root } from "react-dom/client";
import "../index.css";
import { DataField, Form } from "./components/Form";

class PingbackForm extends HTMLElement {
  root: Root | null = null;
  observer: MutationObserver | null = null;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = new URL("./style.css", import.meta.url).toString();
    if (this.shadowRoot) {
      this.shadowRoot.appendChild(link);
      this.root = createRoot(this.shadowRoot);
    }
  }

  // Método chamado quando um atributo é modificado
  static get observedAttributes() {
    return ["data-fields"];
  }

  // Método chamado quando um atributo é modificado
  attributeChangedCallback() {
    this.render(); // Re-renderiza o componente sempre que um atributo é alterado
  }

  // Método para extrair atributos e passá-los como propriedades ao React
  getProps(): { dataFields: DataField[] } {
    const dataFields = this.getAttribute("data-fields");
    return { dataFields: dataFields ? JSON.parse(dataFields) : [] };
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    if (this.observer) this.observer.disconnect();
  }

  render() {
    if (this.root)
      this.root.render(<Form dataFields={this.getProps().dataFields} />);
  }
}

customElements.define("pingback-form", PingbackForm);
