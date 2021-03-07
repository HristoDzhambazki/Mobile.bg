//DOM Selectors
let offerImageElement = getById('offerImages');

let publishBtn = document.querySelector('#publishButtonDiv button');
publishBtn.addEventListener('click', renderNewAd);

function renderNewAd() {
    //Show Ad Images
    if (newAd.images) {
        let images = newAd.images;
        let mainImage = images[0];
        readAndPreviewImage(mainImage, offerImageElement, 'prepend');

        if (newAd.images.length > 1) {
            let otherImagesDiv = document.createElement('div');
            otherImagesDiv.classList.add('otherImagesStyles');
            offerImageElement.append(otherImagesDiv)

            readAndPreviewImage(images, otherImagesDiv);

            otherImagesDiv.addEventListener('click', changeMainImage)

        }


    }
}

function changeMainImage(ev) {
    offerImageElement.children[0].src = ev.target.src;
}


