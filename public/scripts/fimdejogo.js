document.getElementById("patos").addEventListener("click", function(){
    document.getElementById("sompato").play();
    audio.currentTime = 0;
});

let images=["patos/pato1.jpeg", "patos/pato2.jpg", "patos/pato3.png", "patos/pato4.jpg", "patos/pato5.jpg", "patos/pato6.jpeg", "patos/pato7.jpeg", "patos/pato8.jpeg", "patos/pato9.png", "patos/pato10.jpg", "patos/pato11.png"];
let imagesLength = images.length;
let randomNumber = Math.random();
randomNumber = randomNumber*imagesLength;
randomNumber = Math.floor(randomNumber);
let choosenImage = images[randomNumber];
patos.src = choosenImage;