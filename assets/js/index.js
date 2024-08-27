const tarjetas = document.querySelectorAll(".card")
const parrafos =document.querySelectorAll(".sobremi p")
const formulario = document.getElementById("formulario")
let span = document.querySelector("#mensaje")


tarjetas.forEach(tarjeta => {
    
    tarjeta.addEventListener("mouseover", function() {
        tarjeta.style.boxShadow = "0 4px 16px rgba(0,0,0, 1)"
    })

    tarjeta.addEventListener("mouseout", function() {
        tarjeta.style.boxShadow = "none"
        
    })
    
});

parrafos.forEach(parrafo => {
    
    parrafo.addEventListener("mouseover", function() {
        parrafo.style.color = "#e7562e"
        parrafo.style.fontSize = "1.5rem"
        
    })

    parrafo.addEventListener("mouseout", function() {
        parrafo.style.color = "black"
        parrafo.style.fontSize = "1.25rem"
        
    })
    
});

formulario.addEventListener("submit", function(e) {
    e.preventDefault()
    let nombre = document.querySelector("#nombre").value
    
        mensaje.textContent = `Hola ${nombre} he recibido tu mensaje, pronto me contactaré contigo`
        mensaje.style.color = "#e7562e"
        mensaje.style.fontSize = "1.5rem"
        mensaje.style.textAlign = "center"

        setTimeout(()=> {
            mensaje.style.display= "none"
        }, 3000)

    this.reset();    
})

