//DOM Selectors
let offerImageElement = getById('offerImages');
let componentsListElement = getById('offerComponentsList');
let extrasListElement = getById('offerExtrasList');

let publishBtn = document.querySelector('#publishButtonDiv button');
publishBtn.addEventListener('click', renderNewAd);

function renderNewAd() {
    componentsListElement.innerHTML = '';
    extrasListElement.innerHTML = '';

    let images = newAd.images;

    //Show Ad Images
    renderAdImages(images);

    //Show Ad Components
    for (const key in newAd) {
        if (newAd[key].value) {
            renderComponent(newAd[key]);
        }
    }

    //Show extras
    for (const key in newAd.extras) {
        if (newAd.extras[key].content.length > 0) {
            renderExtras(newAd.extras[key].content);
        }
    }
}

function renderExtras(extrasArr) {
    extrasArr.forEach(ex => {
        let li = document.createElement('li');
        li.innerText = ex;
        extrasListElement.append(li);
    })
}

function renderComponent(component) {

    let li = document.createElement('li');
    let category = document.createElement('h3');
    let value = document.createElement('p');

    category.innerText = component.category;
    value.innerText = component.value;

    li.append(category, value);
    componentsListElement.append(li)
}

function renderAdImages(images) {

    if (images.length > 0) {
        let mainImage = images[0];
        offerImageElement.innerHTML = '';
        offerImageElement.classList.replace('noImagesStyles', 'offerImages')
        readAndPreviewImage(mainImage, offerImageElement, 'prepend');

        if (images.length > 1) {
            let otherImagesDiv = document.createElement('div');
            otherImagesDiv.classList.add('otherImagesStyles');
            offerImageElement.append(otherImagesDiv)

            readAndPreviewImage(images, otherImagesDiv);

            otherImagesDiv.addEventListener('click', changeMainImage)
        }

    } else {
        offerImageElement.innerHTML = '<h1> Няма качени снимки </h1>';
        offerImageElement.classList.replace('offerImages', 'noImagesStyles')
    }
}

function changeMainImage(ev) {
    offerImageElement.children[0].src = ev.target.src;
}



