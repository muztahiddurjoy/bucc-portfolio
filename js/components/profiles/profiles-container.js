class ProfileContainer extends HTMLElement {
    constructor() {
      super();
      console.log("Profile Container Initialized");
    }
  
    connectedCallback() {

        const portfolios = JSON.parse(localStorage.getItem('portfolios')) || [];
        const user = portfolios.map(portfolio => {
            return JSON.parse(localStorage.getItem(portfolio));
        });
        console.log("USER",user)

        this.innerHTML = `<div class="container full-screen">
        <h1 class="fadeInLeft">Profiles</h1>
        <div class="flex wrap" style="margin-top:20px">
        ${user.map(user => `<div class="card fadeInUp" style="font-size: 14px;">
                <p>Name : <span style="font-weight: 700;">${user.name}</span></p>
                <p>Age : <span style="font-weight: 700;">${user.age}</span></p>
                <p>Email : <span class="text-light">${user.email}</span></p>
                <p>Experiences : <span>${user.experience}</span></p>
            </div>`).join('')}
            
            
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

export default customElements.define("profile-container", ProfileContainer);