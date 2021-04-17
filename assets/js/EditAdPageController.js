(function () {
    localStorage.setItem('isAdEdited', 'false')

    let isValidEdit = false;

    //Assing existing ad to this variable so i can edit its values
    let ad = '';

    //DOM Selectors
    //Elements
    let userAdsContainer = getById('userAdsContainer');

    let editFinishedAd = getById('editFinishedAd');

    let editMenuContainer = getById('editMenuContainer');

    let selectElements = editMenuContainer.getElementsByTagName('select');
    let selectElementsArray = [...selectElements];

    let inputElements = editMenuContainer.querySelectorAll('input[type=text]');
    let inputElementsArray = [...inputElements];

    let checkboxElements = editMenuContainer.querySelectorAll('input[type=checkbox]');
    let checkElementsArray = [...checkboxElements];

    let editImageInputElement = getById('editImageInput');
    let showUploadedImagesElement = editMenuContainer.querySelector('.showUploadedImages');

    let notValidAdElement = editMenuContainer.querySelector('.notValidAd');

    //Buttons
    let editAdBtn = getById('editAdBtn');

    //Events

    editAdBtn.addEventListener('click', checkIsAdValid)

    editImageInputElement.addEventListener('change', uploadImages);
    selectElementsArray.forEach(el => el.addEventListener('change', getSelectValue));
    inputElementsArray.forEach(el => el.addEventListener('change', getSelectValue));
    checkElementsArray.forEach(x => x.addEventListener('change', getCheckboxValue));

    //Edit BTN from my profile page
    userAdsContainer.addEventListener('click', (ev) => {
        if (ev.target.innerText === 'Редактирай') {
            ad = { ...carStorage.getAd(ev.target.id) };
            getAdInfo();
        }
    })

    editAdBtn.addEventListener('click', () => {
        //izliza error v dolnata funkciq ako nqma obekt
        setNoImagePhoto();
        carStorage.replaceAd(ad.id, ad);

        isValidEdit = ad.brand.value && ad.model.value && ad.price.value && ad.price.value > 0;

        if (isValidEdit) {
            localStorage.setItem('isAdEdited', 'true')
            notValidAdElement.style.display = 'none';
            editMenuContainer.style.display = 'none';
            editFinishedAd.style.display = 'block';
        } else {
            notValidAdElement.style.display = 'block';
        }

    })

    function getAdInfo() {
        for (const key in ad) {
            let adValue = ad[key].value;

            if (adValue) {

                selectElementsArray.forEach(el => {
                    if (el.name === key) {

                        if (key === 'brand') {
                            let event = new CustomEvent('change', { detail: adValue })

                            el.value = adValue;
                            el.dispatchEvent(event);
                        } else {
                            el.value = adValue;
                        }
                    }
                })

                inputElementsArray.forEach(el => {
                    if (el.name === key) {
                        el.value = adValue;
                    }
                })

            } else if (key === 'extras') {

                for (const extra in ad.extras) {
                    if (ad.extras[extra].content.length > 0) {

                        ad.extras[extra].content.forEach(boxName => {
                            let currBox = checkElementsArray.find(box => box.value === boxName);

                            currBox.checked = true;
                        })
                    }
                }

            } else if (key === 'images') {
                showImages(ad.images)
            }

        }
    }

    function showImages(images) {
        showUploadedImagesElement.innerHTML = '';

        images.forEach(file => {
            let uploadedImageCard = document.createElement('div');
            uploadedImageCard.classList.add('uploadedImageCard');
            let closeBtnIcon = document.createElement('img');
            closeBtnIcon.src = 'assets/images/icons/close.png';


            let imgElement = document.createElement('img');
            imgElement.alt = 'ad image';

            //SRC na novite obqvi shte e razlichen!
            const src = 'assets/images/cars/' + file;
            imgElement.src = src;
            closeBtnIcon.addEventListener('click', () => removeImage(src))

            uploadedImageCard.append(imgElement, closeBtnIcon);
            showUploadedImagesElement.append(uploadedImageCard);
        })
    }

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
        console.log('src', src);
        ad.images = ad.images.filter(img => !src.includes(img));

        console.log(ad);

        let indexOfImg = [...showUploadedImagesElement.children].findIndex(card => [...card.children][0].src.includes(src));
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
            ad.extras[name].content.push(value)
        } else {
            ad.extras[name].content = ad.extras[name].content.filter(x => x !== value);
        }
    }

    function getSelectValue(ev) {
        let name = ev.target.name;
        let value = ev.target.value;

        console.log('vlaue', value);

        ad[name].value = value;
    }

    function checkIsAdValid() {
        if (!ad.brand.value && !ad.model.value && !ad.price.value) {
            localStorage.setItem('isValidEdit', 'false');
            notValidAdElement.style.display = 'block'
        } else {
            localStorage.setItem('isValidEdit', 'true');
            notValidAdElement.style.display = 'none'
        }
    }

})()