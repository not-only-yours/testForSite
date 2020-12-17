import {sendPOST} from "./parsejson";
import {funcDelete} from "./workWithLocalStorage";

export let reqestSended = false;
export let order;
export let answerId;

if(document.getElementById('createorder'))
document.getElementById('createorder').addEventListener('click',function (){
    location.hash = "createOrder"
})


export function createOrder() {



    let div = document.createElement('div')
    div.style.backgroundColor = "white"
    let h1 = document.createElement('h1')
    div.appendChild(h1)
    h1.innerHTML = "confirm order"
    h1.style.width = "98%"
    let div1 = document.createElement('div')
    div1.classList.add("parent")
    div.appendChild(div1)
    let div2 = document.createElement('div')
    div2.classList.add("div1")
    div1.appendChild(div2)
    let p = document.createElement('p')
    p.innerHTML = "Name"
    p.id = "pName"
    div2.appendChild(p)


    let inName = document.createElement('input')
    inName.type = "text"
    inName.id = "name"
    inName.pattern = "[A-Z][a-z]{1,15}"
    div2.appendChild(inName)
    let div3 = document.createElement('div')
    div3.classList.add("div2")
    div1.appendChild(div3)
    let p1 = document.createElement('p')
    p1.innerHTML = "Surname"
    p1.id = "pSurname"
    div3.appendChild(p1)

    let input = document.createElement('input')
    input.type = "text"
    div3.appendChild(input)
    input.pattern = "[A-Z][a-z]{1,15}"
    input.id = "surname"

    let div4 = document.createElement('div')
    div4.classList.add('div3')
    div1.appendChild(div4)
    let p2 = document.createElement('p')
    p2.innerHTML = "Telephone"
    p2.id = "pPhone"
    div4.appendChild(p2)


    let input1 = document.createElement('input')
    input1.type = "text"
    input1.pattern = "[+][0-9]{12}"
    input1.id = "phone"

    div4.appendChild(input1)
    let div5 = document.createElement('div')
    div5.classList.add('div4')
    div1.appendChild(div5)
    let p3 = document.createElement('p')
    p3.innerHTML = "Email"
    p3.id = "pMail"
    div5.appendChild(p3)


    let input2 = document.createElement('input')
    input2.type = "text"
    input2.id = "mail"
    div5.appendChild(input2)
    document.getElementById('allMain').innerHTML = ""
    document.getElementById('allMain').appendChild(div)


    let div7 = document.createElement('div')
    div1.appendChild(div7)
    div7.classList.add('div1')
    let p4 = document.createElement('p')
    p4.innerHTML = "Address"
    div7.appendChild(p4)
    let input3 = document.createElement('input')
    input3.type = "text"
    div7.appendChild(input3)
    input3.id = "address"

    let div8 = document.createElement('div')
    div1.appendChild(div8)
    div8.classList.add('div2')
    let p5 = document.createElement('p')
    p5.innerHTML = "Type of paying"
    div8.appendChild(p5)
    let input4 = document.createElement('input')
    input4.type = "text"
    div8.appendChild(input4)
    input4.id = "typeofPaying"

    let div6 = document.createElement('div')
    document.getElementById('allMain').appendChild(div6)
    let h1second = document.createElement('h1')
    h1second.innerHTML = "cart"
    h1second.style.width = "98.3%"
    h1second.style.backgroundColor = "#b7a49e"
    div6.appendChild(h1second)
    div6.classList.add('block')

    if (localStorage["cart"]) {
        creator()
        let btn = document.createElement("BUTTON")
        btn.id = "viber"
        btn.style.width = "100%"
        btn.style.height = "50px"
        btn.innerHTML = "submit"
        btn.style.height = "60px"
        btn.style.padding = "0"
        btn.classList.add('AddButton')
        document.getElementById('allMain').appendChild(btn)



        document.getElementById('viber').addEventListener('click', function (){
            input2.setCustomValidity("")
            inName.setCustomValidity("")
            input.setCustomValidity("")
            input1.setCustomValidity("")
            if(!validateEmail(document.getElementById('mail').value)){
                input2.setCustomValidity("invalid")
                document.getElementById('pMail').innerHTML = "Email (write correct mail)"
            }if(!document.getElementById('name').checkValidity() || document.getElementById('name').value === ""){
                inName.setCustomValidity("invalid")
                document.getElementById('pName').innerHTML = "Name (English, big letter than small)"
            }if(!document.getElementById('surname').checkValidity() || document.getElementById('surname').value === ""){
                input1.setCustomValidity("invalid")
                document.getElementById('pSurname').innerHTML = "Surname (English, big letter than small)"
            }if(!document.getElementById('phone').checkValidity() || document.getElementById('phone').value === ""){
                input.setCustomValidity("invalid")
                document.getElementById('pPhone').innerHTML = "Phone ('+' than 13 numbers)"
            }if(validateEmail(document.getElementById('mail').value) && document.getElementById('name').checkValidity() && document.getElementById('surname').checkValidity()  && document.getElementById('phone').checkValidity()){
                const body = {
                    "email": document.getElementById('mail').value,
                    "name": document.getElementById('name').value,
                    "surname": document.getElementById('surname').value,
                    "phone": document.getElementById('phone').value,
                    "address": document.getElementById('address').value,
                    "typeofPaying": document.getElementById('typeofPaying').value,
                    "cart": JSON.parse(localStorage["cart"])
                }
                console.log(body)
                sendPOST('POST', 'https://jsonplaceholder.typicode.com/users' , body)
                    .then(data => {
                        answerId = data.id
                    })
                    .catch(err =>console.log(err))


                reqestSended = true
                if(answerId)
                    location.hash = "checkOrderStatus/" + answerId
                else{
                    answerId = 11
                    location.hash = "checkOrderStatus/" + answerId
                }
            }

        })
    }
    else {
        let h1third = document.createElement('h1')
        h1third.innerHTML = "cart is empty. Add smth to confirm order"
        h1third.style.width = "98.3%"
        h1third.style.backgroundColor = "#fafafa"
        div6.appendChild(h1third)
    }


}


