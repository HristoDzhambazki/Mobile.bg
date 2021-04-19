
class AdStorage {
    constructor() {
        this.list = [];

        let localAds = JSON.parse(localStorage.getItem('ADS_DATA'));
        if (localAds && localAds.length > 0) {
            this.list = [...localAds]
        } else {
            localStorage.setItem('ADS_DATA', JSON.stringify([]));
        }

        this.newList = [...this.list]
    }

    addAd(ad) {
        let lastId = 0;
        if (this.list[this.list.length - 1]) {
            lastId = this.list[this.list.length - 1].id;
        }
        ad.id = lastId + 1;

        this.list.push(ad);

        localStorage.setItem('ADS_DATA', JSON.stringify(this.list));
    }

    removeAd(id) {
        let index = this.list.findIndex(ad => ad.id == id);
        this.list.splice(index, 1);

        localStorage.setItem('ADS_DATA', JSON.stringify(this.list));
    }

    replaceAd(id, newAd) {
        this.list = this.list.map(ad => {
            if (ad.id === id) {
                return { ...newAd };
            }

            return ad;
        })

        localStorage.setItem('ADS_DATA', JSON.stringify(this.list));
    }

    getAd(id) {
        return this.list.find(x => x.id == id);
    }

    getAdIndex(id) {
        return this.list.findIndex(ad => ad.id === id)
    }

    getAdByIndex(index) {
        return this.list[index];
    }

    getLength() {
        return this.list.length;
    }

    getFirstSixAds() {
        return this.list.slice(0, 6);
    }

    getLastSixAds() {
        return this.list.slice(this.list.length - 6).reverse();
    }

    getAll() {
        return this.list;
    }

    getLastAdId() {
        return this.list[this.list.length - 1].id;
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
                        return ad.mileage <= Number(obj[key]);
                    case 'powerFrom':
                        return ad.power >= Number(obj[key]);
                    case 'powerTo':
                        return ad.power <= Number(obj[key]);
                    case 'priceFrom':
                        return ad.price >= Number(obj[key]);
                    case 'priceTo':
                        return ad.price <= Number(obj[key]);
                    case 'productionYearFrom':
                        return ad.productionYear >= Number(obj[key]);
                    case 'productionYearTo':
                        return ad.productionYear <= Number(obj[key]);
                    case 'extras':
                        let containsExtras = true;
                        for (const extra in obj.extras) {
                            if (obj.extras[extra].length > 0) {
                                obj.extras[extra].forEach(x => {
                                    containsExtras = ad.extras[extra].includes(x);
                                })
                            }
                        }
                        return containsExtras;
                    default:
                        return ad[key] === obj[key];
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
                this.newList.sort((a, b) => a.price - b.price)
                break;
            case 'productionDate':
                this.newList.sort((a, b) => b.productionYear - a.productionYear);
                break;
            case 'mileage':
                this.newList.sort((a, b) => a.mileage - b.mileage);
                break;
        }
    }
};

class Ad {
    constructor(id = 0) {
        this.id = id;

        this.images = [];

        this.brand;

        this.model;

        this.modification;

        this.engine;

        this.gear;

        this.power;

        this.productionMonth;

        this.productionYear;

        this.mileage;

        this.euroSt;

        this.color;

        this.category;

        this.region;

        this.price;

        this.currency = 'лв.';

        this.expiryDays;

        this.extras = {
            safety: [],
            comfort: [],
            others: [],
            exterior: [],
            security: [],
            interior: [],
            specialized: [],
        };
    }
}

let adStorage = new AdStorage();

//GET local data and add it to Ad Storage
let localAds = JSON.parse(localStorage.getItem('ADS_DATA'));
if (localAds.length === 0) {
    arrayData.forEach(obj => {
        let ad = new Ad();

        for (const key in obj) {
            if (key === 'extras') {

                for (const extrasKey in obj.extras) {
                    ad.extras[extrasKey] = obj.extras[extrasKey];
                }

            } else if (key === 'year') {
                ad.productionYear = obj[key];

            } else if (key === 'images') {
                ad.images = [...obj.images]

            } else {
                ad[key] = obj[key];
            }
        }

        adStorage.addAd(ad)
    })
}