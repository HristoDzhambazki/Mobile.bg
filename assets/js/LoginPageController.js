(function () {
    //DOM Selectors
    const loginContainer = getById('loginContainer');
    const registraionContainer = getById('registraionContainer');
    const loginHeaderBtn = getById('loginHeaderBtn');
    const registerHeaderBtn = getById('registerHeaderBtn');

    //Buttons
    const displayLoginFormBtn = getById('displayLoginFormBtn');
    const displayRegFormBtn = getById('displayRegFormBtn');

    //Change forms and display btns styles
    displayLoginFormBtn.addEventListener('click', displayLoginForm)
    loginHeaderBtn.addEventListener('click', displayLoginForm)

    displayRegFormBtn.addEventListener('click', displayRegisterForm)
    registerHeaderBtn.addEventListener('click', displayRegisterForm)

    function displayLoginForm() {
        loginContainer.style.display = 'block';
        registraionContainer.style.display = 'none';

        displayLoginFormBtn.classList.add("selectedBtn");
        displayRegFormBtn.classList.remove("selectedBtn");
    }

    function displayRegisterForm() {
        loginContainer.style.display = 'none';
        registraionContainer.style.display = 'block';

        displayLoginFormBtn.classList.remove("selectedBtn");
        displayRegFormBtn.classList.add("selectedBtn");
    }

})()