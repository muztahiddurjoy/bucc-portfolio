class Footer extends HTMLElement {
    constructor() {
      super();
      console.log("Footer Initialized");
    }
  
    connectedCallback() {
        let year = new Date().getFullYear()

        this.innerHTML = `<div class="flex bg-tertiary" style="display: flex; justify-content: center; padding: 10px;">
        <p style="font-size: 13px; font-weight: 300">&copy; BUCC ${year} | All Rights Reserved</p>
     </div>`
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