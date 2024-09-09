class RegisterForm extends HTMLElement {
    constructor() {
        super();
        console.log("Register Form Initialized");
    }


    connectedCallback() {
        this.innerHTML = `<div class="card fadeInUp">
                <h3 class="text-center">Register</h3>
                <div class="">
                    <input type="text" id="name" style="margin-top: 10px;width:230px" placeholder="Full Name"> <br/>
                    <input type="text" id="age" style="margin-top: 10px;width:230px" placeholder="Age"> <br/>
                    <input type="text" id="email" style="margin-top: 10px;width:230px" placeholder="E-mail"> <br/>
                    <input type="text" id="experience" style="margin-top: 10px;width:230px" placeholder="Work Experience"> <br/>
                    <input type="password" id="password" style="margin-top: 10px;width:230px" placeholder="Password">
                </div>
                <div class="flex center">
                    <button id="loginButton" class="button__contained" style="margin-top: 10px;">Register</button>
                </div>
                <div class="flex center">
                    <a href="login.html" style="margin-top: 10px;font-size:13px">Already have an account? Login</a>
                </div>
            </div>`;

        this.querySelector('#loginButton').addEventListener('click', this.handleSubmit.bind(this));
    }

    handleSubmit(event) {
        event.preventDefault();
        const email = this.querySelector('#email').value;
        const password = this.querySelector('#password').value;
        const name = this.querySelector('#name').value;
        const age = this.querySelector('#age').value;
        const experience = this.querySelector('#experience').value;

        const data = {
            email,
            password:btoa(password),
            name,
            age,
            experience
        };

        const key = `portfolio_${Date.now()}`;
        localStorage.setItem(key, JSON.stringify(data));
        const portfolios = JSON.parse(localStorage.getItem('portfolios')) || [];
        portfolios.push(key);
        localStorage.setItem('portfolios', JSON.stringify(portfolios));
        localStorage.setItem('currentPortfolio', key);
        window.location.href = 'user.html';
        
    }

    disconnectedCallback() {
    }
}

export default customElements.define('register-form', RegisterForm);