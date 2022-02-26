import './style.css'

function component() {

    const testing = document.getElementById('buttons-projects-add');

    testing.addEventListener('click', e => {
        e.preventDefault;
        console.log('you clicked +')
    })

}

document.body.appendChild(component());