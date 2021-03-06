(function () {
    let carModels = carModelsData.reduce((acc, x) => {
        acc[x[0]] = x.slice(2)
        return acc;
    }, {})

    //DOM Selectors
    let publishSelectBrand = getById('publishSelectBrand');
    let publishSelectModel = getById('publishSelectModel');

    //Events
    publishSelectBrand.addEventListener('change', showCurrentBrandModels);

    function showCurrentBrandModels(event) {
        publishSelectModel.innerHTML = '<option value="">Избери</option>';
        let brand = event.target.value;

        carModels[brand].forEach(model => {
            let op = document.createElement('option');
            op.value = model;
            op.innerText = model;
            publishSelectModel.append(op);
        })
    }
})()

