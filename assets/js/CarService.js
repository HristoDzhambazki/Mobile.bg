class CarStorage {
    constructor() {
        this.list = [];
    }

    addCar(car) {
        this.list.push(car);
    }

    removeCar(id) {
        let index = this.list.findIndex(car => car.id == id);
        this.list.splice(index, 1);
    }
};

let id = 0;

class Car {
    constructor(state, price, currency, images, brand, model, year, engine, power, euroSt, gear, category, mileage, color, region, extras) {

        this.id = ++id;

        this.state = state;
        this.price = price;
        this.currency = currency;
        this.region = region;

        this.images = images;

        this.extras = extras;

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
        }
    }
}
