
export function addToLocalStorage(aa) {
    if(localStorage.getItem("cart") === null) {
        document.getElementById('total').innerHTML = "PRISE: 0$"
        document.getElementById('basketDi').innerHTML = ""
        let cart = [];
        cart[0] = aa
        localStorage["cart"] = JSON.stringify(cart)
        document.getElementById('basketDi').innerHTML = ""
        createDiv(aa);
    }else{
        let  arr = JSON.parse(localStorage["cart"])
        let shouldAdd = true
        console.log(arr)
        for(let key in arr){
            if(shouldAdd && arr[key].id === aa.id){
                arr[key].pcs++
                shouldAdd= false
            }
        }
        if(shouldAdd) {
            console.log(arr)
            arr.push(aa)
        }
        document.getElementById('basketDi').innerHTML = ""
        totalPrise =0;
        for(let key in arr){

            createDiv(arr[key])
        }
        localStorage["cart"] = JSON.stringify(arr)
        knowPrise()
    }
}


export function createDiv(aa){
    let divtoAdd = document.createElement('div')
    divtoAdd.classList.add("oneofItemInCart")
    let img = document.createElement('img')
    img.src = aa.images
    img.style.width = "100px"
    img.style.height = "100%"
    let p = document.createElement('p')
    p.classList.add("nameofBike")
    p.innerHTML = aa.productName
    let input = document.createElement('input')
    input.value = aa.pcs
    input.classList.add("inputNum")
    let text = document.createElement('p')
    text.classList.add("priseOfBike")
    text.innerHTML = aa.prise.concat("$")
    let btn = document.createElement("BUTTON");
    btn.classList.add('orderDelete')
    let first = "cart"
    let second = aa.id
    btn.id = first.concat(second)
    btn.addEventListener('click',function ()  {
        funcDelete(btn.id);
    })
    btn.innerHTML = "delete";
    divtoAdd.appendChild(img)
    divtoAdd.appendChild(p)
    divtoAdd.appendChild(input)
    divtoAdd.appendChild(text)
    divtoAdd.appendChild(btn)
    document.getElementById('basketDi').appendChild(divtoAdd)
}

export function funcDelete(aa){
    aa = aa.replace('cart','')
    console.log(aa)
    let  arr = JSON.parse(localStorage["cart"])
    let shouldDelete = true
    console.log(arr)
    for(let key in arr){
        if(shouldDelete && arr[key].id === aa){
            arr.splice(key, 1)
            break
        }
    }
    document.getElementById('basketDi').innerHTML = ""
    for(let key in arr){
        createDiv(arr[key])
    }
    if(Array.isArray(arr) && arr.length) {
        localStorage["cart"] = JSON.stringify(arr)
    }
    else{
        localStorage.removeItem("cart")
        let p = document.createElement('p')
        p.classList.add("nameofBike")
        p.classList.add("empty")
        p.innerHTML = "cart is empty"
        document.getElementById('basketDi').appendChild(p)
    }
    knowPrise()
}

export let totalPrise = 0;

export function knowPrise() {
    totalPrise = 0;
    let arr = JSON.parse(localStorage.getItem("cart"))
    for(let key in arr){
        totalPrise += arr[key].prise * arr[key].pcs
    }
    let a = "Prise: "
    let b = "$"
    let aa = a.concat(totalPrise.toString())
    document.getElementById('total').innerHTML = aa.concat(b)
}

