let carStorage = (function () {
    let id = 0;

    class Car {
        constructor(state, price, currency, images, brand, model, year, engine, power, euroSt, gear, category, mileage, color, region, others, desctiption, seller, mobile, email) {

            this.id = ++id;

            this.state = state;
            this.price = price;
            this.currency = currency;
            this.region = region;

            this.images = images;

            this.information = {
                desctiption,
                seller,
                mobile,
                email
            }

            this.components = {
                brand,
                model,
                year,
                engine,
                power,
                euroSt,
                gear,
                category,
                mileage,
                color,
                others,
            }
        }
    }

    class CarStorage {
        constructor() {
            this.list = [];
        }

        addCar() {
            this.list.push(new Car(...arguments));
        }

        removeCar(id) {
            let index = this.list.findIndex(car => car.id == id);
            this.list.splice(index, 1);
        }
    }
    
    return new CarStorage();
})();

let id = 0;

    class Car {
        constructor(state, price, currency, images, brand, model, year, engine, power, euroSt, gear, category, mileage, color, region, others, desctiption, seller, mobile, email) {

            this.id = ++id;

            this.state = state;
            this.price = price;
            this.currency = currency;
            this.region = region;

            this.images = images;

            this.information = {
                desctiption,
                seller,
                mobile,
                email
            }

            this.components = {
                brand,
                model,
                year,
                engine,
                power,
                euroSt,
                gear,
                category,
                mileage,
                color,
                others,
            }
        }
    }