class LoginForm extends HTMLElement {
    constructor() {
      super();
      console.log("Footer Initialized");
    }
  
    connectedCallback() {
        let year = new Date().getFullYear()

        this.innerHTML = `<div class="card fadeInUp">
                <h3 class="text-center">User Login</h3>
                <div class="">
                    <input type="text" style="margin-top: 10px;width:230px" placeholder="E-mail"> <br/>
                    <input type="password" style="margin-top: 10px;width:230px" placeholder="Password">
                </div>
                <div class="flex center">
                    <button class="button__contained" style="margin-top: 10px;">Login</button>
                </div>
                <div class="flex center">
                    <a href="register.html" style="margin-top: 10px;font-size:13px">Don't have an account? Register</a>
                </div>
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

export default customElements.define("login-form", LoginForm);