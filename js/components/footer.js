class Footer extends HTMLElement {
    constructor() {
      super();
      console.log()
    }
  
    connectedCallback() {
        let date = new Date(this.getAttribute('datetime') || Date.now());

        this.innerHTML = `<h1>Footer nigga ${date}</h1>`
    }
  
    disconnectedCallback() {
    }
  
    static get observedAttributes() {
      return [];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
    
    }
  
    adoptedCallback() {
      
    }
  
    
  }

export default customElements.define("bucc-footer", Footer);