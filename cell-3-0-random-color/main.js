"use strict"

const button = document.querySelector ('.js-button');
const background = document.querySelector ('.js-background');

 var randomColor = Math.floor(Math.random()*16777215).toString(16);
 //16777215 es el número de colores hexadecimales que existen
 const setBg = () => {
   const randomColor = Math.floor(Math.random()*16777215).toString(16);
   document.body.style.backgroundColor = "#" + randomColor;
 }
 


const handleColor = (ev) => {
ev.preventDefault();
setBg();

 }

 button.addEventListener("click", handleColor);