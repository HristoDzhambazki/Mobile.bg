(function () {
    let carModels = carModelsData.reduce((acc, x) => {
        acc[x[0]] = x.slice(2)
        return acc;
    }, {})

    //DOM Selectors
    let publishSelectBrand = getById('publishSelectBrand');
    let publishSelectModel = getById('publishSelectModel');
    let searchSelectBrand = getById('searchSelectBrand');
    let searchSelectModel = getById('searchSelectModel');
    let searchBoxSelectBrand = getById('searchBoxSelectBrand');
    let searchBoxSelectModel = getById('searchBoxSelectModel');


    //Events
    publishSelectBrand.addEventListener('change', (ev) => showCurrentBrandModels(ev, publishSelectModel));
    searchSelectBrand.addEventListener('change', (ev) => showCurrentBrandModels(ev, searchSelectModel));
    searchBoxSelectBrand.addEventListener('change', (ev) => showCurrentBrandModels(ev, searchBoxSelectModel));

    function showCurrentBrandModels(event, container) {
        container.innerHTML = '<option value="">Избери</option>';
        let brand = event.target.value || event.detail;

        if (brand !== '') {
            carModels[brand].forEach(model => {
                let op = document.createElement('option');
                op.value = model;
                op.innerText = model;
                container.append(op);
            })
        }
    }

    //Buttons
})()

