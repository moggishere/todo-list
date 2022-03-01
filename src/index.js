import './style.css';
import { Project } from './projects';
import { htmlElementMaker, randomIdSetter } from './dom';


const testing = document.getElementById('projects-form-submit');

testing.addEventListener('submit', e => {
    e.preventDefault;

    let testInput = document.getElementById('new-project').value;

    document.getElementById('entry-left').innerHTML = ''

    const $$ = new Project(testInput);
    $$.testPrint();

})