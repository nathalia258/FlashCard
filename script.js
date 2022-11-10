let preguntas;
console.log(preguntas)
window.addEventListener("load", ()=>{
    preguntas = {
        "Num1" : azar(),
        "Num2" : azar(),
        "Result" : [
            azar1(),
            azar1(),
            azar1()
        ]
    }
    const respuestica = preguntas.Num1 * preguntas.Num2
    preguntas.Result.push(respuestica)
    console.log(preguntas)
})

const azar = ()=>{
    const number = Math.floor(Math.random() * 15)
    return number
}

const azar1 = ()=>{
    const number = Math.floor(Math.random() * 100)
    return number
}
operacion=document.querySelector(".operacion")
operacion.innerHTML=`${preguntas.Num2}`

