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
                    <input type="text" id="email" style="margin-top: 10px;width:230px" placeholder="E-mail"> <br/>
                    <input type="password" id="password" style="margin-top: 10px;width:230px" placeholder="Password">
                </div>
                <div class="flex center">
                    <button class="button__contained" id="loginBtn" style="margin-top: 10px;">Login</button>
                </div>
                <div class="flex center">
                    <a href="register.html" style="margin-top: 10px;font-size:13px">Don't have an account? Register</a>
                </div>
            </div>`
        this.querySelector('#loginBtn').addEventListener('click', this.handleLogin.bind(this));
    }
    handleLogin(){
        const email = this.querySelector('#email').value;
        const password = this.querySelector('#password').value;
        const portfolios = JSON.parse(localStorage.getItem('portfolios')) || [];
        const user = portfolios.find(portfolio => {
            const data = JSON.parse(localStorage.getItem(portfolio));
            return data.email === email && data.password === btoa(password);
        });
        if(user){
            localStorage.setItem('currentPortfolio', user);
            window.location.href = 'user.html';
        }
        else{
            alert('Invalid Credentials');
        }
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