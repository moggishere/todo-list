import './style.css';
import { Project } from './projects'

function component() {

    const testing = document.getElementById('projects-form-submit');

    testing.addEventListener('submit', e => {
        e.preventDefault;
        let testInput = document.getElementById('new-project').value;
        testInput = testInput.toString();

        // const project = new Project(testInput);
        // console.log(testInput);
    })

}

document.body.appendChild(component());