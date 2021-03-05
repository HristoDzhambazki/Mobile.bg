(function () {
    let mainPage = getById('mainPage');
    let publishPage = getById('publishPage');
    let searchPage = getById('searchPage');
    let dealersPage = getById('dealersPage');
    let myAdPage = getById('myAdPage');
    let searchResultsPage = getById('searchResultsPage')
    let mainPageWrapper = getById('mainPageWrapper');
    let mainPageSearchIcons = Array.from(getById('mainSearchNav').children);
    let mainSearchContainer = getById('mainSearchTitle');
    let vehicleCardCont = getById('vehicleCardCont');
    let adsContainer = getById('adsWrapper');
    let adManager = carStorage;

    function showPage() {
        let page = location.hash.slice(1);

        switch (page) {
            case 'mainPage':
                mainPage.style.display = 'block';
                publishPage.style.display = 'none';
                searchPage.style.display = 'none';
                dealersPage.style.display = 'none';
                myAdPage.style.display = 'none';
                searchResultsPage.style.display = 'none';
                break;
            case 'publishPage':
                mainPage.style.display = 'none';
                publishPage.style.display = 'block';
                searchPage.style.display = 'none';
                dealersPage.style.display = 'none';
                myAdPage.style.display = 'none';
                searchResultsPage.style.display = 'none';
                break;
            case 'searchPage':
                mainPage.style.display = 'none';
                publishPage.style.display = 'none';
                searchPage.style.display = 'block';
                dealersPage.style.display = 'none';
                myAdPage.style.display = 'none';
                searchResultsPage.style.display = 'none';
                break;
            case 'dealersPage':
                mainPage.style.display = 'none';
                publishPage.style.display = 'none';
                searchPage.style.display = 'none';
                dealersPage.style.display = 'block';
                myAdPage.style.display = 'none';
                searchResultsPage.style.display = 'none';
                break;
            case 'myAdPage':
                mainPage.style.display = 'none';
                publishPage.style.display = 'none';
                searchPage.style.display = 'none';
                dealersPage.style.display = 'none';
                myAdPage.style.display = 'block';
                searchResultsPage.style.display = 'none';
                break;
            case 'searchResultsPage':
                mainPage.style.display = 'none';
                publishPage.style.display = 'none';
                searchPage.style.display = 'none';
                dealersPage.style.display = 'none';
                myAdPage.style.display = 'none';
                searchResultsPage.style.display = 'block';
                break;
            default:
                mainPage.style.display = 'block';
                publishPage.style.display = 'none';
                searchPage.style.display = 'none';
                dealersPage.style.display = 'none';
                myAdPage.style.display = 'none';
                searchResultsPage.style.display = 'none';
        }
    }

    function showCarContainer(vehicles, container) {
        arrayData.forEach(el => {
            vehicles.push(new Car(el.state, el.price, el.currency, el.images,
                el.brand, el.model, el.year, el.engine, el.power, el.euroSt, el.gear,
                el.category, el.mileage, el.color, el.region, el.others,
                el.description, el.seller, el.mobile, el.email))
        });

        container.innerHTML = '';
        for (let i = 0; i < 6; i++) {
            let wrapper = createEl('div');
            let photoLink = createEl('a');
            let photo = createEl('img');
            let info = createEl('div');
            let vehHeader = createEl('header');
            let vehInfoHolder = createEl('div');
            let vehPrice = createEl('p');
            let vehKm = createEl('p');
            let vehCity = createEl('p');
            let adTime = createEl('p');
            container.append(wrapper);
            wrapper.append(photoLink);
            photoLink.append(photo);
            wrapper.append(info);
            info.append(vehHeader);
            info.append(vehInfoHolder);
            info.append(adTime);
            vehInfoHolder.append(vehPrice);
            vehInfoHolder.append(vehKm);
            vehInfoHolder.append(vehCity);

            wrapper.classList.add('autoCont');
            info.classList.add('autoInfoCont');
            vehInfoHolder.classList.add('autoInfoHolder');
            vehHeader.classList.add('autoHeader');
            vehPrice.classList.add('autoPrice');
            vehKm.classList.add('autoKm');
            vehCity.classList.add('autoCity');
            adTime.classList.add('autoAdTime');

            photo.classList.add('autoPhoto');
            photo.src = `assets/images/cars/car${i + 1}-1.jpg`;
            photo.alt = `car${i}`;
            photoLink.href = "#";
            photoLink.classList.add('autoPhotoLink');

            vehHeader.innerHTML = `${vehicles[i].components.brand + ' ' + vehicles[i].components.model}`;
            vehPrice.innerHTML = `${vehicles[i].price} лв.`;
            vehKm.innerHTML = `${vehicles[i].components.mileage} км`;
            vehCity.innerHTML = `${vehicles[i].region}`;
            adTime.innerHTML = new Date().toDateString();
        }

    }
    showCarContainer(adManager.list, vehicleCardCont);

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

    window.addEventListener('DOMContentLoaded', showPage);
    window.addEventListener('hashchange', showPage);
}());