//EQUIPES
function openModal() {
    document.getElementById('modal-Overlay').style.display = 'flex';
}
function closeModal() {
    document.getElementById('modal-Overlay').style.display = 'none';
}

//CHANGE TEAMS
function changeTeams() {
    document.getElementById('modal-Overlay').style.display = 'flex';
    document.getElementById('modal-Overlay2').style.display = 'none'
    eles = 0;
    document.getElementById('score').innerText = eles;
    nos = 0;
    document.getElementById('score2').innerText = nos;
}


//POINTS EQUIPES
let points1 = 0;
document.getElementById('points1').innerText = points1;
let points2 = 0;
document.getElementById('points2').innerText = points2;


//SAVE AND CLOSE
let nomeEq1;
let nomeEq2;
//let auxNomeEq1;
//let auxNomeEq2;
function saveAndCloseEq() {
    nomeEq1 = document.getElementById('text-Eq1').value;
    nomeEq2 = document.getElementById('text-Eq2').value;
    if (nomeEq1 == null || nomeEq1 == "") {
        nomeEq1 = "Nós";
    }
    if (nomeEq2 == null || nomeEq2 == "") {
        nomeEq2 = "Eles";
    }
    console.log("Equipe1: " + nomeEq1);
    console.log("Equipe2: " + nomeEq2);

    document.getElementById("equipe1").innerText = nomeEq1;
    document.getElementById("equipe2").innerText = nomeEq2;
    closeModal();
    //validation();
    //auxNomeEq1 = nomeEq1;
    //auxNomeEq2 = nomeEq2;
}



//MODAL 2 - MODAL FIM DE JOGO
function openModal2() {
    document.getElementById('modal-Overlay2').style.display = 'flex';
}
function restart() {
    document.getElementById('modal-Overlay2').style.display = 'none'
    nos = 0;
    document.getElementById("score").innerText=nos;
    eles = 0;
    document.getElementById("score2").innerText=eles;
}


//MODAL 3 - AJUSTE DE PONTOS DAS PARTIDAS
function openModal3() {
    document.getElementById('modal-Overlay3').style.display = 'flex';
}
function closeModal3() {
    document.getElementById('modal-Overlay3').style.display = 'none';
}
function addPoint1() {
    points1 = points1 + 1;
    document.getElementById('points1').innerText = points1;
}
function decrasePoint1() {
    if (points1 <= 0) {
        points1 = 0;
    } else {
        points1 = points1 - 1;
    }
    document.getElementById('points1').innerText = points1;
}
function addPoint2() {
    points2 = points2 + 1;
    document.getElementById('points2').innerText = points2;
}
function decrasePoint2() {
    if (points2 <= 0) {
        points2 = 0;
    } else {
        points2 = points2 - 1;
    }
    document.getElementById('points2').innerText = points2;
}
function reset() {
    document.getElementById('modal-Overlay4').style.display = 'flex';
}

//MODAL 4 - CONFIRMAR ALTERAÇÕES NO MODAL 3
function agree() {
    points1 = 0;
    document.getElementById('points1').innerText = points1;
    points2 = 0;
    document.getElementById('points2').innerText = points2;
    document.getElementById('modal-Overlay4').style.display = 'none';
}
function desagree() {
    document.getElementById('modal-Overlay4').style.display = 'none';
}


//FDP
function FDP() {
    window.location.href = "fdp.html"
}


//VAR
var eles = 0;
document.getElementById("score2").innerText=eles;

var nos = 0;
document.getElementById("score").innerText=nos;

var ref0 = 0;
var ref12 = 12;

//DECREMENT_NOS
function decrement(){
    if (nos <= 0 ) {
        nos = ref0
    } else {
        nos = nos - 1;
    }
    document.getElementById("score").innerText=nos;
}

//DECREMENT_ELES
function decrement2(){
    if (eles <= 0 ) {
        eles = ref0;
    } else {
        eles = eles - 1;
    }
    document.getElementById("score2").innerText=eles;
}

//INCREMENT_NOS
let auxPoints1;
let auxPoints2;
function increment(){
    if (cod == 0) {
        nos = nos + 1;
        document.getElementById("score").innerText=nos;
        cod = 0;
        type.textContent = "TRUCO";
    }
    if (cod == 1) {
        nos = nos + 3;
        document.getElementById("score").innerText=nos;
        cod = 0;
        type.textContent = "TRUCO";
    }
    if (cod == 2) {
        nos = nos + 6;
        document.getElementById("score").innerText=nos;
        cod = 0;
        type.textContent = "TRUCO";
    }
    if (cod == 3) {
        nos = nos + 9;
        document.getElementById("score").innerText=nos;
        cod = 0;
        type.textContent = "TRUCO";
    }
    if (cod == 4) {
        nos = nos + 12;
        document.getElementById("score").innerText=nos;
        cod = 0;
        type.textContent = "TRUCO";
    }
    if (nos >= 12) {
        openModal2();
        if (document.getElementById('points1').value > 0) {
            points1 = document.getElementById('points1').value;
        }
        points1 = points1 + 1;
        auxPoints1 = points1;
        document.getElementById('points1').innerText = points1;
        console.log(points1);
    }
    console.log("NOS" + nos);
}


//INCREMENT_ELES
function increment2() {
    if (cod2 == 0) {
        eles = eles + 1;
        document.getElementById("score2").innerText=eles;
        cod2 = 0;
        type2.textContent = "TRUCO";
    }
    if (cod2 == 1) {
        eles = eles + 3;
        document.getElementById("score2").innerText=eles;
        cod2 = 0;
        type2.textContent = "TRUCO";
    }
    if (cod2 == 2) {
        eles = eles + 6;
        document.getElementById("score2").innerText=eles;
        cod2 = 0;
        type2.textContent = "TRUCO";
    }
    if (cod2 == 3) {
        eles = eles + 9;
        document.getElementById("score2").innerText=eles;
        cod2 = 0;
        type2.textContent = "TRUCO";
    }
    if (cod2 == 4) {
        eles = eles + 12;
        document.getElementById("score2").innerText=eles;
        cod2 = 0;
        type2.textContent = "TRUCO";
    }
    if (eles >= 12) {
        openModal2();
        points2 = points2 + 1;
        auxPoints2 = points2;
        document.getElementById('points2').innerText = points2;
        console.log(points2);
    }
    console.log("ELES" + eles);
}

//TRUCO_1
let type = document.getElementById("truco1");
let cod = 0;
function truco1() {
    cod += 1;
    console.log("T1 = " + cod);
    if (cod == 5) {
        cod = 0;
    }
    if (cod == 0) {
        type.textContent = "TRUCO";
    }
    if (cod == 1) {
        type.textContent = "TRUCO(3)";
    }
    if (cod == 2) {
        type.textContent = "TRUCO(6)";   
    }
    if (cod == 3) {
        type.textContent = "TRUCO(9)";   
    }
    if (cod == 4) {
        type.textContent = "TRUCO(12)";   
    }
}

//TRUCO_2
let type2 = document.getElementById("truco2");
let cod2 = 0;
function truco2() {
    cod2 += 1;
    console.log("T2 = " + cod2);
    if (cod2 == 5) {
        cod2 = 0;
    }
    if (cod2 == 0) {
        type2.textContent = "TRUCO";
    }
    if (cod2 == 1) {
        type2.textContent = "TRUCO(3)";
    }
    if (cod2 == 2) {
        type2.textContent = "TRUCO(6)";   
    }
    if (cod2 == 3) {
        type2.textContent = "TRUCO(9)";   
    }
    if (cod2 == 4) {
        type2.textContent = "TRUCO(12)";   
    }
}