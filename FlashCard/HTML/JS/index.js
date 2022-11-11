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