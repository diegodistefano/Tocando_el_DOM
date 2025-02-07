//Codigo de JS del Piano
let nota = document.querySelectorAll(".nota");

let sonidosArray_src = [
  "../public/sound/DO4.mp3",
  "../public/sound/REb4.mp3",
  "../public/sound/RE4.mp3",
  "../public/sound/MIb4.mp3",
  "../public/sound/MI4.mp3",
  "../public/sound/FA4.mp3",
  "../public/sound/SOLb4.mp3",
  "../public/sound/SOL4.mp3",
  "../public/sound/LAb4.mp3",
  "../public/sound/LA4.mp3",
  "../public/sound/SIb4.mp3",
  "../public/sound/SI4.mp3",
  "../public/sound/DO5.mp3",
  "../public/sound/REb5.mp3",
  "../public/sound/RE5.mp3",
  "../public/sound/MIb5.mp3",
  "../public/sound/MI5.mp3",
];

let notasTeclado = {
  a: 0,  // DO4
  w: 1,  // REb4
  s: 2,  // RE4
  e: 3,  // MIb4
  d: 4,  // MI4
  f: 5,  // FA4
  t: 6,  // SOLb4
  g: 7,  // SOL4
  y: 8,  // LAb4
  h: 9,  // LA4
  u: 10, // SIb4
  j: 11, // SI4
  k: 12, // DO5
  o: 13, // REb5
  l: 14, // RE5
  p: 15, // MIb5
  ñ: 16, // MI5
};

for (let i = 0; i < nota.length; i++) {
  nota[i].addEventListener("click", () => {
    reproducirNota(i);
  });
}

document.addEventListener("keydown", (e) => {
  let letraPresionada = notasTeclado[e.key];
  if (letraPresionada !== undefined) {
    reproducirNota(letraPresionada);
  }
});

function reproducirNota(i) {
  let sonido = new Audio(sonidosArray_src[i]);
  let presion = nota[i];

  presion.classList.add("presionada");

  sonido.play();

  setTimeout(() => {
    presion.classList.remove("presionada");
  }, 500);
}
