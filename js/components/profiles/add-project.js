class AddProjectContainer extends HTMLElement {
    constructor() {
      super();
      console.log("Add Project Container Initialized");
    }
  
    connectedCallback() {

       

        this.innerHTML = `<div style="margin-top: 40px;" class="card">
            <h3>Add Project</h3>
            <input type="text" id="projectName" style="margin-top: 30px;" placeholder="Project Name"> <br>
            <input type="text" id="projectDescription" style="margin-top: 10px;" placeholder="Project Description"> <br>
            <input type="text" id="projectLink" style="margin-top: 10px;" placeholder="Project Link"> <br>
            <button class="button__contained" style="margin-top: 20px;" id="addProject">Add Project</button>
        </div>`
        
        this.querySelector('#addProject').addEventListener('click', this.handleAddProject.bind(this));
        
    }

    handleAddProject(){
        const projectName = this.querySelector('#projectName').value;
        const projectDescription = this.querySelector('#projectDescription').value;
        const projectLink = this.querySelector('#projectLink').value;
        const projects = JSON.parse(localStorage.getItem('projects')) || [];
        const userKey = localStorage.getItem('currentPortfolio');
        const user = JSON.parse(localStorage.getItem(userKey));
        const key = `project_${Date.now()}`;
        const project = {
            projectName,
            projectDescription,
            projectLink,
            author: user.name,
            authorEmail: user.email,
            createdAt: new Date().toISOString()
        }
        localStorage.setItem(key, JSON.stringify(project));
        projects.push(key);
        localStorage.setItem('projects', JSON.stringify(projects));
        window.location.reload();
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

export default customElements.define("add-project", AddProjectContainer);