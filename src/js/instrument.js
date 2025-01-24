//Codigo de JS del Piano

let boton = document.querySelector(".reproductor")

    boton.addEventListener("click", () => {
      let etiquetaAudio = document.createElement("audio")
      etiquetaAudio.setAttribute("src", "ubicación de tu archivo de audio")
      etiquetaAudio.play()
    })