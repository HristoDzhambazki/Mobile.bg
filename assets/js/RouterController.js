(function () {
    //DOM Selectors
    let mainPage = getById('mainPage');
    let publishPage = getById('publishPage');
    let searchPage = getById('searchPage');
    let dealersPage = getById('dealersPage');
    let profilePage = getById('profilePage');
    let searchResultsPage = getById('searchResultsPage');
    let singleAdPage = getById('singleAdPage');
    let loginPage = getById('loginPage');

    let publishLogin = getById('publishPageLogin');
    let publishFirstStep = getById('publishFirstStep');
    let publishSecondStep = getById('publishSecondStep');
    let publishAdPage = getById('publishAd')

    let stepsToPublishElement = getById('stepsToPublish');
    let stepOneInfoElement = stepsToPublishElement.children[0];
    let stepTwoInfoElement = stepsToPublishElement.children[2];

    //Buttons
    let publishNavBtn = document.getElementById('topNavigation').children[1];
    let publishFirstStepBtn = document.querySelector('#publishButtonDiv button');
    let backToFirstStepBtn = getById('backToFirstStep');
    let publishAdBtn = getById('publishNewAd')

    //Events
    publishNavBtn.addEventListener('click', showAccuratePublishPage.bind(this, 'firstStep'))
    backToFirstStepBtn.addEventListener('click', showAccuratePublishPage.bind(this, 'firstStep'));
    publishFirstStepBtn.addEventListener('click', showAccuratePublishPage.bind(this, 'secondStep'));
    publishAdBtn.addEventListener('click', showAccuratePublishPage.bind(this, 'publishStep'))

    window.addEventListener('DOMContentLoaded', showPage);
    window.addEventListener('hashchange', showPage);

    function showAccuratePublishPage(page) {

        switch (page) {
            case 'firstStep' || 'loggedIn':
                publishFirstStep.style.display = 'block';
                publishSecondStep.style.display = 'none';
                publishLogin.style.display = 'none';
                publishAdPage.style.display = 'none'

                stepOneInfoElement.classList.add('activeStep')
                stepTwoInfoElement.classList.remove('activeStep')
                break;
            case 'secondStep':
                publishFirstStep.style.display = 'none';
                publishSecondStep.style.display = 'block';
                publishLogin.style.display = 'none';
                publishAdPage.style.display = 'none'

                stepOneInfoElement.classList.remove('activeStep')
                stepTwoInfoElement.classList.add('activeStep')
                break;
            case 'publishStep':
                publishFirstStep.style.display = 'none';
                publishSecondStep.style.display = 'none';
                publishLogin.style.display = 'none';
                publishAdPage.style.display = 'block'
                break;
            default:
            // publishFirstStep.style.display = 'none';
            // publishSecondStep.style.display = 'none';
            // publishLogin.style.display = 'block';
        }
    }


    function showPage() {
        let page = location.hash.slice(1);

        switch (page) {
            case 'mainPage':
                mainPage.style.display = 'block';
                publishPage.style.display = 'none';
                searchPage.style.display = 'none';
                dealersPage.style.display = 'none';
                profilePage.style.display = 'none';
                searchResultsPage.style.display = 'none';
                singleAdPage.style.display = 'none';
                loginPage.style.display = 'none';
                break;
            case 'publishPage':
                mainPage.style.display = 'none';
                publishPage.style.display = 'block';
                showAccuratePublishPage('firstStep');
                searchPage.style.display = 'none';
                dealersPage.style.display = 'none';
                profilePage.style.display = 'none';
                searchResultsPage.style.display = 'none';
                singleAdPage.style.display = 'none';
                loginPage.style.display = 'none';
                break;
            case 'searchPage':
                mainPage.style.display = 'none';
                publishPage.style.display = 'none';
                searchPage.style.display = 'block';
                dealersPage.style.display = 'none';
                profilePage.style.display = 'none';
                searchResultsPage.style.display = 'none';
                singleAdPage.style.display = 'none';
                loginPage.style.display = 'none';
                break;
            case 'dealersPage':
                mainPage.style.display = 'none';
                publishPage.style.display = 'none';
                searchPage.style.display = 'none';
                dealersPage.style.display = 'block';
                profilePage.style.display = 'none';
                searchResultsPage.style.display = 'none';
                singleAdPage.style.display = 'none';
                loginPage.style.display = 'none';
                break;
            case 'profilePage':
                mainPage.style.display = 'none';
                publishPage.style.display = 'none';
                searchPage.style.display = 'none';
                dealersPage.style.display = 'none';
                profilePage.style.display = 'block';
                searchResultsPage.style.display = 'none';
                singleAdPage.style.display = 'none';
                loginPage.style.display = 'none';
                break;
            case 'searchResultsPage':
                mainPage.style.display = 'none';
                publishPage.style.display = 'none';
                searchPage.style.display = 'none';
                dealersPage.style.display = 'none';
                profilePage.style.display = 'none';
                searchResultsPage.style.display = 'block';
                singleAdPage.style.display = 'none';
                loginPage.style.display = 'none';
                break;
            case 'singleAdPage':
                mainPage.style.display = 'none';
                publishPage.style.display = 'none';
                searchPage.style.display = 'none';
                dealersPage.style.display = 'none';
                profilePage.style.display = 'none';
                searchResultsPage.style.display = 'none';
                singleAdPage.style.display = 'block';
                loginPage.style.display = 'none';
                break;
            case 'loginPage':
                mainPage.style.display = 'none';
                publishPage.style.display = 'none';
                searchPage.style.display = 'none';
                dealersPage.style.display = 'none';
                profilePage.style.display = 'none';
                searchResultsPage.style.display = 'none';
                singleAdPage.style.display = 'none';
                loginPage.style.display = 'block';
                break;
            default:
                mainPage.style.display = 'block';
                publishPage.style.display = 'none';
                searchPage.style.display = 'none';
                dealersPage.style.display = 'none';
                profilePage.style.display = 'none';
                searchResultsPage.style.display = 'none';
                singleAdPage.style.display = 'none';
        }
    }



}());