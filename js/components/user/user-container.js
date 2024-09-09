class UserContainer extends HTMLElement {
    constructor() {
      super();
      console.log("User Container Initialized");
    }
  
    connectedCallback() {
        const currentUserID = localStorage.getItem('currentPortfolio');
        const user = JSON.parse(localStorage.getItem(currentUserID));
        if(!user){
            window.location.href = 'login.html';
        }
        else{
        this.innerHTML = `<div class="">
            <h1><span class="text-light">Welcome </span>${user.name}</h1>

            <div style="margin-top: 20px;">
                <p>Age : ${user.age}</p>
                <p>Email : ${user.email}</p>
                <p>Experiences : ${user.experience}</p>
            </div>

        <button class="button__outlined" style="margin-top: 20px;" id="logoutButton">Logout</button>
        </div>`
        }
        this.querySelector('#logoutButton').addEventListener('click', this.handleLogout.bind(this));
    }
    
    handleLogout(){
        localStorage.removeItem('currentPortfolio');
        window.location.href = '/';
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

export default customElements.define("user-container", UserContainer);