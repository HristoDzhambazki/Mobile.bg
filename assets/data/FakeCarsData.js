let arrayData = [
    {
        state: 'stara',
        price: 5000,
        currency: 'leva',
        region: 'Sofia',

        images: [
            'car1-1.jpg',
            'car1-2.jpg',
            'car1-3.jpg',
        ],


        brand: 'Toyota',
        model: 'Yaris',
        year: 2009,
        engine: 'benzinov',
        power: 69,
        euroSt: 'Euro 4',
        gear: 'Rychna',
        category: 'Hechbek',
        mileage: 144000,
        color: 'black',
        others: {
            comfort: ['bordkompiuter', 'el.ogledala', 'el.stykla'],
        },

        description: ' Нов внос ! Автомобил проверен в наш собствен сервиз и се продава с 6 МЕСЕЦА ГАРАНЦИЯ',

        seller: 'Variant M',
        mobile: 0897937799,
        email: 'variantM@abv.bg'
    },
    {
        state: 'stara',
        price: 60000,
        currency: 'leva',
        region: 'Ruse',

        images: [
            'car2-1.jpg',
            'car2-2.jpg',
            'car2-3.jpg',
        ],


        brand: 'Mercedes-Benz',
        model: 'S 350',
        year: 2014,
        engine: 'dizelov',
        power: 258,
        euroSt: 'Euro 4',
        gear: 'avtomatichna',
        category: 'sedan',
        mileage: 199000,
        color: 'hameleon',
        others: {
            other: ['barter'],
        },

        description: '=== S63 AMG FACELIFT === === LONG БИЗНЕС КЛАС === === Внос ГЕРМАНИЯ ===',

        seller: '',
        mobile: 0886553555,
        email: ''
    },
    {
        state: 'stara',
        price: 60000,
        currency: 'leva',
        region: 'Ruse',

        images: [
            'car3-1.jpg',
            'car3-2.jpg',
            'car3-3.jpg',
        ],


        brand: 'Mercedes-Benz',
        model: 'S 350',
        year: 2014,
        engine: 'dizelov',
        power: 258,
        euroSt: 'Euro 4',
        gear: 'avtomatichna',
        category: 'sedan',
        mileage: 199000,
        color: 'hameleon',
        others: {
            other: ['barter'],
        },

        description: '=== S63 AMG FACELIFT === === LONG БИЗНЕС КЛАС === === Внос ГЕРМАНИЯ ===',

        seller: '',
        mobile: 0886553555,
        email: ''
    },
    {
        state: 'stara',
        price: 9990,
        currency: 'leva',
        region: 'Dupnica',

        images: [
            'car4-1.jpg',
            'car4-2.jpg',
            'car4-3.jpg',
        ],


        brand: 'Citroen',
        model: 'C5',
        year: 2010,
        engine: 'dizelov',
        power: 163,
        euroSt: 'Euro 5',
        gear: 'avtomatichna',
        category: 'sedan',
        mileage: 168000,
        color: 'tymno siv',
        others: {
            comfort: ['Bluetooth', 'DVD', 'USB'],
            other: ['lizing', 'nov vnos', 'servizna knijka']
        },

        description: 'Всичко по автомобила работи. Отлична визия. Безупречен технически.',

        seller: 'RUNA LTD',
        mobile: 0898705582,
        email: 'runa@abv.bg'
    },
    {
        state: 'stara',
        price: 28000,
        currency: 'leva',
        region: 'Plovdiv',

        images: [
            'car5-1.jpg',
            'car5-2.jpg',
            'car5-3.jpg',
        ],


        brand: 'VW',
        model: 'Jetta',
        year: 2019,
        engine: 'benzinov',
        power: 150,
        euroSt: '',
        gear: 'avtomatichna',
        category: 'sedan',
        mileage: 35000,
        color: 'sin',
        others: {
            comfort: ['Auto Start Stop function', 'Bluetooth ', 'USB'],
            other: ['Бартер', '4x4', 'Лизинг']
        },

        description: 'Черен интериорен салон',

        seller: 'AutoHaus.BG',
        mobile: 0884777045,
        email: 'auto@abv.bg'
    },
    {
        state: 'stara',
        price: 7000,
        currency: 'leva',
        region: 'Burgas',

        images: [
            'car6-1.jpg',
            'car6-2.jpg',
            'car6-3.jpg',
        ],


        brand: 'BMW',
        model: '120',
        year: 2006,
        engine: 'dizelov',
        power: 163,
        euroSt: 'Euro 5',
        gear: 'rychna',
        category: 'hechbek',
        mileage: 176000,
        color: 'tymno sin',
        others: {
            comfort: ['Безключово палене', 'Бордкомпютър ', 'Ел. Огледала'],
            other: ['Бартер', 'С регистрация', 'Сервизна книжка']
        },

        description: 'Колата е в перфектно састояние обслужена много гледана и подържена приемам бартери',

        seller: '',
        mobile: 0876006672,
        email: ''
    }
]

