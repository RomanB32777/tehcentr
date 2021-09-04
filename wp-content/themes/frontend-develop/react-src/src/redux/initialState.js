export const initialState = {
    loading: false,
    loadingType: {
        all: false,
        products: false,
        categories: false,
    },
    head: {
        info_head: "",
        info_description: "",
        info_description_footer: "",
    },
    contacts: {
        phones: [],
        email: "",
        location: {
            text: "",
            link: ""
        },
        domain: ""
    },
    menu: [
        {
            title: 'Главная',
            link: '#app'
        },
        {
            title: 'Инструменты',
            link: '#products'
        },
        {
            title: 'Доп. услуги',
            link: '#additions'
        },
        {
            title: 'Контакты',
            link: '#footer'
        },
    ],
    products: [],
    allProducts: 0,
    per_page: 0,
    categories: [],
    categoryProducts: [],
    categoryName: "",
    pagination: [],
    page: 1,
    searchQuery: "",
    allSearchProducts: 0,
    searchProducts: 0,
    additions: [],
    producers: [
        "husqvarna.png",
        "stihl.png",
        "makita.png",
        "interskol.png",
        "Bosch.png"
    ],
    adventages: [
        {
            title: "Профессиональные мастера",
            description: "Проводим ремонтные работы различной сложности",
            icon: "mechanic.png"
        },
        {
            title: "Удобная оплатa",
            description: "Принимаем наличный и безналичный расчет",
            icon: "ruble.png"
        },
        {
            title: "Доставка инструментов",
            description: "Возможна доставка арендованного оборудования по городу в дневное и вечернее время",
            icon: "delivery.png"
        },
        {
            title: "Дополнительные услуги",
            description: "Помимо ремонта и аренды инструментов, мы предагаем <a href='#additions'>доп. услуги</a>",
            icon: "tool2.png"
        },
    ],
    modal: {
        productID: 0,
        productTitle: '',
        productPrice: 0,
        productPriceList: [],
        productImg: null,
    },
    toasts: [],
}