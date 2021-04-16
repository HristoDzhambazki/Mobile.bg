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
    let editSelectBrand = getById('editSelectBrand');
    let editSelectModel = getById('editSelectModel');


    //Events
    publishSelectBrand.addEventListener('change', (ev) => showCurrentBrandModels(ev, publishSelectModel));
    searchSelectBrand.addEventListener('change', (ev) => showCurrentBrandModels(ev, searchSelectModel));
    searchBoxSelectBrand.addEventListener('change', (ev) => showCurrentBrandModels(ev, searchBoxSelectModel));
    editSelectBrand.addEventListener('change', (ev) => showCurrentBrandModels(ev, editSelectModel));



    function showCurrentBrandModels(event, container) {
        container.innerHTML = '<option selected value="0">Избери</option>';
        let brand = event.detail || event.target.value;

        if (brand !== '') {
            carModels[brand].forEach(model => {
                let op = document.createElement('option');
                op.value = model;
                op.innerText = model;
                container.append(op);
            })
        }
    }

})()

