let carStorage = new CarStorage();

let obj = {
    extras: {
        safety: [],
        comfort: [],
        others: [],
        exterior: [],
        security: [],
        interior: [],
        specialized: [],
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

//Buttons
let publishBtn = document.querySelector('#publishButtonDiv button');

publishBtn.addEventListener('click', () => console.log(obj));



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

function uploadImages(ev) {
    let files = Array.from(ev.target.files);

    console.log(files);

    files.forEach(file => {
        readAndPreview(file);
    });

    function readAndPreview(file) {
        let imgElement = document.createElement('img');
        imgElement.classList.add('publishImageSize');
        imgElement.alt = file.name;

        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            imgElement.src = event.target.result;
            showUploadedImagesElement.append(imgElement);
        });
        reader.readAsDataURL(file);
    }
}

function getCheckboxValue(ev) {
    let name = ev.target.name;
    let value = ev.target.value;
    if (ev.target.checked) {
        obj.extras[name].push(value)
    } else {
        obj.extras[name] = obj.extras[name].filter(x => x !== value);
    }
}

function getSelectValue(ev) {
    let name = ev.target.name;
    obj[name] = ev.target.value;
}
