let searchBoxObj = (function () {
    let obj = {};

    //DOM Selectors
    let mainSearchBox = getById('mainSearchBox');
    let selectElements = mainSearchBox.getElementsByTagName('select');
    let inputElements = mainSearchBox.querySelectorAll('input[type=text]');

    let newSearchElement = getById('newSearchRP');
    let newSearchAnchor = newSearchElement.getElementsByTagName('li')[0];

    //Events

    //Anchor from search results page
    newSearchAnchor.addEventListener('click', resetSearchMenu);

    //Get value from Input Elements
    inputElements.forEach(el => el.addEventListener('change', getSelectValue));

    //Get value from Select Elements
    let selectElementsArray = Array.from(selectElements).splice(1);
    selectElementsArray.forEach(el => el.addEventListener('change', getSelectValue));


    return obj;

    function getSelectValue(ev) {
        let name = ev.target.name;
        let value = ev.target.value;

        if (name in obj && value === '') {
            delete obj[name];
        } else {
            obj[name] = value;
        }
    }


    function resetSearchMenu() {

        //reset select elements
        selectElementsArray.forEach(el => {

            if (el.name === 'model') {
                el.innerHTML = '<option selected value="0">Избери</option>';
            }

            el.value = '0'
        })

        //reset input elements 
        inputElements.forEach(el => {
            el.value = '';
        })
    }

})();

//Render Ad Cards and News
(function () {
    let adCardsContainer = getById('adCardsContainer');
    let ads = adStorage.getLastSixAds();

    adCardsContainer.innerHTML = '';

    ads.forEach(ad => {
        let card = generateCard(ad);
        adCardsContainer.append(card);
    })

    function generateCard(ad) {
        let wrapper = createEl('div');
        let photoLink = createEl('a');
        let photo = createEl('img');
        let info = createEl('div');
        let vehHeader = createEl('h1');
        vehHeader.addEventListener('click', () => location.hash = "singleAdPage")
        vehHeader.setAttribute('id', ad.id)
        let vehInfoHolder = createEl('div');
        let vehPrice = createEl('p');
        let vehKm = createEl('p');
        let vehCity = createEl('p');
        let adTime = createEl('p');

        wrapper.classList.add('autoCont');
        info.classList.add('autoInfoCont');
        vehInfoHolder.classList.add('autoInfoHolder');
        vehHeader.classList.add('autoHeader');
        vehPrice.classList.add('autoPrice');
        vehKm.classList.add('autoKm');
        vehCity.classList.add('autoCity');
        adTime.classList.add('autoAdTime');
        photo.classList.add('autoPhoto');

        if (ad.images[0].length < 11) {
            photo.src = `assets/images/cars/` + ad.images[0];
        } else {
            photo.src = ad.images[0];
        }

        photo.alt = ad.brand;
        photo.setAttribute('id', ad.id)
        photoLink.href = "#singleAdPage";
        photoLink.setAttribute('id', ad.id)
        photoLink.classList.add('autoPhotoLink');

        vehHeader.innerHTML = `${ad.brand + ' ' + ad.model}`;
        vehPrice.innerHTML = `${ad.price} ${ad.currency}`;

        if (ad.mileage) {
            vehKm.innerHTML = `${ad.mileage} км`;
        }

        if (ad.region) {
            vehCity.innerHTML = `${ad.region}`;
        }

        adTime.innerHTML = new Date().toDateString();

        wrapper.addEventListener('mouseover', () => {
            vehHeader.style.color = '#0099ff';
        })
        wrapper.addEventListener('mouseout', () => {
            vehHeader.style.color = 'black';
        })

        photoLink.append(photo);
        vehInfoHolder.append(vehPrice, vehKm, vehCity);
        info.append(vehHeader, vehInfoHolder, adTime);
        wrapper.append(photoLink, info);

        return wrapper;
    }

    function showNews() {
        let arrayOfRandom = [];
        let randomNum = null;
        while (arrayOfRandom.length < 6) {
            randomNum = Math.floor(Math.random() * 8);
            if (!arrayOfRandom.includes(newsDescriptions[randomNum])) {
                arrayOfRandom.push(newsDescriptions[randomNum]);
            }
        }

        for (let i = 0; i < 6; i++) {
            let artLink = getById(`linkToArticle${i + 1}`)
            let img = getById(`articleImage${i + 1}`);
            let desContainer = getById(`newsDesc${i + 1}`);

            artLink.href = arrayOfRandom[i].link;
            img.src = `assets/images/news/${arrayOfRandom[i].image}`;
            desContainer.innerHTML = arrayOfRandom[i].text;

            artLink.classList.add('artLink');
            img.classList.add('newsImg');
            desContainer.classList.add('newsDesc');
        }

    }
    showNews()

}());