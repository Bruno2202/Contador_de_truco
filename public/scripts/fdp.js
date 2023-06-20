let faco = 0;
let fiz = 0;
function addFaco() {
    faco = faco + 1;
    console.log("Faço: " + faco)
}
function reduceFaco() {
    faco = faco - 1;
    console.log("Faço: " + faco)
    if (faco < 0) {
        faco = 0;
    }
}
function addFiz() {
    fiz = fiz + 1;
    console.log("Fiz: " + fiz)
}
function reduceFiz() {
    fiz = fiz - 1;
    console.log("Fiz: " + fiz)
}

