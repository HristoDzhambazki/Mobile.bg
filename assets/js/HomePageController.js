(function () {
    let vehicleCardCont = getById('vehicleCardCont');
    let adManager = carStorage;

    function showCarContainer(vehicles, container) {
        vehicles = carStorage.getFirstSixAds();

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
            photo.setAttribute('id', vehicles[i].id)
            photoLink.href = "#singleAdPage";
            photoLink.setAttribute('id', vehicles[i].id)
            photoLink.classList.add('autoPhotoLink');

            vehHeader.innerHTML = `${vehicles[i].brand.value + ' ' + vehicles[i].model.value}`;
            vehPrice.innerHTML = `${vehicles[i].price.value} ${vehicles[i].currency.value}`;
            vehKm.innerHTML = `${vehicles[i].mileage.value} км`;
            vehCity.innerHTML = `${vehicles[i].region.value}`;
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

}());