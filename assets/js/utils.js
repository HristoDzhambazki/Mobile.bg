function createEl(el, text) {
    let element = document.createElement(el);

    if (text) {
        element.innerHTML = text;
    }

    return element;
};

function getById(id) {
    let element = document.getElementById(id);
    return element;
};