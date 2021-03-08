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
    constructor() {
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

        this.miliage = {
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

