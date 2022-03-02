import './style.css';
import { Project, arrProjects, currentProjects } from './projects';
import { htmlElementMaker, randomIdSetter, fieldCleaner } from './dom';


const addProjects = document.getElementById('projects-form-submit');

addProjects.addEventListener('submit', e => {
    e.preventDefault;

    let testInput = document.getElementById('new-project').value;

    // fieldCleaner('entry-left');

    const newProjectEntry = new Project(testInput);
    arrProjects.push(newProjectEntry);

    Project.renderProjects();
    
    newProjectEntry.testPrint();
    // newProjectEntry.render();
    // newProjectEntry.renderProjects();

    // renderProjects(arrProjects);

})

window.onload(Project.renderProjects());