//Codigo de JS del Piano
let nota = document.querySelectorAll('.nota');

let sonidosArray_src = ["../public/sound/DO4.mp3", "../public/sound/REb4.mp3", "../public/sound/RE4.mp3", "../public/sound/MIb4.mp3", "../public/sound/MI4.mp3", "../public/sound/FA4.mp3", "../public/sound/SOLb4.mp3", "../public/sound/SOL4.mp3", "../public/sound/LAb4.mp3", "../public/sound/LA4.mp3", "../public/sound/SIb4.mp3", "../public/sound/SI4.mp3", "../public/sound/DO5.mp3", "../public/sound/REb5.mp3", "../public/sound/RE5.mp3", "../public/sound/MIb5.mp3", "../public/sound/MI5.mp3"];

for (let i = 0; i < nota.length; i++) {
    nota[i].addEventListener('click', (e) => {  
        let sonido = new Audio(sonidosArray_src[i]);
        sonido.play();
    });
}
