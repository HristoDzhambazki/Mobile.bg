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


    //Events
    publishSelectBrand.addEventListener('change', (ev) => showCurrentBrandModels(ev, publishSelectModel));
    searchSelectBrand.addEventListener('change', (ev) => showCurrentBrandModels(ev, searchSelectModel));

    function showCurrentBrandModels(event, container) {
        container.innerHTML = '<option value="">Избери</option>';
        let brand = event.target.value;

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

