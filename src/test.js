import { addToLocalStorage, createDiv, funcDelete, knowPrise } from '../js/workWithLocalStorage';
import fetchMock from 'jest-fetch-mock';
import {hideSpinner, showSpinner} from "../js/Loader";
import "babel-polyfill"
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import {
    addClickeventtoCatalogLi, addClickeventtoGridButtons,
    contentofBlock, contentofElement, createAllPageCatalog,
    createCatalog, createGrids,
    createInfobox, createMain,
    getCopyMainBlock,
    getGridsCreated,
    getMainBlockOfCatalog, setCopyMainBlock, setGridsCreated
} from '../js/catalogCreator';
import {
    catalogCreator,
    checkOrderStatus,
    createOrder,
    createVarOfOrder,
    creator,
    validateEmail
} from '../js/createOrder';
import {getURL, sendPOST, sendRequest} from "../js/parsejson";
import {checkButtons, createPage, createPageOfSales, create} from "../js/salesPageCreator";
import { beforeAll, beforeEach, describe, it, jest } from '@jest/globals';
import {browseShop, routing} from "../js/routing";
import { createCart, mainSale } from '../js/createCart';




describe('project', () => {
    beforeAll(() => {
        require("whatwg-fetch")

        jest.spyOn(window, "fetch").mockImplementation(() => {
            const fetchResponse = {
                ok: true,
                json: () => Promise.resolve({
                    "bikes": [
                        {
                            "id": "0",
                            "url": "Orbea_Avant_H30",
                            "productName": "Orbea Avant H30",
                            "info": "The Spanish company ORBEA has been manufacturing bicycles since 1930 and is the leader in the Spanish market to this day. Today, Orbea is at the top echelon of the world's top bicycle brands by using the latest frame technology.\nCountry of registration of the brand - Spain\nCountry of origin - Spain / Portugal\nOrbea Official Frame Warranty - Lifetime\n",
                            "prise": "199",
                            "images": "css/images/catalog/shosseBike/Orbea%20Avant%20H60%202019%2053%20Black-Red-White%20(J10053H3).jpg",
                            "categoryID": "sport",
                            "pcs": "1"
                        }
                    ],
                    "productsCategories": [
                        {
                            "id": "1",
                            "url": "sport",
                            "name": "Sport",
                            "info": "A sportbike, or sports bike, is a motorcycle optimized for speed, acceleration, braking, and cornering on paved roads, typically at the expense of comfort and fuel economy by comparison with other motorcycles. Soichiro Honda wrote in the owner's manual of the 1959 Honda CB92 Benly Super Sport that"
                        }
                    ],
                    "sales": [
                        {
                            "id": "0",
                            "url": "css/images/sales/action.jpg",
                            "title": "extra prise for Classic #1",
                            "info": "you'll get the best classic bike for lowest prise",
                            "date": "13.11.2020 - 15.12.2020"
                        }
                    ]
                })
            }
            return Promise.resolve(fetchResponse)
        })
    })
    beforeEach(() => { document.body.innerHTML = '<div id ="basket"></div><div class="main" id="allMain" data-value="main" style="visibility: visible;"><div id="spinner"></div>><div class="catalog"><h1 style="color: #000000;">catalog</h1><ul class="footerMenu"><li id="sport">Sport</li><li id="bmx">bmx</li><li id="mtb">mountain bike</li><li id="vintage">vintage</li></ul></div><div class="Type"><div class="div1"><img src="../HTML/css/images/catalog/shosseBike/Orbea%20Avant%20H60%202019%2053%20Black-Red-White%20(J10053H3).jpg" style="width: 100%;"><p>Orbea Avant H30</p><button class="AddButton" id="0">check</button></div><div class="div1"><img src="../HTML/css/images/catalog/shosseBike/Orbea%20Avant%20H30%202020%2053%20Anthracite-Black%20(K10353G9).jpg" style="width: 100%;"><p>Orbea Avant H60</p><button class="AddButton" id="1">check</button></div><div class="div1"><img src="../HTML/css/images/catalog/shosseBike/Orbea%20Terra%20H30-D%201X%20M%202020%20Green%20(K10955BE).jpg" style="width: 100%;"><p>Orbea Terra H30-D</p><button class="AddButton" id="2">check</button></div><div class="div1"><img src="../HTML/css/images/catalog/shosseBike/Pride%20RocX%208.2%2028.jpg" style="width: 100%;"><p>Pride RocX</p><button class="AddButton" id="3">check</button></div><div class="div1"><img src="../HTML/css/images/catalog/bmx/BMX%20Eastern%20Cobra%2020%20Mint%202020.jpg.png" style="width: 100%;"><p>Eastern Cobra</p><button class="AddButton" id="4">check</button></div><div class="div1"><img src="../HTML/css/images/catalog/bmx/BMX%20Eastern%20Javelin%2020.5%20Black%202020.jpg" style="width: 100%;"><p>Eastern Cobra 20</p><button class="AddButton" id="5">check</button></div><div class="div1"><img src="../HTML/css/images/catalog/bmx/BMX%20GT%20AIR%2020%20Raw%202020.jpg" style="width: 100%;"><p>GT AIR 20</p><button class="AddButton" id="6">check</button></div><div class="div1"><img src="../HTML/css/images/catalog/bmx/Stolen%20Casino%2020.25%2020%202020%20Cotton%20Candy%20Pink.jpg" style="width: 100%;"><p>Stolen Casino</p><button class="AddButton" id="7">check</button></div><div class="div1"><img src="../HTML/css/images/main/salesBike.png" style="width: 100%;"><p>Classic #1</p><button class="AddButton" id="8">check</button></div><div class="div1"><img src="../HTML/css/images/vintage/classic2.png" style="width: 100%;"><p>Classic #2</p><button class="AddButton" id="9">check</button></div><div class="div1"><img src="../HTML/css/images/vintage/classic3.png" style="width: 100%;"><p>Classic #3</p><button class="AddButton" id="10">check</button></div><div class="div1"><img src="../HTML/css/images/vintage/classic4.png" style="width: 100%;"><p>Classic4</p><button class="AddButton" id="11">check</button></div><div class="div1"><img src="../HTML/css/images/mtb/mtb1.jpg" style="width: 100%;"><p>mountain bike #1</p><button class="AddButton" id="12">check</button></div><div class="div1"><img src="../HTML/css/images/mtb/mtb2.jpg" style="width: 100%;"><p>mountain bike #2</p><button class="AddButton" id="13">check</button></div><div class="div1"><img src="../HTML/css/images/mtb/mtb3.jpg" style="width: 100%;"><p>mountain bike #3</p><button class="AddButton" id="14">check</button></div><div class="div1"><img src="../HTML/css/images/mtb/mtb4.jpg" style="width: 100%;"><p>mountain bike #4</p><button class="AddButton" id="15">check</button></div></div></div>'})



    const aa =  {
        "id": "0",
        "url": "Orbea_Avant_H30",
        "productName": "Orbea Avant H30",
        "info": "The Spanish company ORBEA has been manufacturing bicycles since 1930 and is the leader in the Spanish market to this day. Today, Orbea is at the top echelon of the world's top bicycle brands by using the latest frame technology.\nCountry of registration of the brand - Spain\nCountry of origin - Spain / Portugal\nOrbea Official Frame Warranty - Lifetime\n",
        "prise": "199",
        "images": "css/images/catalog/shosseBike/Orbea%20Avant%20H60%202019%2053%20Black-Red-White%20(J10053H3).jpg",
        "categoryID": "sport",
        "pcs": "1"
    }

    const bb = {
        "id": "0",
        "url": "css/images/sales/action.jpg",
        "title": "extra prise for Classic #1",
        "info": "you'll get the best classic bike for lowest prise",
        "date": "13.11.2020 - 15.12.2020"
    }


    it('loader',  async() => {

        showSpinner()
        hideSpinner()
         JSON.stringify(await sendRequest('GET', getURL()));
         JSON.stringify(await sendRequest('GET', getURL()));
    })

    it('create div', () => {
        document.body.innerHTML = `<div id="basketDi"></div>`
        createDiv(aa)

    })

    it('create box', () => {
        document.body.innerHTML = `<div id="allMain"></div>`
        document.body.innerHTML += `<div id="total"></div>`
        document.body.innerHTML += `<div id="basketDi"></div>`
        document.body.innerHTML += `<div id="spinner"></div>`
        addToLocalStorage(aa)
         createInfobox(aa)
        sendRequest('GET', getURL())
    })

    it('validate email', () => {
        validateEmail('ddd.ddd@aa.com')
    })

    it('create catalog',  () => {
        catalogCreator(aa)
         sendRequest('GET', getURL())
    })


    it('send reqest',  () => {
        sendRequest("GET", getURL())
        sendRequest("GET", 'https://jsonplaceholder.typicode.com/users')

        getURL()
        showSpinner()
        hideSpinner()
        sendPOST("POST", getURL())
         sendPOST("POST", 'https://jsonplaceholder.typicode.com/users')
        JSON.stringify(sendRequest('GET', 'https://getUR.com')
            .then(data => {const  a = data})
            .catch(err => console.log(err)))
    })


    it('create page', () => {
        document.body.innerHTML = `<div id="allMain"></div><div id="spinner"></div>`
        createPage(bb)
        create(bb)
        sendRequest('GET', getURL())
    })




    it('test geter and seter', () => {
        document.body.innerHTML += `<div id="spinner"></div>`
        browseShop()
        getCopyMainBlock()
        getMainBlockOfCatalog()
        getGridsCreated()
        setGridsCreated("aa")
        setCopyMainBlock("aa")
        getURL()
        sendRequest('GET', getURL())
        validateEmail('dada@da.da')
        sendPOST("POST", getURL())
    })

    it('creates page of sales', () => {
        document.body.innerHTML = `<div id="allMain"></div><div id="spinner"></div>`
        createPageOfSales()
        checkButtons()
        sendRequest('GET', getURL())
        checkButtons()
        createPage(bb)
        create(bb)
        getURL()
    })


    it('create catalog', () => {
        document.body.innerHTML += `<div id="spinner"></div>`
        sendRequest('GET', getURL())
        createCatalog()
        createGrids()
        getURL()
        getMainBlockOfCatalog()
        sendRequest('GET', getURL())
    })

    it('create cart', () => {
        document.body.innerHTML += `<div id="basketDi"></div></div><div id="spinner"></div><div id="total"></div>`
        createCart()
        mainSale()
        createDiv(aa)
        getURL()
        addToLocalStorage(aa)
        createDiv(aa)
        funcDelete('cart1')
        createDiv(aa)
        knowPrise()
        sendRequest('GET', getURL())
        sendPOST("POST", getURL())
    })


    it('create order', () => {
        document.body.innerHTML += `<div id="basketDi"></div></div><div id="spinner"></div>`
        createOrder()
        if (localStorage["cart"])
        creator()
        catalogCreator(aa)
        validateEmail('dada@da.da')
        createVarOfOrder()
        checkOrderStatus()
        sendRequest('GET', getURL())
        sendPOST("POST", getURL())
    })

    it('routs', async () => {
        document.body.innerHTML += `<div id="basketDi"></div></div><div id="spinner"></div>`
        routing()
        createPageOfSales()
        contentofBlock('bmx')
        contentofBlock('sport')
        contentofBlock('vintage')
        contentofBlock('mtb')
        contentofElement(1)
        create(0)
        createAllPageCatalog()
        addClickeventtoCatalogLi()
        addClickeventtoGridButtons()
        createCart()
        createOrder()
        createVarOfOrder();
        checkOrderStatus();
        createCart()
        createMain();
        hideSpinner()
        browseShop()
        await sendRequest('GET', getURL())
        getURL()
        await sendPOST("POST", getURL())
    })

    it('routing with different hash', () => {
        document.body.innerHTML += `<div id="basketDi"></div></div><div id="spinner"></div><div id = 'cart'></div> <div id = 'menu'></div>`
        location.hash = 'catalog/basket'
        routing()
        location.hash = 'catalog'
        routing()
        location.hash = 'catalog/mtb'
        routing()
        location.hash = 'catalog/vintage'
        routing()
        location.hash = 'catalog/bmx'
        routing()
        location.hash = 'catalog/sport'
        routing()
        location.hash = 'product/2'
        routing()
        location.hash = 'offers'
        routing()
        location.hash = 'offer/1'
        routing()
        location.hash = 'createOrder'
        routing()
        location.hash = 'rtghnbr'
        routing()
    })


    it('click on viber', () => {
        document.body.innerHTML += `<div id="basketDi"></div></div><div id="spinner"></div>`
        createOrder()



        document.getElementById('viber').click()
    })
})
