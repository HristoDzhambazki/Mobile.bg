(function () {
    let newLoginBtn = getById('logIn');
    let newRegBtn = getById('register');
    let loginLine = getById('line');
    let loginButton = getById('myAdPageLoginBtn');
    let registerButton = getById('myAdPageRegBtn');
    let loginCont = getById('adPageLoginForm');
    let regCont = getById('adPageRegForm');
    let loggedInCont = getById('loggedInAdPage');
    let loggedInExit = getById('loggedInExit');
    let loggedOutWrapper = getById('loginWrapper');
    let welcomeText = getById('welcomeText');
    loggedInCont.style.display = 'none';

    let loginName = getById('loginInput');
    let loginPass = getById('loginPass');
    let regName = getById('regInput');
    let regPass = getById('regPass');
    let regRepeatPass = getById('regRepeatPass');

    newLoginBtn.addEventListener('click', function (event) {
        loginCont.style.display = 'block';
        regCont.style.display = 'none';
    });

    newRegBtn.addEventListener('click', function (event) {
        loginCont.style.display = 'none';
        regCont.style.display = 'block';
    });

    registerButton.addEventListener('click', function (event) {
        let username = regName.value;
        let password = regPass.value;
        let repeatedPass = regRepeatPass.value;

        if (password.match(".{8,}") &&
            password === repeatedPass && username.includes('@')) {
            userStorage.registerUser(username, password);
            loginCont.style.display = 'block';
            regCont.style.display = 'none';
        } else if (!username.includes('@')) {
            let message = createEl('p');
            let container = getById('wrongEmailText');
            container.innerHTML = ' ';
            container.append(message);
            message.innerHTML = 'невалиден email';
            message.style.color = 'red';
            message.style.fontWeight = '600';
            message.style.marginLeft = '20px';
        } else if (!password.match(".{8,}")) {
            let message = getById('wrongPassMessage');
            message.style.display = 'block';
        } else if (password !== repeatedPass) {
            let message = createEl('p');
            let container = getById('adPageRegCont');
            container.innerHTML = ' ';
            container.append(message);
            message.innerText = 'несъответсваща парола';
            message.style.color = 'red';
            message.style.fontWeight = '600';
            message.style.marginLeft = '20px';
        }
    });

    loginButton.addEventListener('click', function (event) {
        if (userStorage.loginUser(loginName.value, loginPass.value)) {
            location.hash = '#home';
            location.reload();
        }
    });

    function manageLogin() {
        let users = JSON.parse(localStorage.users);
        let currentUser = userStorage.getCurrentUser();

        if (users.find(user => !!user.isLoggedin)) {
            loggedInExit.style.display = 'block';
            loginCont.style.display = 'none';
            regCont.style.display = 'none';
            loggedInCont.style.display = 'block';
            newLoginBtn.style.display = 'none';
            newRegBtn.style.display = 'none';
            loginLine.style.display = 'none';
            welcomeText.innerHTML = `Здравейте, ${currentUser.username}`;
        } else {
            loggedInExit.style.display = 'none';
        }

        loggedInExit.addEventListener('click', function (event) {
            location.hash = '#home';
            currentUser.isLoggedin = false;
            localStorage.setItem('users', JSON.stringify(userStorage.users));
            location.reload();

        });
    }
    manageLogin()

}())