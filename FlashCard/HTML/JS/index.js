let respuestica;

const azar = ()=>{
    const number = Math.floor(Math.random() * 15)
    return number
}

const azar1 = ()=>{
    const number = Math.floor(Math.random() * 100)
    return number
} 

const preguntas = {
    "Num1" : azar(),
    "Num2" : azar(),
    "Result" : [
        azar1(),
        azar1(),
        azar1(),
       
    ]
}

window.addEventListener("load", ()=>{
    respuestica = preguntas.Num1 * preguntas.Num2
    preguntas.Result.push(respuestica)
    console.log(preguntas)
})


const operacion=document.querySelector(".operacion")
operacion.innerHTML=`${preguntas.Num1} + ${preguntas.Num2}`

const respuestas=document.querySelector(".respuestas")
respuestas.innerHTML=`${preguntas.Result[0]} ${preguntas.Result[1]}, ${preguntas.Result[2]}, ${preguntas.Num1 + preguntas.Num2}`

const eventFlipCard = ()=>{
    let carasTarjetas = document.getElementById("carasTarjetas")
    if (carasTarjetas.style.transform != "rotateY(180deg)") {
        carasTarjetas.style.transform = "rotateY(180deg)";
    }
}

const eventFlipFrontCard = ()=>{
    let carasTarjetas = document.getElementById("carasTarjetas")
    if (carasTarjetas.style.transform = "rotateY(180deg)") {
        carasTarjetas.style.transform = "rotateY(0deg)";
    }
}