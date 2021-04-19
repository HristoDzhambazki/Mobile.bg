//Using search object from SearchController.js
//Using search BOX object from HomePageController.js

let results = '';
let resultSearchObj = '';

//DOM Selectors
let searchResultsContainer = getById('searchResultsPagesAndPagination');
let resultInfoHeadingElement = getById('resultsInfoHeading').children[0];
let resultsCategory = getById('searchResultsCategory');
let resultsOrderedBy = getById('searchResultsOrderedBy');
let resultsFeatures = getById('searchResultsFeatures');
let resultsExtras = getById('searchResultsExtras');
let mainResultsElement = getById('mainResults')
let paginationElement = getById('searchResultsPagination');
let pagesCountElement = getById('searchResultPagesCount').children[0];

//Buttons
let searchBtn = getById('searchButton');
let searchBoxBtn = document.querySelector('#searchBoxBtnDiv button');

//Events
searchBtn.addEventListener('click', () => loadResults(searchObj));
searchBoxBtn.addEventListener('click', () => loadResults(searchBoxObj));

// Functions
function loadResults(searchObj) {
    resultSearchObj = { ...searchObj };
    location.hash = '#searchResultsPage';
    results = adStorage.filter(searchObj);
    mainResultsElement.innerHTML = '';

    renderResultsMainInfo();

    if (results.length > 0) {
        searchResultsContainer.style.display = 'flex'
        renderPagination();
    } else {
        searchResultsContainer.style.display = 'none'
    }
}

const recordsPerPage = 4;
function renderPagination() {
    let currentPage = 1;
    let numOfPages = Math.ceil(results.length / recordsPerPage);

    let btnPrev = document.createElement('button');
    btnPrev.innerText = 'Назад'
    let btnNext = document.createElement('button');
    btnNext.innerText = 'Напред'

    btnNext.addEventListener('click', nextPage);
    btnPrev.addEventListener('click', prevPage);

    paginationElement.innerHTML = '';

    paginationElement.append(btnPrev);
    for (let i = 1; i <= numOfPages; i++) {
        let btn = document.createElement('button');
        btn.innerText = i;
        btn.value = i;
        paginationElement.append(btn);
        btn.addEventListener('click', () => {
            currentPage = btn.value;
            changePage(currentPage)
        })
    }

    function changeColorOfCurrentPageBox(page) {
        btns = Array.from(paginationElement.children);
        btns.forEach(btn => {
            if (btn.value) {
                if (btn.value === page.toString()) {
                    btn.style.color = 'white';
                    btn.style.backgroundColor = '#09f';
                } else {
                    btn.style.color = '#09f';
                    btn.style.backgroundColor = 'white';
                }
            }
        })
    }

    paginationElement.append(btnNext);

    function prevPage() {
        if (currentPage > 1) {
            currentPage--;
            changePage(currentPage);
        }
    }

    function nextPage() {
        if (currentPage < numOfPages) {
            currentPage++;
            changePage(currentPage);
        }
    }

    changePage(currentPage);

    function changePage(page) {
        changeColorOfCurrentPageBox(page);
        pagesCountElement.innerText = `Страница ${page} от ${numOfPages}`;

        let listingTable = mainResultsElement;

        if (page < 1) page = 1;
        if (page > numOfPages) page = numOfPages;

        listingTable.innerHTML = "";

        for (let i = (page - 1) * recordsPerPage; i < (page * recordsPerPage); i++) {
            if (i < results.length) {
                renderAd(results[i]);
            }
        }

        if (page == 1) {
            btnPrev.disabled = true;
        } else {
            btnPrev.disabled = false;
        }

        if (page == numOfPages) {
            btnNext.disabled = true;
        } else {
            btnNext.disabled = false;
        }
    }
}

function renderAd(ad) {
    let card = createElement('div', 'searchResultCard');

    let upperBody = generateCardUpperBody(ad);
    let cardDetails = generateCardDetails(ad);

    card.append(upperBody, cardDetails);
    mainResultsElement.append(card)
}

