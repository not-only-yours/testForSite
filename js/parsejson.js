import {hideSpinner, showSpinner} from "./Loader";

export function getURL() {
    return 'https://my-json-server.typicode.com/not-only-yours/jsonFileFor4Lab/db';
}

export function sendRequest(method, url) {

    showSpinner();

    return fetch(url).then(response => {
        if (response.ok) {
                hideSpinner()
            return response.json();
        }

        return response.json().then(error => {
            hideSpinner();
            const e = new Error('Что-то пошло не так')
            e.data = error
            throw e

        })
    })
}



export function sendPOST(method,url,body = null){


    return fetch(url, {
        method: method,
        body: JSON.stringify(body)
        }).then(response => {
        if (response.ok) {
            return response.json()
        }

        return response.json().then(error => {
            const e = new Error('Что-то пошло не так')
            e.data = error
            throw e
        }).then((data) => {
            console.log(data)
        })
    })
}
