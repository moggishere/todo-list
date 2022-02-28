import './style.css'

function component() {

    const testing = document.getElementById('projects-form-submit');

    testing.addEventListener('submit', e => {
        e.preventDefault;
        console.log('you clicked +')
    })

}

document.body.appendChild(component());