function generateCardUpperBody(ad) {
    const id = ad.id.toString();
    const currentUser = userStorage.getCurrentUser();

    let upperBody = createElement('div', 'cardUpperBody');
    let favIconDiv = createElement('div', 'favIconDiv');
    let favIcon = createElement('img');
    let cardImageDiv = createElement('div', 'cardImageDiv')
    let anchorImg = createElement('a');
    let cardMainImg = createElement('img', 'cardMainImg');
    let cardContent = createElement('div', 'cardContent');
    let cardTitleAndPrice = createElement('div', 'cardtitleAndPrice');
    let title = createElement('h1');
    let priceAndFavsIcon = createElement('div', 'priceAndFavsIcon');
    let price = createElement('h1');
    let cardDescription = createElement('div', 'cardDescription');
    let cardFeatures = createElement('p', 'cardFeatures');
    let cardExtras = createElement('p', 'cardFeatures');
    let cardRegion = createElement('p');

    favIcon.alt = 'favIcon';
    if (currentUser && currentUser.favs.includes(id)) {
        favIcon.src = 'assets/images/icons/starFilled.png';
    } else {
        favIcon.src = 'assets/images/icons/starEmpty.png';
    }

    title.innerText = `${ad.brand} ${ad.model}`
    title.id = id;

    price.innerText = `${ad.price} ${ad.currency}`

    anchorImg.href = '#singleAdPage';
    cardMainImg.id = id;
    if (ad.images[0] && ad.images[0].length > 11) {
        cardMainImg.src = ad.images[0]
    } else {
        cardMainImg.src = 'assets/images/cars/' + ad.images[0];
    }

    title.addEventListener('click', () => location.hash = 'singleAdPage')

    favIcon.addEventListener('click', () => {
        if (currentUser) {

            if (!currentUser.favs.includes(id)) {
                userStorage.addFavAd(id);
                favIcon.src = 'assets/images/icons/starFilled.png';
                addInNotebook.innerText = 'Премахни от бележник';
            } else {
                userStorage.removeFavAd(id)
                favIcon.src = 'assets/images/icons/starEmpty.png';
                addInNotebook.innerText = 'Добави в бележник';
            }
        } else {
            location.hash('loginPage')
        }
    })

    cardFeatures.innerText = 'Характеристики: '
    cardExtras.innerText = 'Особености: '
    cardRegion.innerText = 'Регион: '

    for (const key in ad) {

        if (key === 'brand' || key === 'model' || key === 'currency' || key === 'images') {
            continue;
        } else if (key === 'extras') {
            for (const extra in ad.extras) {
                if (ad.extras[extra].length > 0) {
                    cardExtras.innerText += ad.extras[extra].join(', ');
                    cardExtras.innerText += ', ';
                }
            }
        } else if (key === 'region') {
            if (ad.region) {
                cardRegion.innerText += ad.region;
            }
        } else if (ad[key] && key !== 'id') {
            cardFeatures.innerText += `${adNamings[key]}: ${ad[key]}, `
        }
    }

    favIconDiv.append(favIcon);
    anchorImg.append(cardMainImg);
    cardImageDiv.append(anchorImg);
    priceAndFavsIcon.append(price, favIconDiv);
    cardTitleAndPrice.append(title, priceAndFavsIcon)
    cardDescription.append(cardFeatures, cardExtras, cardRegion);
    cardContent.append(cardTitleAndPrice, cardDescription);
    upperBody.append(cardImageDiv, cardContent);

    return upperBody;
}

function generateCardDetails(ad) {
    const id = ad.id.toString();
    const currentUser = userStorage.getCurrentUser();

    let cardDetails = createElement('div', 'cardDetails');
    let cardMoreDetails = createElement('div', 'cardMoreDetails');
    let anchMoreDetails = createElement('a');

    let spanMoreDetails = createElement('span');
    spanMoreDetails.innerText = '|';
    let addInNotebook = createElement('p');

    anchMoreDetails.href = '#singleAdPage'
    anchMoreDetails.id = id;
    anchMoreDetails.innerText = `Повече детайли и ${ad.images.length} снимки`;

    if (currentUser && currentUser.favs.includes(id)) {
        addInNotebook.innerText = 'Премахни от бележника';
    } else {
        addInNotebook.innerText = 'Добави в бележник';
    }

    addInNotebook.addEventListener('click', () => {
        if (currentUser) {
            if (!currentUser.favs.includes(id)) {
                userStorage.addFavAd(id);
                addInNotebook.innerText = 'Премахни от бележник';
                favIcon.src = 'assets/images/icons/starFilled.png';
            } else {
                userStorage.removeFavAd(id);
                addInNotebook.innerText = 'Добави в бележник';
                favIcon.src = 'assets/images/icons/starEmpty.png';
            }
        } else {
            location.hash = 'loginPage'
        }
    })

    let markId = 0;
    let cardMark = createElement('div');
    let labelMark = createElement('label');
    labelMark.setAttribute('for', `mark${markId}`);
    labelMark.innerText = 'Маркирай обявата'
    let checkboxMark = createElement('input');
    checkboxMark.type = 'checkbox';
    checkboxMark.id = `mark${markId}`;
    markId++;

    cardMoreDetails.append(anchMoreDetails, spanMoreDetails, addInNotebook);

    cardMark.append(labelMark, checkboxMark);

    cardDetails.append(cardMoreDetails, cardMark);

    return cardDetails;
}

function createElement(type, className) {
    let el = document.createElement(type);
    if (className) {
        el.classList.add(className);
    }
    return el;
}

