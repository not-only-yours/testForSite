import {getURL, sendRequest} from "./parsejson";
import {addToLocalStorage} from "./workWithLocalStorage";
let gridsCreated = false

let blockmainInner
export function getCopyMainBlock(){return  blockmainInner}
export function getMainBlockOfCatalog(){return document.getElementById('allMain')}
export function getGridsCreated(){return gridsCreated}
export function setGridsCreated(aa){gridsCreated = aa}

export function setCopyMainBlock(aa){blockmainInner = aa}
export function createCatalog(){
    let catalog = document.createElement('div')
    catalog.classList.add('catalog')
    let text = document.createElement('h1')
    text.innerHTML = "catalog"
    text.style.color = "black"
    catalog.appendChild(text)
    let ul = document.createElement('ul')
    ul.classList.add('footerMenu')
    catalog.appendChild(ul)
    JSON.stringify(sendRequest('GET', getURL())
        .then(data => {
            for (let key in data.productsCategories) {
                //console.log(data.productsCategories[key].name)
                let li = document.createElement('li')
                //console.log(data.productsCategories[key].id)
                li.id = data.productsCategories[key].url
                li.innerHTML = data.productsCategories[key].name
                ul.appendChild(li)
            }
        })
        .catch(err => console.log(err)))


    getMainBlockOfCatalog().appendChild(catalog)
}

//create all grids
export function createGrids(){
    let div = document.createElement('div')
    div.classList.add('Type')
    JSON.stringify(sendRequest('GET', getURL())
        .then(data => {
    for(let key in data.bikes){
        let divv = document.createElement('div')
        divv.classList.add('div1')

        let img = document.createElement('img')
        img.style.width = "100%"
        img.src = data.bikes[key].images
        divv.appendChild(img)

        let p = document.createElement('p')
        p.innerHTML = data.bikes[key].productName
        divv.appendChild(p)



        let btn = document.createElement("BUTTON");
        btn.classList.add('AddButton')
        btn.id = data.bikes[key].id
        btn.innerHTML = "check";
        divv.appendChild(btn)



        div.appendChild(divv)

        getMainBlockOfCatalog().appendChild(div)
    }
        })
        .catch(err => console.log(err)))

}


//grid with parsed by catalog id
export function createGridsContent(elem){
    let div = document.createElement('div')
    div.classList.add('Type')
    JSON.stringify(sendRequest('GET', getURL())
        .then(data => {
            for(let key in data.bikes){
                //console.log(data.bikes[key].categoryID)
                //console.log(elem)
                if(data.bikes[key].categoryID === elem) {
                    let divv = document.createElement('div')
                    divv.classList.add('div1')

                    let img = document.createElement('img')
                    img.style.width = "100%"
                    img.src = data.bikes[key].images
                    divv.appendChild(img)

                    let p = document.createElement('p')
                    p.innerHTML = data.bikes[key].productName
                    divv.appendChild(p)


                    let btn = document.createElement("BUTTON");
                    btn.classList.add('AddButton')
                    btn.id = data.bikes[key].id
                    btn.innerHTML = "check";
                    divv.appendChild(btn)


                    div.appendChild(divv)
                }
            }
            let text = document.createElement('h1')
                if(!document.getElementById("sport")) {
                    text.innerHTML = "suggested"
                    getMainBlockOfCatalog().appendChild(text)
                    text.style.marginTop = "-50px"
                    text.style.backgroundColor = "green"
                }
            getMainBlockOfCatalog().appendChild(div)
        })
        .catch(err => console.log(err)))

}




//create catalog
export function createAllPageCatalog(){
    if(getGridsCreated() === false){
        getMainBlockOfCatalog().innerHTML = ""
        createCatalog()
        createGrids()
    }
}

//show main page
export function createMain(){
        document.getElementById('allMain').innerHTML = ''
        document.getElementById('allMain').innerHTML = `<div class="main" id="allMain" data-value="main">

    <div class="infoBlock" style="background-image: url(HTML/css/images/main/bike.jpg);">
        <p class="textofInfoBox">What a beautiful bike </p>
        <p class="textofInfoBox">timeless, atmospheric</p>
        <p class="textofInfoBox" id="last">&amp; uncredible bikes!</p>
        <div class="photosofInfoBlock">
            <img class="photosofInfoBlockImage" id="firstPhoto" src="css/images/main/left.jpg" width="29%" alt="mountainBike">
            <img class="photosofInfoBlockImage" id="centerPhotoofInfoBlock" src="css/images/main/center.jpg" width="14.5%" alt="roadBike">
            <img class="photosofInfoBlockImage" id="lastPhoto" src="css/images/main/right.jpg" width="29%" alt="forestBike">
        </div>
    </div>
<div style="background-color: green; margin: 0; padding:10px 10px">
    <h1 style="background-color: transparent">bestseller</h1>
</div>
    <div class="sales">
        <img src="../HTML/images/main/salesBike.png" width="40%" alt="">
        <div class="salesInfo">
            <p class="headSales">Bicycle RetroSyperb Vii #1</p>
            <p class="h2Sales">by Rodriguez Else</p>
            <p class="prise">299.99$</p>
            <button class="saleButton" id="sale">Add to Shopping bag</button>
        </div>
    </div>
    <div class="scroll">

    </div>
    <div class="browseShop" style="background-image: url('HTML/css/images/main/shop.png');">
        <button class="browseShopButton" id="browseShop" >browse shop</button>
    </div>

    <h1>everybody can join us</h1>

   
    </div>


</div>`
}


