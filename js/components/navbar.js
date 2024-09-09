class Navbar extends HTMLElement{
    constructor() {
        super();
        console.log("Navbar Initialized");
      }
    
      connectedCallback() {
        
        const currentUserID = localStorage.getItem('currentPortfolio');
        const user = JSON.parse(localStorage.getItem(currentUserID));

          this.innerHTML = `<nav class="nav__container">
                <p class="nav__title">BUCC Portfolio</p>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="profiles.html">Profiles</a>
                    </li>
                    <li>
                        <a href="projects.html">Projects</a>
                    </li>
                    <li>
                     ${!user?`<a href="login.html">
                        <button class="button__contained">Login</button>
                     </a>`:`<a href="user.html">
                     <button class="button__contained">${String(user.name).length>6?String(user.name).substring(0,6)+"...":user.name}</button>
                  </a>`}
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