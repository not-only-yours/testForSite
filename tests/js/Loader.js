export function showSpinner(){
    document.getElementById('allMain').style.visibility = "hidden"
    document.getElementById('spinner').style.visibility = "visible"
}


export function hideSpinner(){
    document.getElementById('allMain').style.visibility = "visible"
 document.getElementById('spinner').style.visibility = "hidden"
}