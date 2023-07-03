let faco = 0;
document.getElementById('pt-Faco').innerText = faco;
let fiz = 0;
document.getElementById('pt-Fiz').innerText = fiz;

function addFaco() {
    faco = faco + 1;
    console.log("Faço: " + faco)
    document.getElementById('pt-Faco').innerText = faco;
}

function reduceFaco() {
    faco = faco - 1;
    console.log("Faço: " + faco);
    if (faco <= 0) {
        faco = 0;
    }
    document.getElementById('pt-Faco').innerText = faco;
}

function addFiz() {
    fiz = fiz + 1;
    console.log("Fiz: " + fiz);
    document.getElementById('pt-Fiz').innerText = fiz;
}

function reduceFiz() {
    fiz = fiz - 1;
    console.log("Fiz: " + fiz);
    if (fiz <= 0) {
        fiz = 0;
    }
    document.getElementById('pt-Fiz').innerText = fiz;
}

