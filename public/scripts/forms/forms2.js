let newVersion;
let textLog;

function confirm() { 
    newVersion = document.getElementById('new-Version').value; 
    var n1 = document.getElementById('nota-1').value;
    var n2 = document.getElementById('nota-2').value;
    var n3 = document.getElementById('nota-3').value;
    var n4 = document.getElementById('nota-4').value;
    var n5 = document.getElementById('nota-5').value;
    var n6 = document.getElementById('nota-6').value; 
    
    textLog = `- ${n1} <br><br>- ${n2} <br><br>- ${n3} <br><br>- ${n4} <br><br>- ${n5} <br><br>- ${n6} <br><br>`
    document.getElementById('text-Area').innerText = textLog; 
    console.log(newVersion);
}
