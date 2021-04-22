let userId = 2;

let localUsers = JSON.parse(localStorage.getItem('users'));
if (localUsers) {
    userId = localUsers.length;
}

let userStorage = (function () {
    class User {
        constructor(username, password) {
            this.id = ++userId;
            this.username = username;
            this.password = password;
            this.uploads = [];
            this.favs = [];
            this.isLoggedin = false;
        }
    }

    class UserManager {
        constructor() {
            if (localStorage.getItem('users')) {
                this.users = JSON.parse(localStorage.getItem('users'));
            } else {
                this.users = [
                    { id: 1, username: "test1@", password: "1", isLoggedin: false, uploads: [], favs: [], },
                    { id: 2, username: "test2@", password: "2", isLoggedin: false, uploads: [], favs: [], }
                ];
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

            if (currentUser) {
                this.users.forEach(user => {
                    if (user.id === currentUser.id) {
                        user.isLoggedin = true;
                    } else {
                        user.isLoggedin = false;
                    }
                });
            }

            localStorage.setItem('users', JSON.stringify(this.users));

            return !!currentUser;
        }

        logOutUser() {
            this.users.forEach(user => {
                if (user.isLoggedin) {
                    user.isLoggedin = false;
                }
            });

            localStorage.setItem('users', JSON.stringify(this.users));
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

        removeAdFromUserAcc(id) {
            let newUsersArr = this.users.map(user => {
                if (user.isLoggedin) {
                    let index = user.uploads.findIndex(currId => currId === id)
                    if (index > -1) {
                        user.uploads.splice(index, 1)
                    }
                }

                return user;
            })

            localStorage.setItem('users', JSON.stringify(newUsersArr));
        }

        addFavAd(id) {
            this.users.forEach(user => {
                if (user.isLoggedin) {
                    user.favs.push(id)
                }
            })

            localStorage.setItem('users', JSON.stringify(this.users));
        }

        removeFavAd(id) {
            let newUsersArr = this.users.map(user => {
                if (user.isLoggedin) {
                    let index = user.favs.findIndex(currId => currId == id)
                    if (index > -1) {
                        user.favs.splice(index, 1)
                    }
                }

                return user;
            })

            localStorage.setItem('users', JSON.stringify(newUsersArr));
        }

        checkUsername(email) {
            return this.users.find(user => user.username === email);
        }
    }

    return new UserManager();
}());
