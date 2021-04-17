let adsCount = 0;

class CarStorage {
    constructor() {
        this.list = [];
        this.newList = [...this.list]

        let localAds = JSON.parse(localStorage.getItem('ADS_DATA'));
        if (localAds && localAds.length > 0) {
            this.list = [...localAds]
            adsCount = localAds.length;
        } else {
            localStorage.setItem('ADS_DATA', JSON.stringify([]));
        }
    }

    addCar(car) {
        this.list.push(car);

        let localAds = JSON.parse(localStorage.getItem('ADS_DATA'));
        localAds.push(car)
        localStorage.setItem('ADS_DATA', JSON.stringify(localAds));
    }

    removeCar(id) {
        let index = this.list.findIndex(car => car.id == id);
        this.list.splice(index, 1);
    }

    replaceAd(id, newAd) {
        let localAds = JSON.parse(localStorage.getItem('ADS_DATA'));

        if (!localAds.find(ad => ad.id === id)) {
            return false;
        }

        localAds = localAds.map(ad => {
            if (ad.id === id) {
                return { ...newAd };
            }

            return ad;
        })
        localStorage.setItem('ADS_DATA', JSON.stringify(localAds));

        return true;
    }

    getAd(id) {
        return this.list.find(x => x.id == id);
    }

    getFirstSixAds() {
        let localAds = JSON.parse(localStorage.getItem('ADS_DATA'));
        let newArr = localAds.slice(0, 6);
        return newArr;
    }

    getAll() {
        let localAds = JSON.parse(localStorage.getItem('ADS_DATA'));

        return localAds;
    }

    filter(obj) {
        this.newList = [...this.list];
        let sortList = false;
        let sortType = '';

        for (const key in obj) {
            if (key === 'sorting') {
                sortList = true;
                sortType = obj[key];
                continue;
            }

            this.newList = this.newList.filter(ad => {

                switch (key) {
                    case 'mileage':
                        return ad.mileage.value <= Number(obj[key]);
                    case 'powerFrom':
                        return ad.power.value >= Number(obj[key]);
                    case 'powerTo':
                        return ad.power.value <= Number(obj[key]);
                    case 'priceFrom':
                        return ad.price.value >= Number(obj[key]);
                    case 'priceTo':
                        return ad.price.value <= Number(obj[key]);
                    case 'productionYearFrom':
                        return ad.productionYear.value >= Number(obj[key]);
                    case 'productionYearTo':
                        return ad.productionYear.value <= Number(obj[key]);
                    case 'extras':
                        let containsExtras = true;
                        for (const extra in obj.extras) {
                            if (obj.extras[extra].length > 0) {
                                obj.extras[extra].forEach(x => {
                                    containsExtras = ad.extras[extra].content.includes(x);
                                })
                            }
                        }
                        return containsExtras;
                    default:
                        return ad[key].value === obj[key];
                }
            });
        }

        if (sortList) {
            this.sort(sortType)
        }

        return this.newList;
    }

    sort(type) {

        switch (type) {
            case 'price':
                this.newList.sort((a, b) => a.price.value - b.price.value)
                break;
            case 'productionDate':
                this.newList.sort((a, b) => b.productionYear.value - a.productionYear.value);
                break;
            case 'mileage':
                this.newList.sort((a, b) => a.mileage.value - b.mileage.value);
                break;
        }
    }
};



class Car {
    constructor() {
        this.id = ++adsCount;

        this.images = [];

        this.brand = {
            category: 'Марка',
        };

        this.model = {
            category: 'Модел',
        };

        this.modification = {
            category: 'Модификация',
        };

        this.engine = {
            category: 'Тип двигател',
        };

        this.gear = {
            category: 'Скоростна кутия',
        };

        this.power = {
            category: 'Мощност (к.с.)',
        };

        this.productionMonth = {
            category: 'Дата на производство',
        };

        this.productionYear = {
            category: 'Година на производство',
        };

        this.mileage = {
            category: 'Пробег',
        };

        this.euroSt = {
            category: 'Евростандарт',
        };

        this.color = {
            category: 'Цвят',
        };

        this.category = {
            category: 'Категория'
        };

        this.region = {
            category: 'Град',
        };

        this.price = {
            category: 'Цена',
        };

        this.currency = {
            category: 'Валута',
            value: 'лв.'
        };

        this.expiryDays = {
            category: 'Валидност на обявата',
        };

        this.extras = {
            safety: {
                category: 'Безопасност',
                content: [],
            },
            comfort: {
                category: 'Комфорт',
                content: [],
            },
            others: {
                category: 'Други',
                content: [],
            },
            exterior: {
                category: 'Екстериор',
                content: [],
            },
            security: {
                category: 'Защита',
                content: [],
            },
            interior: {
                category: 'Интериор',
                content: [],
            },
            specialized: {
                category: 'Специализирани',
                content: [],
            },
        };
    }
}

let carStorage = new CarStorage();

//GET local data and add it to Car Storage
let localAds = JSON.parse(localStorage.getItem('ADS_DATA'));
if (localAds.length === 0) {
    arrayData.forEach(obj => {
        let car = new Car();

        for (const key in obj) {
            if (key === 'extras') {
                for (const extrasKey in obj.extras) {
                    car.extras[extrasKey].content = obj.extras[extrasKey];
                }
            } else if (key === 'year') {
                car.productionYear.value = obj[key];
            } else if (key === 'images') {
                car.images = [...obj.images]
            } else {
                car[key].value = obj[key];
            }
        }

        carStorage.addCar(car)
    })
}


