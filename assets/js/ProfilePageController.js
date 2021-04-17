(function () {

    //DOM Selectors
    const myAdsContainer = getById('myAdsContainer');
    const myFavAdsContainer = getById('myFavAdsContainer');
    const profileSettingsContainer = getById('profileSettingsContainer');

    const noAdsContainer = getById('noAdsContainer');
    const userAdsContainer = getById('userAdsContainer')

    //Buttons
    const newAdButton = getById('newAdButton');
    const myAdsHeaderBtn = getById('myAdsHeaderBtn');

    //Links
    const profileMyAds = getById('profileMyAds');
    const profileMyFavAds = getById('profileMyFavAds');
    const profileSettings = getById('profileSettings');

    newAdButton.addEventListener('click', () => { location.hash = 'publishPage' })

    myAdsHeaderBtn.addEventListener('click', changeProfileSection)
    profileMyAds.addEventListener('click', () => changeProfileSection('myAds'))
    profileMyFavAds.addEventListener('click', () => changeProfileSection('myFavAds'))
    profileSettings.addEventListener('click', () => changeProfileSection('profileSettings'))

    let currentUser = userStorage.getCurrentUser();
    if (currentUser.uploads.length > 0) {
        userAdsContainer.style.display = 'block'
        noAdsContainer.style.display = 'none';

        currentUser.uploads.forEach(id => {
            let ad = carStorage.getAd(id);
            let currCard = generateAdCard(ad);
            userAdsContainer.append(currCard);
        })
    } else {
        userAdsContainer.style.display = 'none';
        noAdsContainer.style.display = 'block';
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
        title.innerText = `${ad.brand.value} ${ad.model.value}`;
        title.id = ad.id;
        price.innerText = `${ad.price.value} ${ad.currency.value}`;
        editBtn.innerText = 'Редактирай';
        deleteBtn.innerText = 'Изтрий';
        editBtn.id = ad.id;

        deleteBtn.addEventListener('click', () => {
            carStorage.removeAd(ad.id);
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
            default:
                profileMyAds.style.color = '#b7d7eb';
                profileMyFavAds.style.color = 'white';
                profileSettings.style.color = 'white';
        }
    }
})()