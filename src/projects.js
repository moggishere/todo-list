import { htmlElementMaker, randomIdSetter } from './dom'

const projects = document.getElementById('left-content');

class Project {

    constructor(projectName) {
        this.projectName = projectName;
        this.id = randomIdSetter();
        this.tasks = [];
    }

    testPrint() {
        console.log(this.id)
    }

}

const renderProjects = () => {

}



//project objects will be in this array, each object holds another array of arrTasks
let arrProjects = [new Project('testing')];
let currentProjects = arrProjects[0];

export { Project, arrProjects, currentProjects }