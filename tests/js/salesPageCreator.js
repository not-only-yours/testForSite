import {sendRequest, getURL} from "./parsejson";

export function createPageOfSales() {
    document.getElementById('allMain').innerHTML = ""
    let div = document.createElement('div')
    div.classList.add('grids')

    JSON.stringify(sendRequest('GET', getURL())
        .then(data => {
            for (let key in data.sales) {
                //console.log(key)
                let gridElement = document.createElement('div')
                gridElement.classList.add('gridElement')
                div.appendChild(gridElement)
                let img = document.createElement('img')
                img.src = data.sales[key].url;
                let title = document.createElement('p')
                title.innerHTML = data.sales[key].title
                let button = document.createElement('BUTTON')
                gridElement.appendChild(img)
                gridElement.appendChild(title)
                gridElement.appendChild(button)
                button.innerHTML = "visit"
                button.id = data.sales[key].id
            }
        })
        .catch(err => console.log(err)))


    document.getElementById('allMain').appendChild(div)
    checkButtons()
}



export function checkButtons(){
        JSON.stringify(sendRequest('GET', getURL())
            .then(data => {
                for(let key in data.sales) {
                    //console.log(document.getElementById(data.bikes[key].id))
                    if(document.getElementById(data.sales[key].id))
                        document.getElementById(data.sales[key].id).addEventListener('click', function (){
                            location.hash = "offer/".concat(this.id)
                        })
                }
            })
            .catch(err => console.log(err)))
    }


export function createPage(aa){
    document.getElementById('allMain').innerHTML = ""
    let text = document.createElement('H1')
    text.innerHTML = aa.title

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
    img.src = aa.url
    img.style.width = "3000px"
    img.style.marginLeft = "50px"
    img.classList.add("mw-100")
    div3.appendChild(img)
    let h1 = document.createElement('h1')
    h1.innerHTML = "SOME WORDS ABOUT ACTION"
    let p = document.createElement('p')
    p.innerHTML = aa.info
    div4.appendChild(h1)
    div4.appendChild(p)
    let ul = document.createElement('ul')
    let li1 = document.createElement('li')
    let first1 = aa.date
    let second = "date: "
    li1.innerHTML = second.concat(first1)
    li1.style.fontSize = "20px"
    li1.style.textTransform = "uppercase"
    li1.style.fontWeight = "bold"
    li1.style.backgroundColor = "#e7dedb"
    li1.style.listStyleType = "none"
    li1.style.borderRadius = "10px"
    ul.appendChild(li1)
    div4.appendChild(ul)
    let btn = document.createElement("BUTTON");
    btn.classList.add('AddButton')
    let first = aa.id
    let two = "Cart"
    btn.id = first.concat(two)
    btn.innerHTML = "start shopping";
    btn.addEventListener('click', function (){
        location.hash = "catalog"
    })
    div4.appendChild(btn)
    //console.log(btn.id)
    document.getElementById('allMain').appendChild(text)
    document.getElementById('allMain').appendChild(div1)
}



export function create(aa){
    JSON.stringify(sendRequest('GET', getURL())
        .then(data => {
            for (let key in data.sales) {
                if(data.sales[key].id === aa){
                    console.log(data.sales[key])
                    createPage(data.sales[key])
                }
            }
        })
        .catch(err => console.log(err)))
}


