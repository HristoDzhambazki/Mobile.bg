(function () {
    //DOM Selectors
    let mainPage = getById('mainPage');
    let publishPage = getById('publishPage');
    let searchPage = getById('searchPage');
    let dealersPage = getById('dealersPage');
    let myAdPage = getById('myAdPage');
    let searchResultsPage = getById('searchResultsPage');

    let publishLogin = getById('publishPageLogin');
    let publishFirstStep = getById('publishFirstStep');
    let publishSecondStep = getById('publishSecondStep');

    let stepsToPublishElement = getById('stepsToPublish');
    let stepOneInfoElement = stepsToPublishElement.children[0];
    let stepTwoInfoElement = stepsToPublishElement.children[2];

    //Buttons
    let publishFirstStepBtn = document.querySelector('#publishButtonDiv button');
    let backToFirstStepBtn = getById('backToFirstStep');

    //Events
    backToFirstStepBtn.addEventListener('click', showAccuratePublishPage.bind(this, 'firstStep'));
    publishFirstStepBtn.addEventListener('click', showAccuratePublishPage.bind(this, 'secondStep'));
    window.addEventListener('DOMContentLoaded', showPage);
    window.addEventListener('hashchange', showPage);

    function showAccuratePublishPage(page) {

        switch (page) {
            case 'firstStep' || 'loggedIn':
                publishFirstStep.style.display = 'block';
                publishSecondStep.style.display = 'none';
                publishLogin.style.display = 'none';

                stepOneInfoElement.classList.add('activeStep')
                stepTwoInfoElement.classList.remove('activeStep')
                break;
            case 'secondStep':
                publishFirstStep.style.display = 'none';
                publishSecondStep.style.display = 'block';
                publishLogin.style.display = 'none';

                stepOneInfoElement.classList.remove('activeStep')
                stepTwoInfoElement.classList.add('activeStep')
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
                myAdPage.style.display = 'none';
                searchResultsPage.style.display = 'none';
                break;
            case 'publishPage':
                mainPage.style.display = 'none';
                publishPage.style.display = 'block';
                showAccuratePublishPage('secondStep');
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



}());