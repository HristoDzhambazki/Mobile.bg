let searchObj = (function () {
    let obj = {

        currency: 'лв.',

        extras: {
            safety: [],
            comfort: [],
            others: [],
            exterior: [],
            security: [],
            interior: [],
            specialized: [],
        },
    };

    //DOM Selector
    let searchMenu = getById('searchMenu');
    let searchCheckboxOptions = getById('searchCheckboxOptions')
    let selectElements = searchMenu.getElementsByTagName('select');
    let inputElements = searchMenu.querySelectorAll('input[type=text]');
    let checkboxElements = searchCheckboxOptions.querySelectorAll('input[type=checkbox]');
    let newSearchElement = getById('newSearchRP');
    let newSearchAnchor = newSearchElement.getElementsByTagName('li')[0];

    //Buttons
    //Button from Home Page
    let detailedSearchBtn = getById('detailedSearchBtn')

    //Events

    //Get Selections from Home page search box
    detailedSearchBtn.addEventListener('click', () => {
        obj = { ...obj, ...searchBoxObj }

        setElementsValue();
    })

    //Anchor from search results page
    newSearchAnchor.addEventListener('click', resetSearchMenu);


    //Get Value from Checkbox Elements
    let checkElementsArray = Array.from(checkboxElements);
    checkElementsArray.forEach(x => x.addEventListener('change', getCheckboxValue));

    //Get value from Input Elements
    inputElements.forEach(el => el.addEventListener('change', getSelectValue));

    //Get value from Select Elements
    let selectElementsArray = Array.from(selectElements).splice(1);
    selectElementsArray.forEach(el => el.addEventListener('change', getSelectValue));


    return obj;

    //Functions

    function getCheckboxValue(ev) {
        let name = ev.target.name;
        let value = ev.target.value;

        if (ev.target.checked) {
            obj.extras[name].push(value)
        } else {
            obj.extras[name] = obj.extras[name].filter(x => x !== value);
        }
    }

    function getSelectValue(ev) {
        let name = ev.target.name;
        let value = ev.target.value || ev.detail;

        if (name in obj && value === '') {
            delete obj[name];
        } else {
            obj[name] = value;
        }
    }

    function setElementsValue() {
        for (const key in searchBoxObj) {
            let value = searchBoxObj[key];

            if (key === 'price') {
                let priceToElement = getById('priceTo');

                priceToElement.value = value;
            } else if (key === 'brand') {
                let event = new CustomEvent('change', { detail: value })

                let searchSelectBrand = document.getElementById('searchSelectBrand');

                searchSelectBrand.dispatchEvent(event);
            }

            selectElementsArray.forEach(el => {

                if (key === 'productionYear' && el.name === 'productionYearFrom') {
                    el.value = value;
                } else if (el.name === key) {
                    el.value = value;
                }
            })
        }
    }

    function resetSearchMenu() {

        //reset select elements
        selectElementsArray.forEach(el => {

            if (el.name !== 'currency') {

                if (el.name === 'model') {
                    el.innerHTML = '<option selected value="0">Избери</option>';
                }

                el.value = '0'
            }
        })

        //reset input elements 
        inputElements.forEach(el => {
            el.value = '';
        })

        //reset checkbox elements
        checkElementsArray.forEach(el => {
            el.checked = false;
        })
    }

})()


