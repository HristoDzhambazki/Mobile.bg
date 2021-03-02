// const { auto } = require("async");

(function () {
    let mainPage = getById('mainPage');
    let publishPage = getById('publishPage');
    let searchPage = getById('searchPage');
    let dealersPage = getById('dealersPage');
    let myAdPage = getById('myAdPage');
    let mainPageWrapper = getById('mainPageWrapper');
    let mainPageSearchIcons = Array.from(getById('mainSearchNav').children);
    let mainSearchContainer = getById('mainSearchTitle')

    function showPage() {
        let page = location.hash.slice(1);

        switch (page) {
            case 'mainPage':
                mainPage.style.display = 'block';
                publishPage.style.display = 'none';
                searchPage.style.display = 'none';
                dealersPage.style.display = 'none';
                myAdPage.style.display = 'none';
                break;
            case 'publishPage':
                mainPage.style.display = 'none';
                publishPage.style.display = 'block';
                searchPage.style.display = 'none';
                dealersPage.style.display = 'none';
                myAdPage.style.display = 'none';
                break;
            case 'searchPage':
                mainPage.style.display = 'none';
                publishPage.style.display = 'none';
                searchPage.style.display = 'block';
                dealersPage.style.display = 'none';
                myAdPage.style.display = 'none';
                break;
            case 'dealersPage':
                mainPage.style.display = 'none';
                publishPage.style.display = 'none';
                searchPage.style.display = 'none';
                dealersPage.style.display = 'block';
                myAdPage.style.display = 'none';
                break;
            case 'myAdPage':
                mainPage.style.display = 'none';
                publishPage.style.display = 'none';
                searchPage.style.display = 'none';
                dealersPage.style.display = 'none';
                myAdPage.style.display = 'block';
                break;
            default:
                mainPage.style.display = 'block';
                publishPage.style.display = 'none';
                searchPage.style.display = 'none';
                dealersPage.style.display = 'none';
                myAdPage.style.display = 'none';
        }
    }

    function showForm(event) {
        
    }

    mainPageSearchIcons.forEach(icon => icon.addEventListener('click', showForm));

    window.addEventListener('DOMContentLoaded', showForm);
    window.addEventListener('DOMContentLoaded', showPage);
    window.addEventListener('hashchange', showPage);
}());