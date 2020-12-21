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
    })
}
