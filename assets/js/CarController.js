let newAd = (function () {
    let ad = new Car();
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
        setNoImagePhoto();

        carStorage.addCar(ad);
        userStorage.addAdToUserAcc(ad.id)
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
        ad.images = [];

        // Read, Preview Images on first publish page and push image sources to image property of ad object
        files.forEach(file => {
            let imgElement = document.createElement('img');
            imgElement.alt = 'ad image';

            const reader = new FileReader();
            reader.addEventListener('load', (event) => {
                ad.images.push(event.target.result)

                imgElement.src = event.target.result;
                showUploadedImagesElement.append(imgElement);
            });

            reader.readAsDataURL(file);
        })
    }

    function getCheckboxValue(ev) {
        let name = ev.target.name;
        let value = ev.target.value;
        if (ev.target.checked) {
            ad.extras[name].content.push(value)
        } else {
            ad.extras[name].content = ad.extras[name].content.filter(x => x !== value);
        }
    }

    function getSelectValue(ev) {
        let name = ev.target.name;
        let value = ev.target.value;

        ad[name].value = value;
    }

    function setNoImagePhoto() {
        if (ad.images.length === 0) {
            ad.images.push('assets/images/icons/noimage.jpg')
        }
    }

    return ad;
})();

