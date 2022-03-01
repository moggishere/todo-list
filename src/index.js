import './style.css';
import { Project } from './projects'

function component() {

    const testing = document.getElementById('projects-form-submit');

    testing.addEventListener('submit', e => {
        e.preventDefault;
        
    })

}

document.body.appendChild(component());

Project.printTest();