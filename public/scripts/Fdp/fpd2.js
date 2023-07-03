let codF = 0;
let codD = 0;
let codP = 0;
function stayF() {
    if (codF >= 0) {
        document.getElementById('F').style.color = '#ffffff';
        document.getElementById('F').style.textShadow = '0px 0px 10px #ffffff';
        codF = codF + 1;
        console.log("codF: " + codF);
    }
    if (codF > 1) {
        document.getElementById('F').style.color = '#ffffff48';
        document.getElementById('F').style.textShadow = 'none';
        codF = 0;
        console.log("codF: " + codF);
    }
    if (codF == 1 && codD == 1 && codP == 1) {
        document.getElementById('modal-Overlay').style.display = 'flex';
    }
}

function stayD() {
    if (codD >= 0) {
        document.getElementById('D').style.color = '#ffffff';
        document.getElementById('D').style.textShadow = '0px 0px 10px #ffffff';
        codD = codD + 1;
        console.log("codD: " + codD);
    }
    if (codD > 1) {
        document.getElementById('D').style.color = '#ffffff48';
        document.getElementById('D').style.textShadow = 'none';
        codD = 0;
        console.log("codD: " + codD);
    }
    if (codF == 1 && codD == 1 && codP == 1) {
        document.getElementById('modal-Overlay').style.display = 'flex';
    }
}

function stayP() {
    if (codP >= 0) {
        document.getElementById('P').style.color = '#ffffff';
        document.getElementById('P').style.textShadow = '0px 0px 10px #ffffff';
        codP = codP + 1;
        console.log("codP: " + codP);
    }
    if (codP> 1) {
        document.getElementById('P').style.color = '#ffffff48';
        document.getElementById('P').style.textShadow = 'none';
        codP = 0;
        console.log("codP: " + codP);
    }
    if (codF == 1 && codD == 1 && codP == 1) {
        document.getElementById('modal-Overlay').style.display = 'flex';
    }
}

function restart() {
    codF = 0;
    codD = 0;
    codP = 0;
    document.getElementById('F').style.color = '#ffffff48';
    document.getElementById('F').style.textShadow = 'none';
    document.getElementById('D').style.color = '#ffffff48';
    document.getElementById('D').style.textShadow = 'none';
    document.getElementById('P').style.color = '#ffffff48';
    document.getElementById('P').style.textShadow = 'none';
    document.getElementById('modal-Overlay').style.display = 'none';
}

function back() {
    window.location.href = "index.html"
}

function reset() {
    faco = 0;
    fiz = 0;
    document.getElementById('pt-Faco').innerText = faco;
    document.getElementById('pt-Fiz').innerText = fiz;
}
