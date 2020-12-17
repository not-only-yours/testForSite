import {addToLocalStorage, createDiv} from "../js/workWithLocalStorage";
import fetch from 'isomorphic-fetch';
import {hideSpinner, showSpinner} from "../js/Loader";
import {createCatalog, createInfobox} from "../js/catalogCreator";
import {catalogCreator, validateEmail} from "../js/createOrder";
import {getURL, sendRequest} from "../js/parsejson";
import {createPage} from "../js/salesPageCreator";




describe('createCatalog', () => {
    beforeEach(() => document.body.innerHTML = '<div id ="basket"></div><div class="main" id="allMain" data-value="main" style="visibility: visible;"><div id="spinner"></div>><div class="catalog"><h1 style="color: #000000;">catalog</h1><ul class="footerMenu"><li id="sport">Sport</li><li id="bmx">bmx</li><li id="mtb">mountain bike</li><li id="vintage">vintage</li></ul></div><div class="Type"><div class="div1"><img src="../HTML/css/images/catalog/shosseBike/Orbea%20Avant%20H60%202019%2053%20Black-Red-White%20(J10053H3).jpg" style="width: 100%;"><p>Orbea Avant H30</p><button class="AddButton" id="0">check</button></div><div class="div1"><img src="../HTML/css/images/catalog/shosseBike/Orbea%20Avant%20H30%202020%2053%20Anthracite-Black%20(K10353G9).jpg" style="width: 100%;"><p>Orbea Avant H60</p><button class="AddButton" id="1">check</button></div><div class="div1"><img src="../HTML/css/images/catalog/shosseBike/Orbea%20Terra%20H30-D%201X%20M%202020%20Green%20(K10955BE).jpg" style="width: 100%;"><p>Orbea Terra H30-D</p><button class="AddButton" id="2">check</button></div><div class="div1"><img src="../HTML/css/images/catalog/shosseBike/Pride%20RocX%208.2%2028.jpg" style="width: 100%;"><p>Pride RocX</p><button class="AddButton" id="3">check</button></div><div class="div1"><img src="../HTML/css/images/catalog/bmx/BMX%20Eastern%20Cobra%2020%20Mint%202020.jpg.png" style="width: 100%;"><p>Eastern Cobra</p><button class="AddButton" id="4">check</button></div><div class="div1"><img src="../HTML/css/images/catalog/bmx/BMX%20Eastern%20Javelin%2020.5%20Black%202020.jpg" style="width: 100%;"><p>Eastern Cobra 20</p><button class="AddButton" id="5">check</button></div><div class="div1"><img src="../HTML/css/images/catalog/bmx/BMX%20GT%20AIR%2020%20Raw%202020.jpg" style="width: 100%;"><p>GT AIR 20</p><button class="AddButton" id="6">check</button></div><div class="div1"><img src="../HTML/css/images/catalog/bmx/Stolen%20Casino%2020.25%2020%202020%20Cotton%20Candy%20Pink.jpg" style="width: 100%;"><p>Stolen Casino</p><button class="AddButton" id="7">check</button></div><div class="div1"><img src="../HTML/css/images/main/salesBike.png" style="width: 100%;"><p>Classic #1</p><button class="AddButton" id="8">check</button></div><div class="div1"><img src="../HTML/css/images/vintage/classic2.png" style="width: 100%;"><p>Classic #2</p><button class="AddButton" id="9">check</button></div><div class="div1"><img src="../HTML/css/images/vintage/classic3.png" style="width: 100%;"><p>Classic #3</p><button class="AddButton" id="10">check</button></div><div class="div1"><img src="../HTML/css/images/vintage/classic4.png" style="width: 100%;"><p>Classic4</p><button class="AddButton" id="11">check</button></div><div class="div1"><img src="../HTML/css/images/mtb/mtb1.jpg" style="width: 100%;"><p>mountain bike #1</p><button class="AddButton" id="12">check</button></div><div class="div1"><img src="../HTML/css/images/mtb/mtb2.jpg" style="width: 100%;"><p>mountain bike #2</p><button class="AddButton" id="13">check</button></div><div class="div1"><img src="../HTML/css/images/mtb/mtb3.jpg" style="width: 100%;"><p>mountain bike #3</p><button class="AddButton" id="14">check</button></div><div class="div1"><img src="../HTML/css/images/mtb/mtb4.jpg" style="width: 100%;"><p>mountain bike #4</p><button class="AddButton" id="15">check</button></div></div></div>')

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


    it('loader', () => {
        showSpinner()
        hideSpinner()
    })

    it('create div', () => {
        document.body.innerHTML = `<div id="basketDi"></div>`

        createDiv(aa)
    })

    it('create box', () => {
        document.body.innerHTML = `<div id="allMain"></div>`

        createInfobox(aa)
    })

    it('validate email', () => {
        validateEmail('ddd.ddd@aa.com')
    })

    it('create catalog', () => {
        catalogCreator(aa)
    })


    it('send reqest', () => {
        sendRequest("GET", getURL())
    })


    it('create page', () => {
        createPage(bb)
    })

    it('add to local storage', () => {
        document.body.innerHTML = `<div id="total"></div>`
        document.body.innerHTML += `<div id="basketDi"></div>`
        addToLocalStorage(aa)
    })

})