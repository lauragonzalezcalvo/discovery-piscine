"use strict"

const numberOne = document.querySelector (".js-number-1");
const numberTwo = document.querySelector (".js-number-2");
const result = document.querySelector (".js-result");
const btn = document.querySelector (".js-btn");
const select = document.querySelector (".js-select");



/* 
1- Recoger el value de los inputs y del select en una funcion 
2- Hacer una funcion por cada operador
3- Los inputs operen entre ellos al hacer click en el evento
4- Mostrar el resultado
*/

function calculate (numberOneValue, numberTwoValue, selectValue){
    let  result 
    if(selectValue === "+" ){
        const resultSum = numberOneValue + numberTwoValue
        
    }
    else if (selectValue === "-" ){
        const resultSubstract = numberOneValue - numberTwoValue
        console.log(resultSubstract)
    }
    else if (selectValue === "*" ){
        const resultMultiply = numberOneValue * numberTwoValue
        console.log(resultMultiply)
    }
    else if (selectValue === "/" ){
        const resultDivide = numberOneValue / numberTwoValue
        console.log(resultDivide)
    }
    else if (selectValue === "%" ){
        const resultPorcentage= numberOneValue % numberTwoValue
        console.log(resultPorcentage)
    }

}

function result (){
    result.innerHTML= `El resultado es ${}`;

}
//     if (isNaN(x) || isNaN(y)) {  
//         text = "Es necesarios introducir dos números válidos";  
//       } else {  
//         //si no ponemos parseFloat concatenaría x con y  
//         suma=parseFloat(x)+parseFloat(y);  
//         text= suma;  
//       }  
    

// Funciones

// Funcion manejadora que ejecuta el evento click
function handleClick (ev) {

    const numberOneValue = parseInt(numberOne.value);
    const numberTwoValue = parseInt (numberTwo.value);
    const selectValue =  select.value;
  
    ev.preventDefault()
    calculate (numberOneValue, numberTwoValue, selectValue)
    result ()
   
}

// Eventos
btn.addEventListener("click", handleClick)