class ProjectContainer extends HTMLElement {
    constructor() {
      super();
      console.log("Add Project Container Initialized");
    }
  
    connectedCallback() {
        const projectKeys = JSON.parse(localStorage.getItem('projects')) || [];
        projectKeys.map(key => {
            const project = JSON.parse(localStorage.getItem(key));
            console.log(project)
            this.innerHTML = `<div class="card">
                <h2>${project.projectName}</h2>
                <p style="font-size:14px;margin-top:10px;margin-bottom:15px">${project.projectDescription}</p>
                <p style="font-size:14px">Author : ${project.author}</p>
                <p style="font-size:14px">Email : ${project.authorEmail}</p>
                <p style="font-size:14px">Posted On : ${new Date(project.createdAt).toLocaleString()}</p>
                
                <a  href="${project.projectLink}" target="_blank">
                <button class="button__contained" style="margin-top:20px">Visit Project</button>
                </a>
            </div>`
        }).join('');     
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

export default customElements.define("project-container", ProjectContainer);