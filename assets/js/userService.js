let userStorage = (function () {
    class User {
        constructor(username, password) {
            this.username = username;
            this.password = password;
            this.isLoggedin = false;
        }
    }

    class UserManager {
        constructor() {
            if (localStorage.getItem('users')) {
                this.users = JSON.parse(localStorage.getItem('users'));
            } else {
                this.users = [{ username: "test1@", password: "1", isLoggedin: false, uploads: [] },
                { username: "test2@", password: "2", isLoggedin: false, uploads: [] }];
                localStorage.setItem('users', JSON.stringify(this.users));
            }
        }

        registerUser(username, password) {
            if (!this.users.find(user => user.username === username)) {
                this.users.push(new User(username, password))
            }
            localStorage.setItem('users', JSON.stringify(this.users));
        }

        loginUser(username, password) {
            let currentUser = this.users.find(user => user.username === username
                && user.password === password);

            this.users.forEach(user => {
                if (user.username === username && user.password === password) {
                    user.isLoggedin = true;
                } else {
                    user.isLoggedin = false;
                }
            });

            localStorage.setItem('users', JSON.stringify(this.users));

            return !!currentUser;
        }

        getCurrentUser() {
            return this.users.find(user => user.isLoggedin);
        }

        addAdToUserAcc(id) {
            this.users.forEach(user => {
                if (user.isLoggedin) {
                    user.uploads.push(id)
                }
            })

            localStorage.setItem('users', JSON.stringify(this.users));
        }
    }

    return new UserManager();
}());