(function () {

    //DOM Selectors
    const myAdsContainer = getById('myAdsContainer');
    const myFavAdsContainer = getById('myFavAdsContainer');
    const profileSettingsContainer = getById('profileSettingsContainer');

    //My Ads Page
    const noAdsContainer = getById('noAdsContainer');
    const userAdsContainer = getById('userAdsContainer');

    //Fav Ads Page
    const noFavAdsContainer = getById('noFavAdsContainer');
    const userFavAdsContainer = getById('userFavAdsContainer');

    //Buttons
    const newAdButton = getById('newAdButton');
    const myAdsHeaderBtn = getById('myAdsHeaderBtn');

    //Links
    const profileMyAds = getById('profileMyAds');
    const profileMyFavAds = getById('profileMyFavAds');
    const profileSettings = getById('profileSettings');

    newAdButton.addEventListener('click', () => { location.hash = 'publishPage' })



    myAdsHeaderBtn.addEventListener('click', () => {
        changeProfileSection();
        showMyAdsPage();
    })

    profileMyAds.addEventListener('click', () => {
        changeProfileSection('myAds');
        showMyAdsPage();
    })

    profileMyFavAds.addEventListener('click', () => {
        changeProfileSection('myFavAds')
        showMyFavAdsPage();
    })

    profileSettings.addEventListener('click', () => changeProfileSection('profileSettings'))

    let currentUser = userStorage.getCurrentUser();

    showMyAdsPage();

    function showMyAdsPage() {
        if (currentUser && currentUser.uploads.length > 0) {
            userAdsContainer.innerHTML = '';

            userAdsContainer.style.display = 'block'
            noAdsContainer.style.display = 'none';

            currentUser.uploads.forEach(id => {
                let ad = adStorage.getAd(id);
                let currCard = generateAdCard(ad);
                userAdsContainer.append(currCard);
            })
        } else {
            userAdsContainer.style.display = 'none';
            noAdsContainer.style.display = 'block';
        }
    }

    function showMyFavAdsPage() {
        if (currentUser && currentUser.favs.length > 0) {
            userFavAdsContainer.innerHTML = '';

            userFavAdsContainer.style.display = 'block'
            noFavAdsContainer.style.display = 'none';

            currentUser.favs.forEach(id => {
                let ad = adStorage.getAd(id);
                let currCard = generateFavAdCard(ad);
                userFavAdsContainer.append(currCard);
            })
        } else {
            userFavAdsContainer.style.display = 'none';
            noFavAdsContainer.style.display = 'block';
        }
    }

    function generateFavAdCard(ad) {
        let userFavAdCard = document.createElement('div');
        let userAdMainContent = document.createElement('div');
        let userAdImgContainer = document.createElement('div');
        let img = document.createElement('img');
        let userAdInfoContainer = document.createElement('div');
        let title = document.createElement('h1');
        let price = document.createElement('h2');
        let userAdBtnsContainer = document.createElement('div');
        let showAdBtn = document.createElement('button');
        let deleteBtn = document.createElement('button');

        userFavAdCard.classList.add('userFavAdCard');
        userAdMainContent.classList.add('userAdMainContent');
        userAdImgContainer.classList.add('userAdImgContainer');
        userAdInfoContainer.classList.add('userAdInfoContainer');
        userAdBtnsContainer.classList.add('userFavAdBtnsContainer');

        let mainImgSrc = ad.images[0];

        if (mainImgSrc.length < 11) {
            img.src = "assets/images/cars/" + mainImgSrc;
        } else {
            img.src = mainImgSrc;
        }

        img.id = ad.id;
        title.innerText = `${ad.brand} ${ad.model}`;
        title.id = ad.id;
        price.innerText = `${ad.price} ${ad.currency}`;
        showAdBtn.innerText = 'Виж обявата';
        deleteBtn.innerText = 'Премахни от бележник';
        showAdBtn.id = ad.id;

        deleteBtn.addEventListener('click', () => {
            userStorage.removeFavAd(ad.id);
            location.reload();
        })

        userAdImgContainer.append(img);
        userAdInfoContainer.append(title, price);
        userAdMainContent.append(userAdImgContainer, userAdInfoContainer)
        userAdBtnsContainer.append(showAdBtn, deleteBtn);
        userFavAdCard.append(userAdMainContent, userAdBtnsContainer)

        return userFavAdCard;
    }

    function generateAdCard(ad) {
        let userAdCard = document.createElement('div');
        let userAdMainContent = document.createElement('div');
        let userAdImgContainer = document.createElement('div');
        let img = document.createElement('img');
        let userAdInfoContainer = document.createElement('div');
        let title = document.createElement('h1');
        let price = document.createElement('h2');
        let userAdBtnsContainer = document.createElement('div');
        let editBtn = document.createElement('button');
        let deleteBtn = document.createElement('button');

        userAdCard.classList.add('userAdCard');
        userAdMainContent.classList.add('userAdMainContent');
        userAdImgContainer.classList.add('userAdImgContainer');
        userAdInfoContainer.classList.add('userAdInfoContainer');
        userAdBtnsContainer.classList.add('userAdBtnsContainer');

        img.src = ad.images[0];
        img.id = ad.id;
        title.innerText = `${ad.brand} ${ad.model}`;
        title.id = ad.id;
        price.innerText = `${ad.price} ${ad.currency}`;
        editBtn.innerText = 'Редактирай';
        deleteBtn.innerText = 'Изтрий';
        editBtn.id = ad.id;

        deleteBtn.addEventListener('click', () => {
            adStorage.removeAd(ad.id);
            userStorage.removeAdFromUserAcc(ad.id);
            location.reload();
        })

        userAdImgContainer.append(img);
        userAdInfoContainer.append(title, price);
        userAdMainContent.append(userAdImgContainer, userAdInfoContainer)
        userAdBtnsContainer.append(editBtn, deleteBtn);
        userAdCard.append(userAdMainContent, userAdBtnsContainer)

        return userAdCard;
    }

    function changeProfileSection(section) {
        changeLinkColor(section);

        switch (section) {
            case 'myAds':
                myAdsContainer.style.display = 'block';
                myFavAdsContainer.style.display = 'none';
                profileSettingsContainer.style.display = 'none';
                break;
            case 'myFavAds':
                myAdsContainer.style.display = 'none';
                myFavAdsContainer.style.display = 'block';
                profileSettingsContainer.style.display = 'none';
                break;
            case 'profileSettings':
                myAdsContainer.style.display = 'none';
                myFavAdsContainer.style.display = 'none';
                profileSettingsContainer.style.display = 'block';
                break;
            default:
                myAdsContainer.style.display = 'block';
                showMyAdsPage();
                myFavAdsContainer.style.display = 'none';
                profileSettingsContainer.style.display = 'none';
        }
    }

    function changeLinkColor(section) {
        switch (section) {
            case 'myAds':
                profileMyAds.style.color = '#b7d7eb';
                profileMyFavAds.style.color = 'white';
                profileSettings.style.color = 'white';
                break;
            case 'myFavAds':
                profileMyAds.style.color = 'white';
                profileMyFavAds.style.color = '#b7d7eb';
                profileSettings.style.color = 'white';
                break;
            case 'profileSettings':
                profileMyAds.style.color = 'white';
                profileMyFavAds.style.color = 'white';
                profileSettings.style.color = '#b7d7eb';
                break;
        }
    }
})()