(function () {
    //DOM Selectors
    const loginForm = getById('loginForm');
    const registraionForm = getById('registraionForm');

    //Buttons
    const displayLoginFormBtn = getById('displayLoginFormBtn');
    const displayRegFormBtn = getById('displayRegFormBtn');

    displayLoginFormBtn.addEventListener('click', () => {
        loginForm.style.display = 'block';
        registraionForm.style.display = 'none';

        displayLoginFormBtn.classList.toggle("selectedBtn");
        displayRegFormBtn.classList.toggle("selectedBtn");
    })

    displayRegFormBtn.addEventListener('click', () => {
        loginForm.style.display = 'none';
        registraionForm.style.display = 'block';

        displayLoginFormBtn.classList.toggle("selectedBtn");
        displayRegFormBtn.classList.toggle("selectedBtn");
    })

})()