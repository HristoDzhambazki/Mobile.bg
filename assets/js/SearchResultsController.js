//Using search object from SearchController.js
let resultObj = carStorage.filter(searchObj);

//DOM Selectors
let newSearchElement = getById('newSearch');
let newSearchAnchor = newSearchElement.getElementsByTagName('li')[0];
let editSearchhAnchor = newSearchElement.getElementsByTagName('li')[1];
let resultInfoHeadingElement = getById('resultsInfoHeading').children[0];
let resultsCategory = getById('searchResultsCategory');
let resultsOrderedBy = getById('searchResultsOrderedBy');
let resultsFeatures = getById('searchResultsFeatures');
let resultsExtras = getById('searchResultsExtras');

//Buttons
let searchBtn = getById('searchButton');

//Events
searchBtn.addEventListener('click', () => {
    console.log(searchObj);

    // location.hash = '#searchResultsPage';
    // // resultObj = carStorage.filter(searchObj);
    // // console.log(resultObj);

    // renderResultInfoHeading();
    renderResultsMainInfo();
})

newSearchAnchor.addEventListener('click', resetSearchMenu);

// Functions

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
        let totalAds = resultObj.length;
        console.log(resultObj);

        resultInfoHeadingElement.innerText = `1 - 10 от общо ${totalAds} Обяви за ${brand} ${model} Автомобили и Джипове`
    }

}




function resetSearchMenu() {
    console.log('reseting...');
}
