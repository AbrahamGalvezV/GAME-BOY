let botonEncendido = document.getElementById('start'); 
let botonApagado = document.getElementById('off'); 
let pantallaOff = document.getElementById('screenOff'); 
let pantallaOn = document.getElementById('screenOn'); 

botonEncendido.addEventListener('click', function(){
    pantallaOn.classList.remove('screenoff');
    pantallaOn.classList.add('screenOn');
    
});

botonApagado.addEventListener ('click', function(){
    pantallaOn.classList.remove('juego1');
    pantallaOn.classList.remove('screenOn');
    pantallaOn.classList.add('screenOff');
    
});

let img1 = "../img/juego1.png";
let img2 = "../img/juego2.png";
let img3 = "../img/juego3.png";
let img4 = "../img/juego4.png";


let imagenes =[img1, img2, img3, img4 ];
let izquierda = document.getElementById("izquierda");
let derecha = document.getElementById("derecha");
let img = document.getElementById('pare');
for (let i = 0; i < imagenes.length; i++){
    if (derecha){
        derecha.addEventListener('click', function(){
            pantallaOn.classList.remove('juego1');
            pantallaOn.classList.remove('screenOff');
            img.src=imagenes[i];
            i++;            
            
                
        });
    }else {
        console.log('hello world');
    }
}



