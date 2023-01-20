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

// Funciones

function calculate (numberOneValue, numberTwoValue, selectValue){
    let  result = ""
    if(selectValue === "+" ){
        result = numberOneValue + numberTwoValue
        
    }
    else if (selectValue === "-" ){
        result = numberOneValue - numberTwoValue
        
    }
    else if (selectValue === "*" ){
        result = numberOneValue * numberTwoValue
       
    }
    else if (selectValue === "/" ){
        result= numberOneValue / numberTwoValue
        
    }
    else if (selectValue === "%" ){
        result = numberOneValue % numberTwoValue
        
    }
     
return result 
}

function resultText (numberResult){
    console.log(result)
     result.innerHTML= `El resultado es ${numberResult}`;

}

//         //si no ponemos parseFloat concatenaría x con y  
//         suma=parseFloat(x)+parseFloat(y);  
//         text= suma;  
//       }  
    

// Funcion manejadora que ejecuta el evento click
function handleClick (ev) {
    ev.preventDefault();

    if (isNaN(numberOne.value) || isNaN(numberTwo.value)) {
        console.log("entra");
        result.innerHTML = "Es necesario introducir dos números válidos";     
    }else{  
    const numberOneValue = parseInt(numberOne.value);
    const numberTwoValue = parseInt (numberTwo.value);
    const selectValue =  select.value;
    const numberResult = calculate  (numberOneValue, numberTwoValue, selectValue)
    resultText (numberResult);
    console.log(numberResult);
   }
}

// Eventos
btn.addEventListener("click", handleClick)

