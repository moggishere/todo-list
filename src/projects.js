import { htmlElementMaker, randomIdSetter } from './dom.js'

class Projects {

    constructor (projectName) {

        this.projectName;
        this.id = randomIdSetter();
        

    }

}



//project objects will be in this array, each object holds another array of arrTasks
let arrProjects = []; 
let currentProjects = arrProjects[0];