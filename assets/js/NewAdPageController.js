//Using newAd object from Publish Page Controller

//DOM Selectors
let offerImageElement = getById('offerImages');
let componentsListElement = getById('offerComponentsList');
let extrasListElement = getById('offerExtrasList');

let firstStepButtonDiv = document.querySelector('#firstStepButtonDiv button');
firstStepButtonDiv.addEventListener('click', renderNewAd);

function renderNewAd() {
    componentsListElement.innerHTML = '';
    extrasListElement.innerHTML = '';

    //Show Ad Images
    renderAdImages(newAd.images);

    //Show Ad Components
    for (const key in newAd) {
        if (newAd[key]) {
            if (key !== 'images' && key !== 'extras') {
                renderComponent(key);
            }
        }
    }

    //Show extras
    for (const key in newAd.extras) {
        if (newAd.extras[key].length > 0) {
            renderExtras(newAd.extras[key]);
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

function renderComponent(key) {

    let li = document.createElement('li');
    let category = document.createElement('h3');
    let value = document.createElement('p');

    category.innerText = adNamings[key];
    value.innerText = newAd[key];

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



