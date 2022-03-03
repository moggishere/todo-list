import { htmlElementMaker, randomIdSetter } from './dom';
import { currentProjects } from './projects';

const tasks = document.getElementById('entry-right')

class Task {

    constructor(taskName, dateInput) {
        this.taskName = taskName;
        this.dateInput = dateInput;
        this.id = randomIdSetter();
    }

    testPrint() {
        console.log(this.taskName);
        console.log(this.dateInput);
        console.log(this.id);
    }

    render() {

        const newDiv = htmlElementMaker('div', this.id, ['task'], null);
        const checkboxDiv = htmlElementMaker('div', null, ['checkbox-div'], null);
        const checkboxLabel = htmlElementMaker('label', null, null, 'status');
        const checkboxInput = htmlElementMaker('input', `${this.id}-checkbox-done`, ['checkbox'], null);
        const newPara = htmlElementMaker('p', null, null, `${this.taskName}`);
        const datePara = htmlElementMaker('p', null, null, 'due date:')
        const newDate = htmlElementMaker('p', null, null, `${this.dateInput}`)
        const deleteButton = htmlElementMaker('button', null, ['buttons-main'], 'delete');
        const editButton = htmlElementMaker('button', null, ['buttons-main'], 'edit');
        const buttonsDiv = htmlElementMaker('div', null, null, null);

        deleteButton.addEventListener('click', e => {
            this.delete();
        })

        checkboxInput.type = 'checkbox';
        checkboxInput.name = 'checkbox-done';

        const deleteButtonImg = htmlElementMaker('img', null, null, null);
        const editButtonImg = htmlElementMaker('img', null, null, null);

        deleteButtonImg.src = './img/trash-can.svg';
        editButtonImg.src = './img/square-edit-outline.svg';

        checkboxDiv.appendChild(checkboxLabel);
        checkboxDiv.appendChild(checkboxInput);

        buttonsDiv.appendChild(deleteButton);
        buttonsDiv.appendChild(editButton);

        newDiv.appendChild(checkboxDiv);
        newDiv.appendChild(newPara);
        newDiv.appendChild(datePara);
        newDiv.appendChild(newDate);
        newDiv.appendChild(buttonsDiv);

        tasks.appendChild(newDiv);
    }

    delete() {
        currentProjects = currentProjects.tasks.filter((task) => task.id !== this.id);
        currentProjects.renderTasks();
    }


}

export { Task };