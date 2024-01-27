let botonEncendido = document.getElementById('start'); 
let botonApagado = document.getElementById('off'); 
let pantallaOff = document.getElementById('screenOff'); 
let pantallaOn = document.getElementById('screenOn');
let audio = new Audio();
audio.src="../audio/music_gb-start.mp3";


botonEncendido.addEventListener('click', function() {
    pantallaOn.classList.remove('screenoff');
    pantallaOn.classList.add('screenOn');
    pantallaOn.classList.add('backgroundInicio');
    img.classList.add('opacity0');
    audio.play();
});

botonApagado.addEventListener('click', function() {
    pantallaOn.classList.remove('backgroundInicio');
    pantallaOn.classList.add('screenOff');
    img.classList.add('opacity0');
});

let botonDerecha = document.querySelector('.derecha');
let botonIzquierda = document.querySelector('.izquierda');

let img1 = "./img/juego1.png";
let img2 = "./img/juego2.png";
let img3 = "../img/juego3.png";
let img4 = "../img/juego4.png";

let imagenesDeJuegos =[img1, img2, img3, img4];
let img = document.getElementById('img');


for (let i = 0; i < imagenesDeJuegos.length; i++) {
    let i = 0;

    botonDerecha.onclick = function(){
        pantallaOn.classList.remove('screenOff');
        pantallaOn.classList.remove('backgroundInicio');
        img.classList.remove('opacity0');
        pantallaOn.classList.add('screenOn');
        img.src = imagenesDeJuegos[i];


        i = i + 1;

        if( i >= imagenesDeJuegos.length){
            i = 0;  
        }

        botonIzquierda.onclick = function(){
        pantallaOn.classList.remove('screenOff');
        pantallaOn.classList.remove('backgroundInicio');
        img.classList.remove('opacity0');
        pantallaOn.classList.add('screenOn');
        img.src = imagenesDeJuegos[i];

        i = i - 1;   

        if( i < 0){
            i = imagenesDeJuegos.length - 1;  
        }
        };


    };

}