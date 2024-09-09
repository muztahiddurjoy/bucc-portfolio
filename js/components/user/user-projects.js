class UserProjectContainer extends HTMLElement {
    constructor() {
      super();
      console.log("User Project Container Initialized");
    }
  
    connectedCallback() {
        const projectKeys = JSON.parse(localStorage.getItem('projects')) || [];
        const userKey = localStorage.getItem('currentPortfolio');
        const user = JSON.parse(localStorage.getItem(userKey));
        let projects_html = ``;
        projectKeys.map(key => {
            const project = JSON.parse(localStorage.getItem(key));
            if(project.authorEmail !== user.email){
                return;
            }
            projects_html += `<div class="card fadeInUp">
                <h2>${project.projectName}</h2>
                <p style="font-size:14px;margin-top:10px;margin-bottom:15px">${project.projectDescription}</p>
                <p style="font-size:14px">Author : ${project.author}</p>
                <p style="font-size:14px">Email : ${project.authorEmail}</p>
                <p style="font-size:14px">Posted On : ${new Date(project.createdAt).toLocaleString()}</p>
                
                <a  href="${project.projectLink}" target="_blank">
                <button class="button__contained" style="margin-top:20px">Visit Project</button>
                </a>
            </div>`
        });     
        this.innerHTML =`<div class="flex wrap" style="margin-top: 30px;">${projects_html}</div>`
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

export default customElements.define("user-projects", UserProjectContainer);