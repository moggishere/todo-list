import { htmlElementMaker, randomIdSetter, fieldCleaner } from './dom'

const projects = document.getElementById('entry-left');

class Project {

    constructor(projectName) {
        this.projectName = projectName;
        this.id = randomIdSetter();
        this.tasks = [];
    }

    testPrint() {
        console.log(this.id)
        console.log(arrProjects);
    }

    render() {

        const newDiv = htmlElementMaker('div', this.id, ['folder-entry'], null);
        const newEntryName = htmlElementMaker('p', null, null, `${this.projectName}`);
        const buttonsDiv = htmlElementMaker('div', null, null, null);
        const deleteButton = htmlElementMaker('button', null, ['buttons-main', 'buttons-entry'], 'delete');
        const editButton = htmlElementMaker('button', null, ['buttons-main', 'buttons-entry'], 'edit');

        deleteButton.addEventListener('click', e => {
            this.delete();
        });

        const deleteButtonImg = htmlElementMaker('img', null, null, null);
        const editButtonImg = htmlElementMaker('img', null, null, null);

        deleteButtonImg.src = './img/trash-can.svg';
        editButtonImg.src = './img/square-edit-outline.svg';

        deleteButton.appendChild(deleteButtonImg);
        editButton.appendChild(editButtonImg);

        newDiv.appendChild(newEntryName);
        buttonsDiv.appendChild(deleteButton);
        buttonsDiv.appendChild(editButton);
        newDiv.appendChild(buttonsDiv);

        projects.appendChild(newDiv);

        newDiv.addEventListener('click', e => {
            console.log(`you clicked ${this.id}`);

            currentProjects = this;
            currentProjects.active = false;
            // this.rend
        })

    }

    renderTasks() {
        const tasks = document.getElementById('entry-right');
        tasks.innerHTML='';
        this.tasks.forEach((task) => task.render());
    }

    delete() {
        arrProjects = arrProjects.filter((project) => project.id !== this.id);
        Project.renderProjects();
    }

    static renderProjects() {
        projects.innerHTML = '';
        arrProjects.forEach((project) => project.render());
    }

    static setCurrentProject (project) {
        currentProjects = project;
    }

}


//project objects will be in this array, each object holds another array of arrTasks
let arrProjects = [new Project('this is a test entry')];
let currentProjects = arrProjects[0];

export { Project, arrProjects, currentProjects }