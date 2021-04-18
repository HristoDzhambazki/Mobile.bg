(function () {
    let ad = '';
    let currImageIndex = 0;

    //DOM Selectors
    let headingTitle = getById('headingAndAnchSP');
    let firstPrice = getById('priceAndFavSP');
    let favIconElement = getById('singleAdFavIcon');
    let mainImageDiv = getById('mainImageSP');
    let mainImgElement = mainImageDiv.children[0];
    let otherImagesElement = getById('spOtherImages');
    let numberText = getById('numberText');
    let secondHeadingTitle = getById('secondHASP');
    let secondPrice = getById('secondPAFSP');
    let componentsElement = getById('componentsSP');
    let componentTitles = componentsElement.children[0];
    let componentValues = componentsElement.children[1];
    let safetySP = getById('safetySP');
    let othersSP = getById('othersSP');
    let exteriorSP = getById('exteriorSP');
    let interiorSP = getById('interiorSP');
    let securitySP = getById('securitySP');
    let comfortSP = getById('comfortSP');

    //Buttons
    let nextBtn = getById('nextBtn');
    let prevBtn = getById('prevBtn');
    let prevAdBtn = getById('prevAdBtn');
    let nextAdBtn = getById('nextAdBtn');

    //Pages
    let homePageAds = getById('vehicleCardCont');
    let searchResultsElement = getById('mainResults');
    let profilePageAds = getById('profilePage');
    let profilePageFavAds = getById('userFavAdsContainer');

    //Events
    nextAdBtn.addEventListener('click', () => plusAd(1));
    prevAdBtn.addEventListener('click', () => plusAd(-1));
    nextBtn.addEventListener('click', () => plusSlide(1));
    prevBtn.addEventListener('click', () => plusSlide(-1));
    favIconElement.addEventListener('click', addAdToUserFavs);
    homePageAds.addEventListener('click', checkTargetAndRender);
    searchResultsElement.addEventListener('click', checkTargetAndRender);
    profilePageAds.addEventListener('click', checkTargetAndRender);
    profilePageFavAds.addEventListener('click', checkTargetAndRender);

    function plusAd(index) {
        let storageLength = carStorage.getLength();
        let currAdIndex = carStorage.getAdIndex(ad.id);
        let newIndex = currAdIndex + index;

        if (newIndex >= 0 && newIndex < storageLength) {
            ad = carStorage.getAdByIndex(newIndex);
            renderSingleAd(ad);
            checkCurrentUserFavAds(ad.id);
        }
    }

    function changeMainImg(imgName, index) {
        if (imgName.length > 11) {
            mainImgElement.src = imgName;
        } else {
            mainImgElement.src = 'assets/images/cars/' + imgName;
        }
        changeSelectedImageOpacity(imgName)

        numberText.innerText = `${index + 1} / ${ad.images.length}`;
        currImageIndex = index;
    }

    function plusSlide(index) {
        let newIndex = currImageIndex + index;
        let adImages = ad.images;
        if (newIndex >= 0 && newIndex < adImages.length) {
            if (adImages[newIndex].length > 11) {
                mainImgElement.src = adImages[newIndex]
            } else {
                mainImgElement.src = 'assets/images/cars/' + adImages[newIndex];
            }

            numberText.innerText = `${newIndex + 1} / ${adImages.length}`;
            changeSelectedImageOpacity(mainImgElement.src);
            currImageIndex = newIndex;
        }

    }

    function changeSelectedImageOpacity(name) {
        let imageElementsArray = [...otherImagesElement.children];

        imageElementsArray.forEach(el => {
            if (el.src.includes(name)) {
                el.style.opacity = '0.4';
            } else {
                el.style.opacity = '1';
            }
        })

    }

    function addAdToUserFavs() {
        let currentUser = userStorage.getCurrentUser();
        if (currentUser) {
            if (!currentUser.favs.includes(ad.id)) {
                userStorage.addFavAd(ad.id);
                favIconElement.src = 'assets/images/icons/starFilled.png';
            } else {
                userStorage.removeFavAd(ad.id);
                favIconElement.src = 'assets/images/icons/starEmpty.png';
            }
        } else {
            location.hash = 'loginPage'
        }

        localStorage.setItem('isAdEdited', 'true');
    }

    function checkCurrentUserFavAds(id) {
        let currentUser = userStorage.getCurrentUser();

        if (currentUser && currentUser.favs.includes(id)) {
            favIconElement.src = 'assets/images/icons/starFilled.png';
        } else {
            favIconElement.src = 'assets/images/icons/starEmpty.png';
        }
    }

    function checkTargetAndRender(ev) {
        let targetTagName = ev.target.tagName;
        let targetInnerText = ev.target.innerText;
        if ((targetTagName === 'A' && targetInnerText !== 'Добави в бележника') || (targetTagName === 'IMG' && ev.target.alt !== 'favIcon') || targetTagName === 'H1' || targetInnerText === 'Виж обявата') {
            let id = ev.target.id;
            ad = carStorage.getAd(id);
            renderSingleAd(ad);
            checkCurrentUserFavAds(id);
            location.hash = '#singleAdPage'
        }
    }

    function renderSingleAd(ad) {
        currImageIndex = 0;

        headingTitle.innerText = '';
        secondHeadingTitle.innerText = '';
        if (ad.brand.value) {
            headingTitle.innerText += ad.brand.value;
            secondHeadingTitle.innerText += ad.brand.value;
        }

        if (ad.model.value) {
            headingTitle.innerText += ' ' + ad.model.value;
            secondHeadingTitle.innerText += ' ' + ad.model.value;
        }

        if (ad.modification.value) {
            headingTitle.innerText += ' ' + ad.modification.value;
            secondHeadingTitle.innerText += ' ' + ad.modification.value;
        }

        firstPrice.innerText = '';
        secondPrice.innerText = '';
        if (ad.price.value) {
            firstPrice.innerText = `${ad.price.value} ${ad.currency.value}`;
            secondPrice.innerText = `${ad.price.value} ${ad.currency.value}`;
        }

        if (ad.images) {
            numberText.innerText = '1 / ' + ad.images.length;
            if (ad.images[0] && ad.images[0].length > 11) {
                mainImgElement.src = ad.images[0]
            } else {
                mainImgElement.src = 'assets/images/cars/' + ad.images[0];
            }

            mainImgElement.alt = ad.brand.value + ' ' + ad.model.value;

            otherImagesElement.innerHTML = '';
            ad.images.forEach((imgName, index) => {
                let img = createElement('img');
                if (imgName.length > 11) {
                    img.src = imgName;
                } else {
                    img.src = 'assets/images/cars/' + imgName;
                }

                img.alt = ad.brand.value + ' ' + ad.model.value;;

                img.addEventListener('click', () => changeMainImg(imgName, index))

                otherImagesElement.append(img);
            })

            changeSelectedImageOpacity(mainImgElement.src)
        }

        componentTitles.innerHTML = '';
        componentValues.innerHTML = '';
        for (const key in ad) {
            if (key === 'brand' || key === 'model' || key === 'price' || key === 'currency' || key === 'images' || key === 'extras') {
                continue;
            }

            if (ad[key].value) {
                let liTitle = createElement('li');
                let liParagraph = createElement('p');
                liParagraph.innerText = ad[key].category;
                liTitle.append(liParagraph);

                componentTitles.append(liTitle);

                let liValue = createElement('li');
                let liHeading = createElement('h6');
                liHeading.innerText = ad[key].value;
                liValue.append(liHeading);

                componentValues.append(liValue);
            }
        }

        hideAllExtrasUl();
        for (const key in ad.extras) {

            if (ad.extras[key].content.length > 0) {

                if (key === 'safety') {
                    safetySP.style.display = 'block';
                    appendExtras(ad.extras.safety.content, safetySP)
                } else if (key === 'others') {
                    othersSP.style.display = 'block';
                    appendExtras(ad.extras.others.content, othersSP)
                } else if (key === 'exterior') {
                    exteriorSP.style.display = 'block';
                    appendExtras(ad.extras.exterior.content, exteriorSP)
                } else if (key === 'interior') {
                    interiorSP.style.display = 'block';
                    appendExtras(ad.extras.interior.content, interiorSP)
                } else if (key === 'security') {
                    securitySP.style.display = 'block';
                    appendExtras(ad.extras.security.content, securitySP)
                } else if (key === 'comfort') {
                    comfortSP.style.display = 'block';
                    appendExtras(ad.extras.comfort.content, comfortSP)
                }
            }
        }
    }

    function appendExtras(arr, container) {
        container.children[1].innerHTML = '';
        arr.forEach(x => {
            let li = createElement('li');
            li.innerText = x;
            container.children[1].append(li);
        })

    }

    function hideAllExtrasUl() {
        safetySP.style.display = 'none';
        othersSP.style.display = 'none';
        exteriorSP.style.display = 'none';
        interiorSP.style.display = 'none';
        securitySP.style.display = 'none';
        comfortSP.style.display = 'none';
    }

    function createElement(type, className) {
        let el = document.createElement(type);
        if (className) {
            el.classList.add(className);
        }
        return el;
    }
})()
