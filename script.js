let respuestica;
let btnres;
// let correctas = 0
// let incorrectas = 0

// const btnResult = document.getElementById("result")
// const resultados = document.getElementById("resultados")
// btnResult.addEventListener("click", () => {
//     resultados.innerHTML = `
//     <h2>Correctas: ${correctas}</h2>
//     <h2>ncorrectas: ${incorrectas}</h2>
    
//     `
// })

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
    preguntas.Result.sort()
    crearbotones()
    btnres.forEach(element =>{
        element.addEventListener("click", () =>{
            validate(element.value)
        })
    })
})


const operacion=document.querySelector(".operacion")
operacion.innerHTML=`${preguntas.Num1} * ${preguntas.Num2}`

const respuestas=document.querySelector(".respuestas")
// respuestas.innerHTML=`
// <button value="${preguntas.Result[0]}" id="btn-res" class"btn-res">${preguntas.Result[0]}</button> 
// <button value="${preguntas.Result[1]}" id="btn-res" class"btn-res1">${preguntas.Result[1]}</button>
// <button value="${preguntas.Result[2]}"id="btn-res" class"btn-res2">${preguntas.Result[2]}</button> 
// <button value="${preguntas.Result[3]}"id="btn-res" class"btn-res3">${preguntas.Num1 + preguntas.Num2}</button>`

function crearbotones(){
    preguntas.Result.forEach((element)=> {
        
        respuestas.innerHTML+=`<button value="${element}" id="btn-res" class"btn-res">${element}</button> `
        btnres = document.querySelectorAll("#btn-res")
        
    });
}
// btnres.forEach(element => {
    
//     element.addEventListener('click', ()=>{
//         validate(element.value)
//     })   
// });

function validate(respuesta){


    if(respuesta == respuestica){
        alert("bien")
        correctas += 1
        return location.reload()
    }
    incorrectas += 1

    return alert("mal")

}
// btnres.addEventListener("click", validate(element))
// validate()  