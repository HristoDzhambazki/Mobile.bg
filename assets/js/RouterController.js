(function () {
    //DOM Selectors
    let homePage = getById('homePage');
    let publishPage = getById('publishPage');
    let searchPage = getById('searchPage');
    let dealersPage = getById('dealersPage');
    let profilePage = getById('profilePage');
    let searchResultsPage = getById('searchResultsPage');
    let singleAdPage = getById('singleAdPage');
    let loginPage = getById('loginPage');
    let editPage = getById('editPage');

    //Publish page selectors
    let publishLogin = getById('publishPageLogin');
    let publishFirstStep = getById('publishFirstStep');
    let publishSecondStep = getById('publishSecondStep');
    let publishAdPage = getById('publishAd')
    let stepsToPublishElement = getById('stepsToPublish');
    let stepOneInfoElement = stepsToPublishElement.children[0];
    let stepTwoInfoElement = stepsToPublishElement.children[2];

    //Navigation links selectors
    let navigationLinks = [...getById('topNavigation').children].slice(0, 3);
    let myAdsLink = getById('mainNavigation').children[1];
    let navLinksArr = [...navigationLinks, myAdsLink];

    //Edit page selectors
    let editMenuContainer = getById('editMenuContainer');
    let editFinishedAd = getById('editFinishedAd');

    //Profile page selectors
    let userAdsContainer = getById('userAdsContainer');

    //Buttons
    let publishNavBtn = document.getElementById('topNavigation').children[1];
    let publishFirstStepBtn = document.querySelector('#firstStepButtonDiv button');
    let backToFirstStepBtn = getById('backToFirstStep');
    let publishAdBtn = getById('publishNewAd')

    //Events
    publishNavBtn.addEventListener('click', showAccuratePublishPage.bind(this, 'firstStep'));
    backToFirstStepBtn.addEventListener('click', showAccuratePublishPage.bind(this, 'firstStep'));
    publishFirstStepBtn.addEventListener('click', showAccuratePublishPage.bind(this, 'secondStep'));
    publishAdBtn.addEventListener('click', showAccuratePublishPage.bind(this, 'publishStep'));
    userAdsContainer.addEventListener('click', (ev) => {
        if (ev.target.innerText === 'Редактирай') {
            location.hash = 'editPage'
        }
    })

    window.addEventListener('DOMContentLoaded', showPage);
    window.addEventListener('hashchange', showPage);

    let userAdsCount = carStorage.getAll().length;

    function showPage() {
        let page = location.hash.slice(1);

        changeNavLinksColor(page);
        changeEditPageDisplayedSection();
        switch (page) {
            case 'homePage':
                homePage.style.display = 'block';
                publishPage.style.display = 'none';
                searchPage.style.display = 'none';
                dealersPage.style.display = 'none';
                profilePage.style.display = 'none';
                searchResultsPage.style.display = 'none';
                singleAdPage.style.display = 'none';
                loginPage.style.display = 'none';
                editPage.style.display = 'none';
                break;
            case 'publishPage':
                homePage.style.display = 'none';
                publishPage.style.display = 'block';

                if (userStorage.getCurrentUser()) {
                    showAccuratePublishPage('firstStep');
                } else {
                    showAccuratePublishPage();
                }

                searchPage.style.display = 'none';
                dealersPage.style.display = 'none';
                profilePage.style.display = 'none';
                searchResultsPage.style.display = 'none';
                singleAdPage.style.display = 'none';
                loginPage.style.display = 'none';
                editPage.style.display = 'none';
                break;
            case 'searchPage':
                homePage.style.display = 'none';
                publishPage.style.display = 'none';
                searchPage.style.display = 'block';
                dealersPage.style.display = 'none';
                profilePage.style.display = 'none';
                searchResultsPage.style.display = 'none';
                singleAdPage.style.display = 'none';
                loginPage.style.display = 'none';
                editPage.style.display = 'none';
                break;
            case 'dealersPage':
                homePage.style.display = 'none';
                publishPage.style.display = 'none';
                searchPage.style.display = 'none';
                dealersPage.style.display = 'block';
                profilePage.style.display = 'none';
                searchResultsPage.style.display = 'none';
                singleAdPage.style.display = 'none';
                loginPage.style.display = 'none';
                editPage.style.display = 'none';
                break;
            case 'profilePage':
                homePage.style.display = 'none';
                publishPage.style.display = 'none';
                searchPage.style.display = 'none';
                dealersPage.style.display = 'none';
                searchResultsPage.style.display = 'none';
                singleAdPage.style.display = 'none';

                if (userStorage.getCurrentUser()) {
                    profilePage.style.display = 'block';
                    loginPage.style.display = 'none';

                    if (userAdsCount !== carStorage.getAll().length) {
                        location.reload();
                    }
                } else {
                    location.hash = '#loginPage';
                }

                editPage.style.display = 'none';
                break;
            case 'searchResultsPage':
                homePage.style.display = 'none';
                publishPage.style.display = 'none';
                searchPage.style.display = 'none';
                dealersPage.style.display = 'none';
                profilePage.style.display = 'none';
                searchResultsPage.style.display = 'block';
                singleAdPage.style.display = 'none';
                loginPage.style.display = 'none';
                editPage.style.display = 'none';
                break;
            case 'singleAdPage':
                homePage.style.display = 'none';
                publishPage.style.display = 'none';
                searchPage.style.display = 'none';
                dealersPage.style.display = 'none';
                profilePage.style.display = 'none';
                searchResultsPage.style.display = 'none';
                singleAdPage.style.display = 'block';
                loginPage.style.display = 'none';
                editPage.style.display = 'none';
                break;
            case 'loginPage':
                homePage.style.display = 'none';
                publishPage.style.display = 'none';
                searchPage.style.display = 'none';
                dealersPage.style.display = 'none';
                profilePage.style.display = 'none';
                searchResultsPage.style.display = 'none';
                singleAdPage.style.display = 'none';
                loginPage.style.display = 'block';
                editPage.style.display = 'none';
                break;
            case 'editPage':
                homePage.style.display = 'none';
                publishPage.style.display = 'none';
                searchPage.style.display = 'none';
                dealersPage.style.display = 'none';
                profilePage.style.display = 'none';
                searchResultsPage.style.display = 'none';
                singleAdPage.style.display = 'none';
                loginPage.style.display = 'none';
                editPage.style.display = 'block';
                break;
            default:
                homePage.style.display = 'block';
                publishPage.style.display = 'none';
                searchPage.style.display = 'none';
                dealersPage.style.display = 'none';
                profilePage.style.display = 'none';
                searchResultsPage.style.display = 'none';
                singleAdPage.style.display = 'none';
                loginPage.style.display = 'none';
                editPage.style.display = 'none';
        }
    }

    function showAccuratePublishPage(page) {

        switch (page) {
            case 'firstStep':
                stepsToPublishElement.style.display = 'flex';
                publishFirstStep.style.display = 'block';
                publishSecondStep.style.display = 'none';
                publishAdPage.style.display = 'none'
                publishLogin.style.display = 'none';

                stepOneInfoElement.classList.add('activeStep')
                stepTwoInfoElement.classList.remove('activeStep')
                break;
            case 'secondStep':
                publishFirstStep.style.display = 'none';
                publishSecondStep.style.display = 'block';
                publishAdPage.style.display = 'none'
                publishLogin.style.display = 'none';

                stepOneInfoElement.classList.remove('activeStep')
                stepTwoInfoElement.classList.add('activeStep')
                break;
            case 'publishStep':
                publishFirstStep.style.display = 'none';
                publishSecondStep.style.display = 'none';
                publishAdPage.style.display = 'block'
                publishLogin.style.display = 'none';
                break;
            default:
                stepsToPublishElement.style.display = 'none';
                publishFirstStep.style.display = 'none';
                publishSecondStep.style.display = 'none';
                publishAdPage.style.display = 'none'
                publishLogin.style.display = 'block';
        }
    }

    function changeEditPageDisplayedSection() {
        editMenuContainer.style.display = 'block';
        editFinishedAd.style.display = 'none';
    }

    function changeNavLinksColor(hash) {
        navLinksArr.forEach(link => {
            let currPage = link.hash.slice(1);

            if (currPage === 'searchPage' && (hash === 'searchPage' || hash === 'searchResultsPage' || hash === 'singleAdPage')) {
                link.style.backgroundColor = '#0099ff';
            } else if (currPage === hash) {
                link.style.backgroundColor = '#0099ff';
            } else {
                link.style.backgroundColor = '#605d5d';
            }

        })
    }
}());