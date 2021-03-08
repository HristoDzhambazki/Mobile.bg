class CarStorage {
    constructor() {
        this.list = [];
    }

    addCar(car) {
        this.list.push(car);
    }

    removeCar(id) {
        let index = this.list.findIndex(car => car.id == id);
        this.list.splice(index, 1);
    }
};

let id = 0;

class Car {
    constructor(state, price, currency, images, brand, model, year, engine, power, euroSt, gear, category, mileage, color, region, extras) {

        this.id = ++id;

        this.state = state;
        this.price = price;
        this.currency = currency;
        this.region = region;

        this.images = images;

        this.extras = extras;

        this.components = {
            brand,
            model,
            year,
            engine,
            power,
            euroSt,
            gear,
            category,
            mileage,
            color,
        }
    }
}

let carStorage = new CarStorage();

//////////////

let newAd = {
    brand: {
        category: 'Марка',
    },

    model: {
        category: 'Модел',
    },

    modification: {
        category: 'Модификация',
    },

    engine: {
        category: 'Тип двигател',
    },

    gear: {
        category: 'Скоростна кутия',
    },

    power: {
        category: 'Мощност (к.с.)',
    },

    productionMonth: {
        category: 'Дата на производство',
    },

    productionYear: {
        category: 'Година на производство',
    },

    miliage: {
        category: 'Пробег',
    },

    euroSt: {
        category: 'Евростандарт',
    },

    color: {
        category: 'Цвят',
    },

    category: {
        category: 'Категория'
    },

    region: {
        category: 'Град',
    },

    price: {
        category: 'Цена',
    },

    currency: {
        category: 'Валута',
    },

    expiryDays: {
        category: 'Валидност на обявата',
    },

    extras: {
        safety: {
            category: 'Безопасност',
            content: [],
        },
        comfort: {
            category: 'Комфорт',
            content: [],
        },
        others: {
            category: 'Други',
            content: [],
        },
        exterior: {
            category: 'Екстериор',
            content: [],
        },
        security: {
            category: 'Защита',
            content: [],
        },
        interior: {
            category: 'Интериор',
            content: [],
        },
        specialized: {
            category: 'Специализирани',
            content: [],
        },
    }
};

//Pubish an Ad

//DOM Selectors
//Elements
let publishFirstStepElement = getById('publishFirstStep');
let selectElements = publishFirstStepElement.getElementsByTagName('select');
let inputElements = publishFirstStepElement.querySelectorAll('input[type=text]');
let checkboxElements = publishFirstStepElement.querySelectorAll('input[type=checkbox]')
let uploadImageInputElement = getById('publishImageInput');
let showUploadedImagesElement = getById('showUploadedImages');
let publishAdBtnElement = getById('publishNewAd');

publishAdBtnElement.addEventListener('click', () => {

})

//Get uploaded image 
uploadImageInputElement.addEventListener('change', uploadImages)

//Get Value from Checkbox Elements
let checkElementsArray = Array.from(checkboxElements);
let stateElement = checkElementsArray.splice(0, 3);
checkElementsArray.forEach(x => {
    x.addEventListener('change', getCheckboxValue);
})

//Get value from Input Elements
inputElements.forEach(el => el.addEventListener('change', getSelectValue));

//Get value from Select Elements
let selectElementsArray = Array.from(selectElements).splice(1);
selectElementsArray.forEach(el => el.addEventListener('change', getSelectValue));

//Functions for events
function uploadImages(ev) {
    let files = Array.from(ev.target.files);
    newAd.images = files;

    readAndPreviewImage(files, showUploadedImagesElement);
}

function getCheckboxValue(ev) {
    let name = ev.target.name;
    let value = ev.target.value;
    if (ev.target.checked) {
        newAd.extras[name].content.push(value)
    } else {
        newAd.extras[name].content = newAd.extras[name].content.filter(x => x !== value);
    }
}

function getSelectValue(ev) {
    let name = ev.target.name;
    let value = ev.target.value;

    newAd[name].value = value;
}