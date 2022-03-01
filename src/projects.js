import { htmlElementMaker, randomIdSetter } from './dom'

const projects = document.getElementById('left-content');

class Project {

    constructor(projectName) {
        this.projectName = projectName;
        this.id = randomIdSetter();
        this.tasks = [];
    }

    render () {

        const newDiv = htmlElementMaker('div', this.id, [folder-entry], null);
        const newDivName = htmlElementMaker('p', null, null, this.projectName);
        const editDiv = htmlElementMaker('button', null, [buttons-main, buttons-entry], null);
        const deleteDiv = htmlElementMaker('button', null, [buttons-main, buttons-entry], null);
        const editDivImg = htmlElementMaker('img', null, null, null);
        const deleteDivImg = htmlElementMaker('img', null, null, null);
        editDivImg.src = './img/square-edit-outline.svg';
        deleteDivImg.src = './img/trash-can.svg';

        editDiv.appendChild(editDivImg);
        deleteDiv.appendChild(deleteDivImg);

        newDiv.appendChild(newDivName);
        newDiv.appendChild(editDiv);
        newDiv.appendChild(deleteDiv);

        projects.appendChild(newDiv);

    }

    static printTest(message) {
        return message;
    }

}



//project objects will be in this array, each object holds another array of arrTasks
let arrProjects = [new Project('testing')];
let currentProjects = arrProjects[0];