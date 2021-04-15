(function () {

    //DOM Selectors
    const myAdsContainer = getById('myAdsContainer');
    const myFavAdsContainer = getById('myFavAdsContainer');
    const profileSettingsContainer = getById('profileSettingsContainer');

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