let newsDescriptions = [
    {
        text: "Някои предимства на барабанните спирачки",
        image: "7randomArticle.jpg",
        link: "https://fakti.bg/technozone/558461-nakoi-predimstva-na-barabannite-spirachki?utm_source=mobilebg&utm_medium=link&utm_campaign=firstpage"
    },
    {
        text: "Камелия призна за най-дръзките си прояви",
        image: "4randomArticle.jpg",
        link: "https://fakti.bg/life/558504-kamelia-prizna-za-nai-drazkite-si-proavi?utm_source=mobilebg&utm_medium=link&utm_campaign=firstpage"
    },
    {
        text: "Трудното ставане сутрин е симптом на... ",
        image: "3randomArticle.jpg",
        link: "https://fakti.bg/life/558492-trudnoto-stavane-sutrin-e-simptom-na-?utm_source=mobilebg&utm_medium=link&utm_campaign=firstpage"
    },
    {
        text: "Доц. Мангъров: Непроученото за ваксините са ефектите след 5 години",
        image: "1randomArticle.jpg",
        link: "https://fakti.bg/bulgaria/558541-doc-mangarov-neprouchenoto-za-vaksinite-sa-efektite-sled-5-godini-video?utm_source=mobilebg&utm_medium=link&utm_campaign=firstpage"
    },
    {
        text: "7 причини да ядем банани всеки ден",
        image: "8randomArticle.jpg",
        link: "https://fakti.bg/life/558510-7-prichini-da-adem-banani-vseki-den?utm_source=mobilebg&utm_medium=link&utm_campaign=firstpage"
    },
    {
        text: "Тези храни разреждат кръвта",
        image: "6randomArticle.jpg",
        link: "https://fakti.bg/life/558507-tezi-hrani-razrejdat-kravta?utm_source=mobilebg&utm_medium=link&utm_campaign=firstpage"
    },
    {
        text: "Бивша депутатка изпищя от тлъста сметка в такси",
        image: "2randomArticle.jpg",
        link: "https://fakti.bg/life/558451-bivsha-deputatka-izpishta-ot-tlasta-smetka-v-taksi-snimki?utm_source=mobilebg&utm_medium=link&utm_campaign=firstpage"
    },
    {
        text: "Проф. Илчев за Караянчева: Боже, какви нищожества",
        image: "0randomArticle.jpg",
        link: "https://fakti.bg/bulgaria/558508-prof-ilchev-za-karaancheva-boje-kakvi-nishtojestva-video"
    },
    {
        text: "САЩ ще води диалог с Китай от позиция на силата",
        image: "5randomArticle.jpg",
        link: "https://fakti.bg/world/558557--sasht-shte-vodi-dialog-s-kitai-ot-pozicia-na-silata"
    },
];