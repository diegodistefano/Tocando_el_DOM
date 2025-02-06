const nombreInput = document.getElementById("nombre");
const mensajeNombre = document.getElementById("mensaje-nombre");

// Expresión regular para verificar si el usuario ya ha escrito algo
const regexTexto = /.+/;

// Evento mouseover para mostrar el mensaje de información si el campo está vacío
nombreInput.addEventListener("mouseover", function() {
    if (!regexTexto.test(this.value.trim())) { // Solo muestra el mensaje si el campo está vacío
        mensajeNombre.textContent = "Debe rellenar el campo Nombre.";
        mensajeNombre.style.display = "inline"; // Mostrar mensaje

        // Ocultar el mensaje después de 3 segundos
        setTimeout(() => {
            mensajeNombre.style.display = "none";
        }, 3000);
    }
});

// Evento input para ocultar el mensaje cuando el usuario empiece a escribir
nombreInput.addEventListener("input", function() {
    mensajeNombre.style.display = "none"; // Ocultar mensaje si el usuario escribe
});



nombreInput.addEventListener("input", function() {    
    // Cuando el usuario escriba algo, eliminamos el event listener del "click" para que no vuelva a mostrar la alerta
    this.removeEventListener("click", arguments.callee);
});




//Evento en Telefono
const telefonoInput = document.getElementById("telefono");
const mensajeInfo = document.getElementById("mensaje-info");
const mensajeError = document.getElementById("mensaje-error");

// Expresión regular que permite solo 9 dígitos numéricos
const regex = /^[0-9]{9}$/; 

// Evento mouseover para mostrar información solo si el campo no está completo
telefonoInput.addEventListener("mouseover", function() {
    if (!regex.test(this.value.trim())) { // Solo muestra el mensaje si el valor es incorrecto
        mensajeInfo.textContent = "Escriba al menos 9 números sin espacios, y solo números.";
        mensajeInfo.style.display = "inline";

        // Ocultar el mensaje después de 3 segundos
        setTimeout(() => {
            mensajeInfo.style.display = "none";
        }, 3000);
    }
});

// Evento blur para validar si el usuario ha escrito 9 números
telefonoInput.addEventListener("blur", function() {
    let telefonoValor = this.value.trim();

    if (!regex.test(telefonoValor)) {
        mensajeError.textContent = "Debe escribir 9 números.";
        mensajeError.style.display = "inline"; // Mostrar mensaje de error
    } else {
        mensajeError.style.display = "none"; // Ocultar mensaje de error si es correcto
    }
});