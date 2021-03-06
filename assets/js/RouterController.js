(function () {
    let mainPage = getById('mainPage');
    let publishPage = getById('publishPage');
    let searchPage = getById('searchPage');
    let dealersPage = getById('dealersPage');
    let myAdPage = getById('myAdPage');
    let searchResultsPage = getById('searchResultsPage')

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

    window.addEventListener('DOMContentLoaded', showPage);
    window.addEventListener('hashchange', showPage);
}());