function renderResultsMainInfo() {
    let brand = '';
    if (resultSearchObj.brand) {
        brand = resultSearchObj.brand;
    }

    let model = '';
    if (resultSearchObj.model) {
        model = resultSearchObj.model;
    }

    renderResultInfoHeading();
    renderResultInfoMainContent();
    renderResultFeatures();
    renderTypeOfSorting();

    function renderResultFeatures() {

        for (const key in resultSearchObj) {

            if (key === 'brand' || key === 'model' || key === 'currency') {
                continue;
            }

            let heading = document.createElement('h6');
            let paragraph = document.createElement('p');
            let span = document.createElement('span');
            span.innerText = ',';

            if (key === 'productionYearFrom' || key === 'productionYearTo') {
                let yearInfo = getById('resultYearInfo')
                if (!yearInfo) {
                    heading.innerText = 'Година на производство:';
                    paragraph.id = 'resultYearInfo';

                    if (key === 'productionYearFrom') {
                        paragraph.innerText = 'от ' + resultSearchObj[key];
                    } else if (key === 'productionYearTo') {
                        paragraph.innerText = 'до ' + resultSearchObj[key];
                    }
                } else {
                    yearInfo.innerText = `от ${resultSearchObj.productionYearFrom} до ${resultSearchObj.productionYearTo}`
                    continue;
                }
            } else if (key === 'mileage') {
                heading.innerText = 'Макс. пробег в км.:';
                paragraph.innerText = 'до ' + resultSearchObj[key];
            } else if (key === 'powerFrom' || key === 'powerTo') {
                let powerInfo = getById('resultPowerInfo')
                if (!powerInfo) {
                    heading.innerText = 'Мощност от (к.с.):';
                    paragraph.id = 'resultPowerInfo';

                    if (key === 'powerFrom') {
                        paragraph.innerText = 'от ' + resultSearchObj[key];
                    } else if (key === 'powerTo') {
                        paragraph.innerText = 'до ' + resultSearchObj[key];
                    }
                } else {
                    powerInfo.innerText = `от ${resultSearchObj.powerFrom} до ${resultSearchObj.powerTo}`
                    continue;
                }
            } else if (key === 'priceFrom' || key === 'priceTo') {
                let priceInfo = getById('resultPriceInfo')
                if (!priceInfo) {
                    heading.innerText = 'Цена:';
                    paragraph.id = 'resultPriceInfo';

                    if (key === 'priceFrom') {
                        paragraph.innerText = 'от ' + searchObj[key] + ' ' + searchObj.currency;
                    } else if (key === 'priceTo') {
                        paragraph.innerText = 'до ' + searchObj[key] + ' ' + searchObj.currency;
                    }
                } else {
                    let priceFrom = searchObj.priceFrom;
                    let priceTo = searchObj.priceTo;

                    if (priceFrom && priceTo) {
                        priceInfo.innerText = `от ${priceFrom} до ${searchObj.priceTo} ${searchObj.currency}`
                    } else if (priceFrom) {
                        priceInfo.innerText = `от ${priceFrom} ${searchObj.currency}`
                    } else if (priceTo) {
                        priceInfo.innerText = `до ${searchObj.priceTo} ${searchObj.currency}`
                    }

                    continue;
                }
            } else if (key === 'extras') {
                let extrasInfo = getById('resultExtras');

                if (!extrasInfo) {
                    heading.innerText = 'Особености: ';
                    paragraph.id = 'resultExtras';

                    for (const extra in searchObj.extras) {
                        if (searchObj.extras[extra].length > 0) {
                            paragraph.innerText += searchObj.extras[extra].join(', ');
                        }
                    }

                    resultsExtras.append(heading, paragraph)
                } else {
                    extrasInfo.innerText = '';

                    for (const extra in searchObj.extras) {
                        if (searchObj.extras[extra].length > 0) {
                            extrasInfo.innerText += searchObj.extras[extra].join(', ');
                        }
                    }
                }

                continue;
            } else {
                heading.innerText = adNamings[key] + ':';
                paragraph.innerText = searchObj[key];
            }

            resultsFeatures.append(heading, paragraph, span)
        }
    }

    function renderTypeOfSorting() {
        let sorting = '';
        let searchSorting = searchObj.sorting;
        if (searchSorting) {
            if (searchSorting === 'price') {
                sorting = 'Цена';
            } else if (searchSorting === 'productionDate') {
                sorting = 'Дата на производство';
            } else if (searchSorting === 'mileage') {
                sorting = 'Пробег'
            } else if (searchSorting === 'newestAds') {
                sorting = 'Най-новите обяви'
            }
        } else {
            sorting = 'Марка/Модел/Цена';
        }

        resultsOrderedBy.innerText = sorting;
    }

    function renderResultInfoMainContent() {
        if (brand) {
            resultsCategory.innerText = `Автомобили и Джипове, ${brand} ${model}`
        }
    }

    function renderResultInfoHeading() {
        let totalAds = results.length;
        console.log(totalAds);
        if (totalAds > 0) {
            resultInfoHeadingElement.innerText = `1 - ${recordsPerPage} от общо ${totalAds} Обяви за ${brand} ${model} Автомобили и Джипове`
        } else {
            resultInfoHeadingElement.style.display = 'none'
        }
    }

}

