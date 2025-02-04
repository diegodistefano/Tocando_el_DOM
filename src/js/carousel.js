var firstIndex = 0; // Variable que almacena el índice de la imagen actual en el carrusel.

function automaticSlide() {
    setTimeout(automaticSlide, 2000); // Llama a la función cada 2 segundos para crear el efecto de carrusel automático.

    var pics; // Variable usada como contador en el bucle.
    // const img = document.querySelectorAll('img');
    const img = [
        document.querySelector('#imagen1'),
        document.querySelector('#imagen2'),
        document.querySelector('#imagen3'),
        document.querySelector('#imagen4'),
    ];

    // Selecciona todas las etiquetas <img> en la página.

    // Bucle para ocultar todas las imágenes
    for (pics = 0; pics < img.length; pics++) { 
        img[pics].style.display = "none"; // Oculta cada imagen estableciendo display en "none".
    }

    firstIndex++; // Incrementa el índice para mostrar la siguiente imagen.

    // Si el índice es mayor que la cantidad de imágenes, reinicia el índice a 1.
    if (firstIndex > img.length) { 
        firstIndex = 1;
    }

    // Muestra la imagen correspondiente restando 1 al índice (porque los arrays comienzan en 0).
    img[firstIndex - 1].style.display = "block";
}

automaticSlide(); // Llama a la función para iniciar el carrusel automático.
