import {addToLocalStorage, createDiv} from "./workWithLocalStorage";
import {sendRequest, getURL} from "./parsejson";


export function createCart() {
    if(localStorage["cart"]) {
        const arr = JSON.parse(localStorage["cart"])
        document.getElementById('basketDi').innerHTML = ""
        for (let key in arr) {
            createDiv(arr[key])
        }
    }else{
        document.getElementById('basketDi').innerHTML = ""
        let p = document.createElement('p')
        p.classList.add("nameofBike")
        p.classList.add("empty")
        p.innerHTML = "cart is empty"
        document.getElementById('basketDi').appendChild(p)
    }
}


export function mainSale(){
    JSON.stringify(sendRequest('GET', getURL())
        .then(data => {
            for(let key in data.bikes) {
                if (parseInt(data.bikes[key].id) === 8) {
                    addToLocalStorage(data.bikes[key])
                }
            }
        })
        .catch(err => console.log(err)))
}