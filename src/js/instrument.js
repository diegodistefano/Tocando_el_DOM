//Codigo de JS del Piano
let nota = document.querySelectorAll('.nota');

let sonidosArray_src = ["../public/sound/Do.mp3", "../public/sound/Re.mp3", "../public/sound/Mi.mp3", "../public/sound/Fa.mp3", "../public/sound/Sol.mp3", "../public/sound/La.mp3", "../public/sound/Si.mp3"];

for (let i = 0; i < nota.length; i++) {
    nota[i].addEventListener('click', (e) => {  
        let sonido = new Audio(sonidosArray_src[i]);
        sonido.play();
    });
}


//const notaArray = Array.from(nota);


// const indice = notaArray.indexOf(e.target);
// console.log('Nota ' + (indice + 1) + ' del array: ' + e.target.textContent);

/*
for(let i = 0; i<nota.length;i++){
    nota[i].addEventListener('click', (e) => {  
    console.log('Nota ' + notaArray.from(nota).indexOf(e.target) + ' del array');
  });
}

let sonidos_src = "../public/sound/tecla-do.mp3";

for(let i = 0; i<sonidosArray_src.length;i++){
    sonidosArray_src[i].addEventListener('click', (e) => {  
        return e.sonidosArray_src[i];
    });
}

sonido.src = sonidosArray_src[i];
*/