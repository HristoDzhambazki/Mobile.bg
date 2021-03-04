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
            let vehHeader = createEl('div');
            let vehInfoHolder = createEl('div');
            let vehPrice = createEl('div');
            let vehKm = createEl('div');
            let vehCity = createEl('div');
            let adTime = createEl('div');
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

            container.style.height = '430px';
            container.style.width = '780px';
            container.style.display = 'flex';
            container.style.flexDirection = 'column';
            container.style.flexWrap = 'wrap';

            wrapper.style.display = 'flex';
            wrapper.style.marginBottom = '10px';
            info.style.marginLeft = '10px';
            info.style.display = 'flex';
            info.style.flexDirection = 'column';
            info.style.justifyContent = 'space-around';

            vehInfoHolder.style.height = '56px';
            vehInfoHolder.style.display = 'flex';
            vehInfoHolder.style.flexDirection = 'column';
            vehInfoHolder.style.justifyContent = 'space-between';
            vehHeader.style.textDecoration = 'underline';
            vehHeader.style.fontStyle = 'oblique';
            vehHeader.style.fontWeight = '600';
            vehPrice.style.fontWeight = '700';
            vehPrice.style.fontSize = '1.1em';
            vehKm.style.fontSize = '0.9em';
            vehKm.style.fontStyle = 'oblique';
            vehCity.style.fontSize = '0.95em';
            vehCity.style.fontStyle = 'oblique';
            adTime.style.color = 'rgb(153, 153, 153)';
            adTime.style.fontSize = '0.75em';

            photo.src = `assets/images/car${i + 1}-1.jpg`;
            photo.alt = `car${i}`;
            photo.style.width = '190px';
            photo.style.height = '130px';
            photoLink.href = "#";
            photoLink.style.textDecoration = 'none';

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
            img.src = `assets/images/${arrayOfRandom[i].image}`;
            desContainer.innerHTML = arrayOfRandom[i].text;

            artLink.style.display = 'flex';
            artLink.style.marginBottom = '15px';
            artLink.style.textDecoration = 'none';
            artLink.style.color = 'inherit';
            img.style.width = '160px';
            img.style.height = '100px';
            img.style.marginRight = '10px';
            desContainer.style.color = 'rgb(51, 51, 51)';
            desContainer.style.fontSize = '0.8em';
        }

    }
    showNews()

    function showAds(ads, adsWrapper) {

    }
    showAds([], adsContainer)

    // mainPageSearchIcons.forEach(icon => icon.addEventListener('click', showForm));

    window.addEventListener('DOMContentLoaded', showPage);
    window.addEventListener('hashchange', showPage);
}());