class Navbar extends HTMLElement{
    constructor() {
        super();
        console.log("Navbar Initialized");
      }
    
      connectedCallback() {
          let date = new Date(this.getAttribute('datetime') || Date.now());
  
          this.innerHTML = `<nav class="nav__container">
                <p class="nav__title">BUCC Portfolio</p>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="user.html">Profiles</a>
                    </li>
                    <li>
                     <a href="login.html">
                        <button class="button__contained">Login</button>
                     </a>
                    </li>
                </ul>
            </nav>`
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

export default customElements.define('bucc-navbar',Navbar)