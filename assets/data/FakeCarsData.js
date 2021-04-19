let arrayData = [
    {
        price: 5000,
        currency: 'лв.',
        region: 'София',

        images: [
            'car1-1.jpg',
            'car1-2.jpg',
            'car1-3.jpg',
        ],


        brand: 'Toyota',
        model: 'Yaris',
        year: 2009,
        engine: 'Бензинов',
        power: 69,
        euroSt: 'Евро 4',
        gear: 'Ръчна',
        category: 'Хечбек',
        mileage: 144000,
        color: 'Черен',
        extras: {
            comfort: ['Бордкомпютър', 'Ел. огледала', 'Ел. стъкла'],
        },
    },
    {
        price: 60000,
        currency: 'лв.',
        region: 'Русе',

        images: [
            'car2-1.jpg',
            'car2-2.jpg',
            'car2-3.jpg',
        ],


        brand: 'Mercedes-Benz',
        model: 'S 350',
        year: 2014,
        engine: 'Дизелов',
        power: 258,
        euroSt: 'Евро 4',
        gear: 'Автоматична',
        category: 'Седан',
        mileage: 199000,
        color: 'Хамелеон',
        extras: {
            others: ['Бартер'],
        },
    },
    {
        price: 9990,
        currency: 'лв.',
        region: 'Дупница',

        images: [
            'car3-1.jpg',
            'car3-2.jpg',
            'car3-3.jpg',
        ],


        brand: 'Citroen',
        model: 'C5',
        year: 2010,
        engine: 'Дизелов',
        power: 163,
        euroSt: 'Евро 5',
        gear: 'Автоматична',
        category: 'Седан',
        mileage: 168000,
        color: 'Тъмно сив',
        extras: {
            comfort: ['Bluetooth', 'DVD, TV', 'USB'],
            others: ['Лизинг', 'Нов внос', 'Сервизна книжка']
        },
    },
    {
        price: 28000,
        currency: 'USD',
        region: 'Пловдив',

        images: [
            'car4-1.jpg',
            'car4-2.jpg',
            'car4-3.jpg',
        ],

        brand: 'VW',
        model: 'Jetta',
        year: 2019,
        engine: 'Бензинов',
        power: 150,
        euroSt: '',
        gear: 'Автоматична',
        category: 'Седан',
        mileage: 35000,
        color: 'Син',
        extras: {
            comfort: ['Auto Start Stop function', 'Bluetooth', 'USB'],
            others: ['Бартер', '4x4', 'Лизинг']
        },
    },
    {
        price: 7000,
        currency: 'лв.',
        region: 'Бургас',

        images: [
            'car5-1.jpg',
            'car5-2.jpg',
            'car5-3.jpg',
        ],


        brand: 'BMW',
        model: '120',
        year: 2006,
        engine: 'Дизелов',
        power: 163,
        euroSt: 'Евро 5',
        gear: 'Ръчна',
        category: 'Хечбек',
        mileage: 176000,
        color: 'Тъмно син',
        extras: {
            comfort: ['Безключово палене', 'Бордкомпютър', 'Ел. огледала'],
            others: ['Бартер', 'С регистрация', 'Сервизна книжка']
        },
    }, {
        price: 59990,
        currency: 'лв.',
        region: 'София',

        images: [
            'car6-1.jpg',
            'car6-2.jpg',
            'car6-3.jpg',
        ],


        brand: 'Mercedes-Benz',
        model: 'E 220',
        year: 2018,
        engine: 'Дизелов',
        power: 194,
        euroSt: 'Евро 6',
        gear: 'Автоматична',
        category: 'Седан',
        mileage: 187000,
        color: 'Черен',
        extras: {
            comfort: ['Бордкомпютър', 'Ел. огледала', 'Ел. стъкла', 'Bluetooth - handsfree система'],
            security: ['Аларма', 'Имобилайзер', 'Централно заключване'],
            others: ['4х4', 'Бартер', 'Сервизна книжка'],
        },
    },
    //
    {
        price: 5000,
        currency: 'лв.',
        region: 'София',

        images: [
            'car1-1.jpg',
            'car1-2.jpg',
            'car1-3.jpg',
        ],


        brand: 'Toyota',
        model: 'Yaris',
        year: 2009,
        engine: 'Бензинов',
        power: 69,
        euroSt: 'Евро 4',
        gear: 'Ръчна',
        category: 'Хечбек',
        mileage: 144000,
        color: 'Черен',
        extras: {
            comfort: ['Бордкомпютър', 'Ел. огледала', 'Ел. стъкла'],
        },
    },
    {
        price: 60000,
        currency: 'лв.',
        region: 'Русе',

        images: [
            'car2-1.jpg',
            'car2-2.jpg',
            'car2-3.jpg',
        ],


        brand: 'Mercedes-Benz',
        model: 'S 350',
        year: 2014,
        engine: 'Дизелов',
        power: 258,
        euroSt: 'Евро 4',
        gear: 'Автоматична',
        category: 'Седан',
        mileage: 199000,
        color: 'Хамелеон',
        extras: {
            others: ['Бартер'],
        },
    },
    {
        price: 9990,
        currency: 'лв.',
        region: 'Дупница',

        images: [
            'car3-1.jpg',
            'car3-2.jpg',
            'car3-3.jpg',
        ],


        brand: 'Citroen',
        model: 'C5',
        year: 2010,
        engine: 'Дизелов',
        power: 163,
        euroSt: 'Евро 5',
        gear: 'Автоматична',
        category: 'Седан',
        mileage: 168000,
        color: 'Тъмно сив',
        extras: {
            comfort: ['Bluetooth', 'DVD, TV', 'USB'],
            others: ['Лизинг', 'Нов внос', 'Сервизна книжка']
        },
    },
    {
        price: 28000,
        currency: 'USD',
        region: 'Пловдив',

        images: [
            'car4-1.jpg',
            'car4-2.jpg',
            'car4-3.jpg',
        ],

        brand: 'VW',
        model: 'Jetta',
        year: 2019,
        engine: 'Бензинов',
        power: 150,
        euroSt: '',
        gear: 'Автоматична',
        category: 'Седан',
        mileage: 35000,
        color: 'Син',
        extras: {
            comfort: ['Auto Start Stop function', 'Bluetooth', 'USB'],
            others: ['Бартер', '4x4', 'Лизинг']
        },
    },
    {
        price: 7000,
        currency: 'лв.',
        region: 'Бургас',

        images: [
            'car5-1.jpg',
            'car5-2.jpg',
            'car5-3.jpg',
        ],


        brand: 'BMW',
        model: '120',
        year: 2006,
        engine: 'Дизелов',
        power: 163,
        euroSt: 'Евро 5',
        gear: 'Ръчна',
        category: 'Хечбек',
        mileage: 176000,
        color: 'Тъмно син',
        extras: {
            comfort: ['Безключово палене', 'Бордкомпютър', 'Ел. огледала'],
            others: ['Бартер', 'С регистрация', 'Сервизна книжка']
        },
    }, {
        price: 59990,
        currency: 'лв.',
        region: 'София',

        images: [
            'car6-1.jpg',
            'car6-2.jpg',
            'car6-3.jpg',
        ],


        brand: 'Mercedes-Benz',
        model: 'E 220',
        year: 2018,
        engine: 'Дизелов',
        power: 194,
        euroSt: 'Евро 6',
        gear: 'Автоматична',
        category: 'Седан',
        mileage: 187000,
        color: 'Черен',
        extras: {
            comfort: ['Бордкомпютър', 'Ел. огледала', 'Ел. стъкла', 'Bluetooth - handsfree система'],
            security: ['Аларма', 'Имобилайзер', 'Централно заключване'],
            others: ['4х4', 'Бартер', 'Сервизна книжка'],
        },
    },
    {
        price: 5000,
        currency: 'лв.',
        region: 'София',

        images: [
            'car1-1.jpg',
            'car1-2.jpg',
            'car1-3.jpg',
        ],


        brand: 'Toyota',
        model: 'Yaris',
        year: 2009,
        engine: 'Бензинов',
        power: 69,
        euroSt: 'Евро 4',
        gear: 'Ръчна',
        category: 'Хечбек',
        mileage: 144000,
        color: 'Черен',
        extras: {
            comfort: ['Бордкомпютър', 'Ел. огледала', 'Ел. стъкла'],
        },
    },
    {
        price: 60000,
        currency: 'лв.',
        region: 'Русе',

        images: [
            'car2-1.jpg',
            'car2-2.jpg',
            'car2-3.jpg',
        ],


        brand: 'Mercedes-Benz',
        model: 'S 350',
        year: 2014,
        engine: 'Дизелов',
        power: 258,
        euroSt: 'Евро 4',
        gear: 'Автоматична',
        category: 'Седан',
        mileage: 199000,
        color: 'Хамелеон',
        extras: {
            others: ['Бартер'],
        },
    },
    {
        price: 9990,
        currency: 'лв.',
        region: 'Дупница',

        images: [
            'car3-1.jpg',
            'car3-2.jpg',
            'car3-3.jpg',
        ],


        brand: 'Citroen',
        model: 'C5',
        year: 2010,
        engine: 'Дизелов',
        power: 163,
        euroSt: 'Евро 5',
        gear: 'Автоматична',
        category: 'Седан',
        mileage: 168000,
        color: 'Тъмно сив',
        extras: {
            comfort: ['Bluetooth', 'DVD, TV', 'USB'],
            others: ['Лизинг', 'Нов внос', 'Сервизна книжка']
        },
    },
    {
        price: 28000,
        currency: 'USD',
        region: 'Пловдив',

        images: [
            'car4-1.jpg',
            'car4-2.jpg',
            'car4-3.jpg',
        ],

        brand: 'VW',
        model: 'Jetta',
        year: 2019,
        engine: 'Бензинов',
        power: 150,
        euroSt: '',
        gear: 'Автоматична',
        category: 'Седан',
        mileage: 35000,
        color: 'Син',
        extras: {
            comfort: ['Auto Start Stop function', 'Bluetooth', 'USB'],
            others: ['Бартер', '4x4', 'Лизинг']
        },
    },
    {
        price: 7000,
        currency: 'лв.',
        region: 'Бургас',

        images: [
            'car5-1.jpg',
            'car5-2.jpg',
            'car5-3.jpg',
        ],


        brand: 'BMW',
        model: '120',
        year: 2006,
        engine: 'Дизелов',
        power: 163,
        euroSt: 'Евро 5',
        gear: 'Ръчна',
        category: 'Хечбек',
        mileage: 176000,
        color: 'Тъмно син',
        extras: {
            comfort: ['Безключово палене', 'Бордкомпютър', 'Ел. огледала'],
            others: ['Бартер', 'С регистрация', 'Сервизна книжка']
        },
    }, {
        price: 59990,
        currency: 'лв.',
        region: 'София',

        images: [
            'car6-1.jpg',
            'car6-2.jpg',
            'car6-3.jpg',
        ],


        brand: 'Mercedes-Benz',
        model: 'E 220',
        year: 2018,
        engine: 'Дизелов',
        power: 194,
        euroSt: 'Евро 6',
        gear: 'Автоматична',
        category: 'Седан',
        mileage: 187000,
        color: 'Черен',
        extras: {
            comfort: ['Бордкомпютър', 'Ел. огледала', 'Ел. стъкла', 'Bluetooth - handsfree система'],
            security: ['Аларма', 'Имобилайзер', 'Централно заключване'],
            others: ['4х4', 'Бартер', 'Сервизна книжка'],
        },
    },
]

