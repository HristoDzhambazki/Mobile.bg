(function () {
    let searchBtn = getById('searchButton');
    searchBtn.addEventListener('click', () => {
        location.hash = '#searchResultsPage';
    })
})();