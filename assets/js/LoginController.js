let regexEmail = /^[a-z]+[a-z]*([\-\.\_]?[a-z0-9])*@[a-z]{2,}.[a-z]{2,}(.[a-z]{2,})?/gm;

(function () {
    //DOM Selectors
    const loginContainer = getById('loginContainer');
    const registraionContainer = getById('registraionContainer');
    const logRegHeaderContainer = getById('logRegHeaderContainer')
    const loginHeaderBtn = getById('loginHeaderBtn');
    const registerHeaderBtn = getById('registerHeaderBtn');
    const publishPageLoginLink = getById('publishPageLoginLink')
    const publishPageRegLink = getById('publishPageRegLink');
    const welcomeUserContainer = getById('welcomeUserContainer');
    const welcomeText = getById('welcomeText');
    const logOutBtn = getById('logOut');

    //Register form selectors
    const registerEmailInput = getById('registerEmailInput');
    const registerPasswordInput = getById('registerPasswordInput');
    const registerRepeatedPassword = getById('registerRepeatedPassword');
    const registerWarningMessage = getById('registerWarningMessage');

    //Login form selectors
    const loginEmailInput = getById('loginEmailInput');
    const loginPasswordInput = getById('loginPasswordInput');
    const loginWarningMessage = getById('loginWarningMessage');

    //Buttons
    const displayLoginFormBtn = getById('displayLoginFormBtn');
    const displayRegFormBtn = getById('displayRegFormBtn');
    const registerBtn = getById('registerBtn');
    const loginBtn = getById('loginBtn');

    //Change forms and display btns styles
    displayLoginFormBtn.addEventListener('click', displayLoginForm);
    loginHeaderBtn.addEventListener('click', displayLoginForm);
    publishPageLoginLink.addEventListener('click', displayLoginForm);

    displayRegFormBtn.addEventListener('click', displayRegisterForm);
    registerHeaderBtn.addEventListener('click', displayRegisterForm);
    publishPageRegLink.addEventListener('click', displayRegisterForm);

    registerBtn.addEventListener('click', registerUser);
    loginBtn.addEventListener('click', loginUser);
    logOutBtn.addEventListener('click', logOutUser);

    //On refreshed page check if user is logged in and show welcomeUserContainer on header
    let userOnLoad = userStorage.getCurrentUser();
    if (userOnLoad) {
        logRegHeaderContainer.style.display = 'none';
        welcomeUserContainer.style.display = 'flex';

        let username = userOnLoad.username.split('@')[0];
        welcomeText.innerText = `Здравейте, ${username}`
    }

    //Functions //
    function logOutUser() {
        userStorage.logOutUser();

        logRegHeaderContainer.style.display = 'flex';
        welcomeUserContainer.style.display = 'none';
        welcomeText.innerText = ``
    }

    function loginUser(ev) {
        ev.preventDefault();
        const email = loginEmailInput.value;
        const password = loginPasswordInput.value;

        if (!userStorage.loginUser(email, password)) {
            loginWarningMessage.style.display = 'block'
        } else {
            loginWarningMessage.style.display = 'none';
            loginEmailInput.value = '';
            loginPasswordInput.value = '';

            logRegHeaderContainer.style.display = 'none';
            welcomeUserContainer.style.display = 'flex';

            let username = email.split('@')[0];
            welcomeText.innerText = `Здравейте, ${username}`

            location.hash = '#homePage';
        }
    }

    function registerUser(ev) {
        ev.preventDefault();
        const email = registerEmailInput.value;
        const password = registerPasswordInput.value;
        const repeatedPassword = registerRepeatedPassword.value;

        if (!email.match(regexEmail)) {
            registerWarningMessage.innerText = 'Невалиден Email'
            registerWarningMessage.style.display = 'block'
        } else if (!password.match(".{6,}")) {
            registerWarningMessage.innerText = 'Паролата трябва да съдържа поне 6 символа'
            registerWarningMessage.style.display = 'block'
        } else if (password !== repeatedPassword) {
            registerWarningMessage.innerText = 'Несъответсваща парола'
            registerWarningMessage.style.display = 'block'
        } else if (userStorage.checkUsername(email)) {
            registerWarningMessage.innerText = 'Съществува потребител с този Email адрес'
            registerWarningMessage.style.display = 'block'
        } else {
            registerWarningMessage.innerText = ''
            registerWarningMessage.style.display = 'none'
            registerEmailInput.value = '';
            registerRepeatedPassword.value = '';

            userStorage.registerUser(email, password);
            displayLoginForm();
        }

    }

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