export function creator() {
    let arr = JSON.parse(localStorage["cart"])
    //console.log(arr)
        document.getElementById('basketDi').innerHTML = ""
        let paras = document.getElementsByClassName('oneofItemInCart');
        while(paras[0]) {
            paras[0].parentNode.removeChild(paras[0]);
        }
        for (let key in arr) {
            catalogCreator(arr[key])
        }
}

export function catalogCreator(aa){
        let divtoAdd = document.createElement('div')
        divtoAdd.classList.add("oneofItemInCart")
    divtoAdd.style.backgroundColor = "gray"
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
        btn.addEventListener('click',function () {
            funcDelete(btn.id);
            createOrder()
        })
        btn.innerHTML = "delete";
        divtoAdd.appendChild(img)
        divtoAdd.appendChild(p)
        divtoAdd.appendChild(input)
        divtoAdd.appendChild(text)
        divtoAdd.appendChild(btn)
        document.getElementById('allMain').appendChild(divtoAdd)
}


export function validateEmail(email)
{
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}





export function createVarOfOrder(){

    let div = document.createElement('div')
    div.style.backgroundColor = "white"
    let h1 = document.createElement('h1')
    div.appendChild(h1)
    h1.innerHTML = "thank you! order confirmed!"
    h1.style.backgroundColor = "green"
    let div1 = document.createElement('div')
    div1.classList.add("parent")
    div.appendChild(div1)
    let div2 = document.createElement('div')
    div2.classList.add("div1")
    div1.appendChild(div2)
    let p = document.createElement('p')
    p.innerHTML = "Name: " + document.getElementById('name').value
    div2.appendChild(p)
    let div3 = document.createElement('div')
    div3.classList.add('div1')
    div1.appendChild(div3)
    let p1 = document.createElement('p')
    p1.innerHTML = "Surname: " + document.getElementById('surname').value
    div3.appendChild(p1)

    let div4 = document.createElement('div')
    div4.classList.add('div1')
    div1.appendChild(div4)
    let p2 = document.createElement('p')
    p2.innerHTML = "Phone: " + document.getElementById('phone').value
    div4.appendChild(p2)

    let div5 = document.createElement('div')
    div5.classList.add('div1')
    div1.appendChild(div5)
    let p3 = document.createElement('p')
    p3.innerHTML = "Mail: " + document.getElementById('mail').value
    div5.appendChild(p3)


    if(document.getElementById('address').value!==""){
        let div6 = document.createElement('div')
        div6.classList.add('div1')
        div1.appendChild(div6)
        let p4 = document.createElement('p')
        p4.innerHTML = "Address: " + document.getElementById('address').value
        div6.appendChild(p4)
    }
    if(document.getElementById('typeofPaying').value!==""){
        let div7 = document.createElement('div')
        div7.classList.add('div1')
        div1.appendChild(div7)
        let p5 = document.createElement('p')
        p5.innerHTML = "Type of paying: " + document.getElementById('typeofPaying').value
        div7.appendChild(p5)
    }
    order= div
}


export function checkOrderStatus(){
    document.getElementById('allMain').innerHTML = ""
    document.getElementById('allMain').appendChild(order);
}