"use strict"

const balloon = document.querySelector (".js-balloon");
const explodeText = document.querySelector (".js-explode-text");

let widthBalloon = 200;
let heightBalloon = 200;
let borderBalloon = 100;



//función para incrementar el tamaño del globo 
const increaseBalloon = (ev) => {
    ev.preventDefault()
    widthBalloon = widthBalloon +10
    heightBalloon = heightBalloon +10
    borderBalloon = borderBalloon +100
    balloon.style.width = `${widthBalloon}px`;
    balloon.style.height = `${heightBalloon}px`;
    balloon.style.borderRadius = `${borderBalloon}px`;  
}

//función para cambiar el color del globo 

const colorBalloon = () => {
    if (balloon.classList.contains("initial-balloon")){
        balloon.classList.remove("initial-balloon")
        balloon.classList.add("balloon-green");
    }
    else if  (balloon.classList.contains("balloon-green")) {
          balloon.classList.remove("balloon-green")
          balloon.classList.add("balloon-blue");
    }
    else if (balloon.classList.contains("balloon-blue")) {
            balloon.classList.remove("balloon-blue")
            balloon.classList.add("initial-balloon");
    }


}

const explodeBalloon = () => {
 if(widthBalloon === 420 && heightBalloon === 420){
    balloon.classList.add("hidden-balloon");
    explodeText.classList.remove("hidden-text")

 }
 
}

//funcion manejadora del evento 
const handleBalloon = (ev) => {
    increaseBalloon(ev);
    colorBalloon();
    explodeBalloon();

}


balloon.addEventListener("click", handleBalloon)