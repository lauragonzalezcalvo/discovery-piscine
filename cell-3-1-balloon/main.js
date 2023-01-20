"use strict"

const balloon = document.querySelector (".js-balloon");
const explodeText = document.querySelector (".js-explode-text");
const btn = document.querySelector (".js-btn");

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
//función para resetear
const handleReset = () => {
    balloon.classList.remove("hidden-balloon");
    explodeText.classList.add("hidden-text");
    widthBalloon = 200;
    heightBalloon = 200;
    borderBalloon = 100;    
    balloon.style.width = `${widthBalloon}px`;
    balloon.style.height = `${heightBalloon}px`;
    balloon.style.borderRadius = `${borderBalloon}px`; 
}

//funcion manejadora del evento 
const handleBalloon = (ev) => {
    increaseBalloon(ev);
    colorBalloon();
    explodeBalloon();
}

//función para cambiar los colores y tamaño con el ratón

const mouseOut =()=>{
    if(widthBalloon > 200 && heightBalloon > 200 && balloon.classList.contains("initial-balloon")){
        widthBalloon = widthBalloon -5
        heightBalloon = heightBalloon -5
        balloon.style.width = `${widthBalloon}px`;
        balloon.style.height = `${heightBalloon}px`;
        balloon.classList.contains("initial-balloon")
        balloon.classList.remove("initial-balloon")
        balloon.classList.add("balloon-green")
    } else if(widthBalloon > 200 && heightBalloon > 200 && balloon.classList.contains("balloon-green")){
        widthBalloon = widthBalloon -5
        heightBalloon = heightBalloon -5
        balloon.style.width = `${widthBalloon}px`;
        balloon.style.height = `${heightBalloon}px`;
        balloon.classList.contains("balloon-green");
        balloon.classList.remove("balloon-green");
        balloon.classList.add("balloon-blue");
    
} else if(widthBalloon > 200 && heightBalloon > 200 && balloon.classList.contains("balloon-blue")){
    widthBalloon = widthBalloon -5
    heightBalloon = heightBalloon -5
    balloon.style.width = `${widthBalloon}px`;
    balloon.style.height = `${heightBalloon}px`;
    balloon.classList.contains("balloon-blue");
        balloon.classList.remove("balloon-blue");
        balloon.classList.add("initial-balloon");
}
}


balloon.addEventListener("click", handleBalloon)
balloon.addEventListener("mouseout", mouseOut)
explodeText.addEventListener("click", handleReset)