//Click button at grid
export function addClickeventtoGridButtons(){
    JSON.stringify(sendRequest('GET', getURL())
        .then(data => {
            for(let key in data.bikes) {
                //console.log(document.getElementById(data.bikes[key].id))
                if(document.getElementById(data.bikes[key].id))
                document.getElementById(data.bikes[key].id).addEventListener('click', function (){
                    let aa = "product/"
                    location.hash = aa.concat(this.id)
                })
            }
        })
        .catch(err => console.log(err)))
}


//click Event To li
export function addClickeventtoCatalogLi(){
    JSON.stringify(sendRequest('GET', getURL())
        .then(data => {
            for(let key in data.productsCategories) {
                if(document.getElementById(data.productsCategories[key].url))
                document.getElementById(data.productsCategories[key].url).addEventListener('click', function (){
                    let fir = "catalog/"
                    location.hash = fir.concat(this.id)
                })
            }
        })
        .catch(err => console.log(err)))
}

//content of element
export function contentofElement(ai){
    JSON.stringify(sendRequest('GET', getURL())
        .then(data => {
            for(let key in data.bikes) {
            if(ai === data.bikes[key].id){

             infoBox(data.bikes[key].id)
                createInfobox(data.bikes[key])
            }
            }
        })
        .catch(err => console.log(err)))
}


export function createInfobox(aa){
    let text = document.createElement('H1')
    text.innerHTML = aa.productName

    let div1 = document.createElement('div')
    div1.classList.add("wrapper")
    let div2 = document.createElement('div')
    div2.classList.add("main__about")
    div1.appendChild(div2)
    let div3 = document.createElement('div')
    let div4 = document.createElement('div')
    div3.classList.add("about__left")
    div4.classList.add("about__right")
    div2.appendChild(div3)
    div2.appendChild(div4)
    div4.style.marginTop = "-80px"
    let img = document.createElement('img')
    img.src = aa.images
    img.style.width = "3000px"
    img.style.marginLeft = "50px"
    img.classList.add("mw-100")
    div3.appendChild(img)
    let h1 = document.createElement('h1')
    h1.innerHTML = "SOME WORDS ABOUT BIKE"
    let p = document.createElement('p')
    p.innerHTML = aa.info
    div4.appendChild(h1)
    div4.appendChild(p)
    let ul = document.createElement('ul')
    let li1 = document.createElement('li')
    let li2 = document.createElement('li')
    let first1 = aa.prise
    let second = "price: "
    li1.innerHTML = second.concat(first1)
    li1.style.fontSize = "50px"
    li1.style.textTransform = "uppercase"
    li1.style.fontWeight = "bold"
    li1.style.backgroundColor = "#e7dedb"
    li1.style.listStyleType = "none"
    li1.style.borderRadius = "10px"
    first1 = aa.categoryID
    second = "Category: "
    li2.innerHTML = second.concat(first1)
    li2.style.listStyleType = "none"
    li2.style.textTransform = "uppercase"
    li2.style.fontWeight = "bold"
    ul.appendChild(li1)
    ul.appendChild(li2)
    div4.appendChild(ul)
    let btn = document.createElement("BUTTON");
    btn.classList.add('AddButton')
    let first = aa.id
    let two = "Cart"
    btn.id = first.concat(two)
    btn.innerHTML = "to cart";
    btn.addEventListener('click', function (){
        addToLocalStorage(aa);
    })
    div4.appendChild(btn)
    //console.log(btn.id)
    document.getElementById('allMain').appendChild(text)
    document.getElementById('allMain').appendChild(div1)
}





//content of li
export function contentofBlock(ai){
    getMainBlockOfCatalog().innerHTML = ""
    createCatalog()
    addClickeventtoCatalogLi()


    JSON.stringify(sendRequest('GET', getURL())
        .then(data => {
            for(let key in data.productsCategories) {
                if(ai === data.productsCategories[key].url){
                    let text = document.createElement('H1')
                    text.style.backgroundColor = "#b7a49e"
                    text.style.width = "98.3%"
                    text.innerHTML = data.productsCategories[key].name
                    document.getElementById('allMain').appendChild(text)
                    let p = document.createElement('p')
                    p.innerHTML = data.productsCategories[key].info
                    p.style.paddingLeft = "40px"
                    p.style.paddingight = "40px"
                    p.style.paddingTop = "20px"
                    p.style.paddingBottom = "20px"
                    p.style.fontSize = "20px"
                    p.style.borderRadius = "10px"
                    p.style.backgroundColor = "#cbcbcb"
                    //TODO write info about
                    document.getElementById('allMain').appendChild(p)
                }
            }
            })
        .catch(err => console.log(err)))


    createGridsContent(ai)
    addClickeventtoGridButtons()
}




//content of element
export function infoBox(ei){
    getMainBlockOfCatalog().innerHTML = ""
    //console.log("info")
    JSON.stringify(sendRequest('GET', getURL())
        .then(data => {
            for(let key in data.bikes) {
                if(ei === data.bikes[key].id){
                    console.log(data.bikes[key].id)
                    createGridsContent(data.bikes[key].categoryID)
                    addClickeventtoGridButtons()
                }
            }
        })
        .catch(err => console.log(err)))
}


