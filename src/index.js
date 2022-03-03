import './style.css';
import { Project, arrProjects, currentProjects } from './projects';
import { Task } from './tasks';
import { htmlElementMaker, randomIdSetter, fieldCleaner } from './dom';


const addProjects = document.getElementById('projects-form-submit');

addProjects.addEventListener('submit', e => {
    e.preventDefault;

    let projectInput = document.getElementById('new-project').value;

    // fieldCleaner('entry-left');

    const newProjectEntry = new Project(projectInput);
    arrProjects.push(newProjectEntry);

    Project.renderProjects();
    
    newProjectEntry.testPrint();
    // newProjectEntry.render();
    // newProjectEntry.renderProjects();

    // renderProjects(arrProjects);

});

const addTasks = document.getElementById('tasks-form-submit');

addTasks.addEventListener('submit', e => {
    e.preventDefault;

    let taskInput = document.getElementById('new-task').value;
    let taskDate = document.getElementById('task-date').value;

    const newTaskEntry = new Task(taskInput, taskDate);
    currentProjects.tasks.push(newTaskEntry);
    newTaskEntry.render();

    console.log(`testing ${taskInput}, ${taskDate}`);
    newTaskEntry.testPrint();
});

Project.renderProjects();