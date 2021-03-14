//Using search object from SearchController.js
let resultsObj = '';

//DOM Selectors
let newSearchElement = getById('newSearch');
let newSearchAnchor = newSearchElement.getElementsByTagName('li')[0];
let editSearchhAnchor = newSearchElement.getElementsByTagName('li')[1];
let resultInfoHeadingElement = getById('resultsInfoHeading').children[0];
let resultsCategory = getById('searchResultsCategory');
let resultsOrderedBy = getById('searchResultsOrderedBy');
let resultsFeatures = getById('searchResultsFeatures');
let resultsExtras = getById('searchResultsExtras');
let mainResultsElement = getById('mainResults')
let paginationElement = getById('searchResultsPagination');

//Buttons
let searchBtn = getById('searchButton');

//Events
searchBtn.addEventListener('click', () => {
    resultsObj = carStorage.filter(searchObj);
    mainResultsElement.innerHTML = '';
    // location.hash = '#searchResultsPage';
    // // resultsObj = carStorage.filter(searchObj);
    // // console.log(resultsObj);

    renderResultsMainInfo();
    renderPagination();

    resultsObj.forEach(ad => {
        renderAd(ad);
    })
})

newSearchAnchor.addEventListener('click', resetSearchMenu);

// Functions
function renderPagination() {
    let adsCount = resultsObj.length;
    let pagesCount = Math.floor(adsCount / 5);

    for (let i = 0; i < pagesCount; i++) {


    }
}

function renderAd(ad) {
    let card = createElement('div', 'searchResultCard');

    let upperBody = createElement('div', 'cardUpperBody');

    let cardImageDiv = createElement('div', 'cardImageDiv')
    let anchorImg = createElement('a');
    let cardMainImg = createElement('img', 'cardMainImg');
    cardMainImg.src = 'assets/images/cars/' + ad.images.value[0];

    anchorImg.append(cardMainImg);
    cardImageDiv.append(anchorImg);

    let cardContent = createElement('div', 'cardContent');

    let cardTitleAndPrice = createElement('div', 'cardtitleAndPrice');

    let title = createElement('h1');
    title.innerText = `${ad.brand.value} ${ad.model.value}`

    let priceAndFavsIcon = createElement('div', 'priceAndFavsIcon');
    let price = createElement('h1');
    price.innerText = `${ad.price.value} ${ad.currency.value}`

    let favIconDiv = createElement('div', 'favIconDiv');
    let favIcon = createElement('img')
    favIcon.src = 'assets/images/icons/listFav.svg';
    favIcon.alt = 'fav icon image'

    favIconDiv.append(favIcon);
    priceAndFavsIcon.append(price, favIconDiv);
    cardTitleAndPrice.append(title, priceAndFavsIcon)

    let cardDescription = createElement('div', 'cardDescription');
    let cardFeatures = createElement('p', 'cardFeatures');
    cardFeatures.innerText = 'Характеристики: '



    let cardExtras = createElement('p', 'cardFeatures');
    cardExtras.innerText = 'Особености: '
    let cardRegion = createElement('p');
    cardRegion.innerText = 'Регион: '

    for (const key in ad) {

        if (key === 'brand' || key === 'model' || key === 'currency' || key === 'images') {
            continue;
        } else if (key === 'extras') {
            for (const extra in ad.extras) {
                if (ad.extras[extra].content.length > 0) {
                    cardExtras.innerText += ad.extras[extra].content.join(', ');
                    cardExtras.innerText += ', ';
                }
            }
        } else if (key === 'region') {
            if (ad.region.value) {
                cardRegion.innerText += ad.region.value;
            }
        } else if (ad[key].value) {
            cardFeatures.innerText += `${ad[key].category}: ${ad[key].value}, `
        }
    }

    cardDescription.append(cardFeatures, cardExtras, cardRegion);

    cardContent.append(cardTitleAndPrice, cardDescription);

    upperBody.append(cardImageDiv, cardContent);

    let cardDetails = createElement('div', 'cardDetails');
    let cardMoreDetails = createElement('div', 'cardMoreDetails');
    let anchMoreDetails = createElement('a');
    anchMoreDetails.href = '#'
    anchMoreDetails.innerText = `Повече детайли и ${ad.images.value.length} снимки`;
    let spanMoreDetails = createElement('span');
    spanMoreDetails.innerText = '|';
    let anchAddInNotebook = createElement('a');
    anchAddInNotebook.href = '#'
    anchAddInNotebook.innerText = 'Добави в бележника';

    cardMoreDetails.append(anchMoreDetails, spanMoreDetails, anchAddInNotebook);

    let cardMark = createElement('div');
    let labelMark = createElement('label');
    labelMark.innerText = 'Маркирай обявата'
    let checkboxMark = createElement('input');
    checkboxMark.type = 'checkbox';

    cardMark.append(labelMark, checkboxMark);

    cardDetails.append(cardMoreDetails, cardMark);

    card.append(upperBody, cardDetails);
    mainResultsElement.append(card)
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
    if (searchObj.brand) {
        brand = searchObj.brand;
    }

    let model = '';
    if (searchObj.model) {
        model = searchObj.model;
    }

    renderResultInfoHeading();
    renderResultInfoMainContent();
    renderResultFeatures();
    renderTypeOfSorting();

    function renderResultFeatures() {
        let ad = new Car();

        for (const key in searchObj) {

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
                        paragraph.innerText = 'от ' + searchObj[key];
                    } else if (key === 'productionYearTo') {
                        paragraph.innerText = 'до ' + searchObj[key];
                    }
                } else {
                    yearInfo.innerText = `от ${searchObj.productionYearFrom} до ${searchObj.productionYearTo}`
                    continue;
                }
            } else if (key === 'mileage') {
                heading.innerText = 'Макс. пробег в км.:';
                paragraph.innerText = 'до ' + searchObj[key];
            } else if (key === 'powerFrom' || key === 'powerTo') {
                let powerInfo = getById('resultPowerInfo')
                if (!powerInfo) {
                    heading.innerText = 'Мощност от (к.с.):';
                    paragraph.id = 'resultPowerInfo';

                    if (key === 'powerFrom') {
                        paragraph.innerText = 'от ' + searchObj[key];
                    } else if (key === 'powerTo') {
                        paragraph.innerText = 'до ' + searchObj[key];
                    }
                } else {
                    powerInfo.innerText = `от ${searchObj.powerFrom} до ${searchObj.powerTo}`
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
                    priceInfo.innerText = `от ${searchObj.priceFrom} до ${searchObj.priceTo} ${searchObj.currency}`
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
                heading.innerText = ad[key].category + ':';
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
        let totalAds = resultsObj.length;

        resultInfoHeadingElement.innerText = `1 - 10 от общо ${totalAds} Обяви за ${brand} ${model} Автомобили и Джипове`
    }

}

function resetSearchMenu() {
    console.log('reseting...');
}
