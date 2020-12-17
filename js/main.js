

import {createCart, mainSale} from "./createCart";


document.getElementById("basket").addEventListener('click', function (){
    if(location.hash.slice(-7) === '/basket') {
        location.hash = location.hash.substring(0, location.hash.length - 7)
        document.getElementById("basketDi").style.display = "none";
        document.getElementById("cart").style.display = "none";
        document.getElementById("menu").style.display = "block";
    }
    else {
        location.hash += '/basket'
    }
})



document.getElementById("bikes").addEventListener('click', function (){
    location.hash = 'catalog';
    //routing()
})

document.getElementById("main").addEventListener('click',function (){
    location.hash = '';

    document.getElementById('basket').style.display = "block"
    createCart()
    //routing()
})


document.getElementById('offers').addEventListener('click', function () {
    location.hash = 'offers'
    //routing()
})



window.addEventListener('load',function () {
    location.hash = '';
    createCart()
    //routing()
})


document.getElementById("sale").addEventListener('click',function (){mainSale()})

// document.getElementById('browseShop').addEventListener('click',function (){browseShop()})