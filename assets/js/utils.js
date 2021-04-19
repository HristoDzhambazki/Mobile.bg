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
    imgElement.alt = 'ad image';

    imgElement.src = file;
    container.append(imgElement);

    // const reader = new FileReader();
    // reader.addEventListener('load', (event) => {
    //     imgElement.src = event.target.result;
    //     container.append(imgElement);
    // });

    // reader.readAsDataURL(file);
}

function readAndPreviewPrepend(file, container) {

    let imgElement = document.createElement('img');
    imgElement.alt = 'ad image';


    imgElement.src = file;
    container.prepend(imgElement);

    // const reader = new FileReader();
    // reader.addEventListener('load', (event) => {
    //     imgElement.src = event.target.result;
    //     container.prepend(imgElement);
    // });
    // reader.readAsDataURL(file);

}

let adNamings = {
    brand: 'Марка',
    model: 'Модел',
    modification: 'Модификация',
    engine: 'Тип двигател',
    gear: 'Скоростна кутия',
    power: 'Мощност (к.с.)',
    productionMonth: 'Дата на производство',
    productionYear: 'Година на производство',
    mileage: 'Пробег',
    euroSt: 'Евростандарт',
    color: 'Цвят',
    category: 'Категория',
    region: 'Град',
    price: 'Цена',
    currency: 'Валута',
    expiryDays: 'Валидност на обявата',

    extras: {
        safety: 'Безопасност',
        comfort: 'Комфорт',
        others: 'Други',
        exterior: 'Екстериор',
        security: 'Защита',
        interior: 'Интериор',
        specialized: 'Специализирани',
    }
}