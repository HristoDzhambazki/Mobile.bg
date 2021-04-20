let newAd = (function () {
    localStorage.setItem('isValidPublish', 'true');

    let ad = new Ad();
    //CREATE new Ad and ADD specs

    //DOM Selectors
    //Elements
    let publishFirstStepElement = getById('publishFirstStep');
    let selectElements = publishFirstStepElement.getElementsByTagName('select');
    let inputElements = publishFirstStepElement.querySelectorAll('input[type=text]');
    let checkboxElements = publishFirstStepElement.querySelectorAll('input[type=checkbox]');
    let uploadImageInputElement = getById('publishImageInput');
    let showUploadedImagesElement = publishFirstStepElement.querySelector('.showUploadedImages');
    let notValidAdElement = publishFirstStepElement.querySelector('.notValidAd');

    //Buttons
    let firstStepBtn = publishFirstStepElement.querySelector('#firstStepButtonDiv button');
    let publishAdBtnElement = getById('publishNewAd');

    //Events

    firstStepBtn.addEventListener('click', checkIsAdValid)

    publishAdBtnElement.addEventListener('click', () => {
        setNoImagePhoto();

        adStorage.addAd(ad);
        userStorage.addAdToUserAcc(ad.id)
        localStorage.setItem('isAdEdited', 'true')
    })

    //Get uploaded image 
    uploadImageInputElement.addEventListener('change', uploadImages)

    //Get Value from Checkbox Elements
    let checkElementsArray = Array.from(checkboxElements);
    let stateElement = checkElementsArray.splice(0, 3);
    checkElementsArray.forEach(x => x.addEventListener('change', getCheckboxValue));

    //Get value from Input Elements
    inputElements.forEach(el => el.addEventListener('change', getSelectValue));

    //Get value from Select Elements
    let selectElementsArray = Array.from(selectElements).splice(1);
    selectElementsArray.forEach(el => el.addEventListener('change', getSelectValue));

    //Functions for events 
    function uploadImages(ev) {
        let files = Array.from(ev.target.files);

        // Read, Preview Images on first publish page and push image sources to image property of ad object
        files.forEach(file => {
            let uploadedImageCard = document.createElement('div');
            uploadedImageCard.classList.add('uploadedImageCard');
            let closeBtnIcon = document.createElement('img');
            closeBtnIcon.src = 'assets/images/icons/close.png';

            let imgElement = document.createElement('img');
            imgElement.alt = 'ad image';

            const reader = new FileReader();
            reader.addEventListener('load', (event) => {
                const src = event.target.result;
                ad.images.push(src)

                imgElement.src = src;
                closeBtnIcon.addEventListener('click', () => removeImage(src))

                uploadedImageCard.append(imgElement, closeBtnIcon);
                showUploadedImagesElement.append(uploadedImageCard);
            });

            reader.readAsDataURL(file);
        })
    }

    function removeImage(src) {
        ad.images = ad.images.filter(img => img !== src);

        let indexOfImg = [...showUploadedImagesElement.children].findIndex(card => [...card.children][0].src === src);
        showUploadedImagesElement.removeChild(showUploadedImagesElement.children[indexOfImg])
    }

    function setNoImagePhoto() {
        if (ad.images.length === 0) {
            ad.images.push('assets/images/icons/noimage.jpg')
        }
    }

    function getCheckboxValue(ev) {
        let name = ev.target.name;
        let value = ev.target.value;
        if (ev.target.checked) {
            ad.extras[name].push(value)
        } else {
            ad.extras[name] = ad.extras[name].filter(x => x !== value);
        }
    }

    function getSelectValue(ev) {
        let name = ev.target.name;
        let value = ev.target.value;

        ad[name] = value;
    }

    function checkIsAdValid() {
        let isValidAd = ad.brand && ad.model && ad.price && ad.price > 0;

        if (isValidAd) {
            localStorage.setItem('isValidPublish', 'true');
            notValidAdElement.style.display = 'none'
        } else {
            localStorage.setItem('isValidPublish', 'false');
            notValidAdElement.style.display = 'block';
        }
    }

    return ad;
})();

