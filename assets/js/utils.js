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

function readAndPreviewImage(files, container, type = 'append') {
    container.innerHTML = '';

    if (Array.isArray(files)) {
        if (type === 'append') {
            files.forEach(file => readAndPreview(file, container));

        } else {
            files.forEach(file => readAndPreviewPrepend(file, container));
        }

    } else {
        if (type === 'append') {
            readAndPreview(files, container);
        } else {
            readAndPreviewPrepend(files, container);
        }
    }
}

function readAndPreview(file, container) {

    let imgElement = document.createElement('img');
    imgElement.alt = file.name;

    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        imgElement.src = event.target.result;
        container.append(imgElement);
    });
    reader.readAsDataURL(file);

}

function readAndPreviewPrepend(file, container) {

    let imgElement = document.createElement('img');
    imgElement.alt = file.name;

    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        imgElement.src = event.target.result;
        container.prepend(imgElement);
    });
    reader.readAsDataURL(file);

}