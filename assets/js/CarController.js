
let newAd = {
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
        newAd.extras[name].push(value)
    } else {
        newAd.extras[name] = newAd.extras[name].filter(x => x !== value);
    }
}

function getSelectValue(ev) {
    let name = ev.target.name;
    newAd[name] = ev.target.value;
}