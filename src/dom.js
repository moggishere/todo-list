const htmlElementMaker = (htmlTag, elementId, arrClasses, text) => {

    const newElement = document.createElement(htmlTag);
    if (elementId) {
        newElement.setAttribute('id', elementId)
    }
    if (arrClasses) {
        arrClasses.forEach((myClass) => newElement.classList.add(myClass));
    }

    if (text) {
        htmlElementMaker.innerText = text;
    }

    return newElement;

}

const randomIdSetter = () => {

    return Math.random().toString(16).substring(2, 8);

}
