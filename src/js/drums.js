const drums_pieces = {
    "crash_1": {
        audio: "crash1-high.mp3"
    },
    "splash": {
        audio: "splash-high.mp3"
    },
    "ride": {
        audio: "ride-high.mp3"
    },
    "china": {
        audio: "china-high.mp3"
    },
    "crash_2": {
        audio: "crash2-high.mp3"
    },
    "kick_1": {
        audio: "kick-high.mp3"
    },
    "tom1": {
        audio: "tom1-high.mp3"
    },
    "tom2": {
        audio: "tom2-high.mp3"
    },
    "tom3": {
        audio: "tom3-high.mp3"
    },
    "kick_2": {
        audio: "kick-high.mp3"
    },
    "hihat": {
        audio: "hh-high.mp3"
    },
    "sticks": {
        audio: "sticks-high.mp3"
    },
    "snare": {
        audio: "snare-high.mp3"
    }
}

document.addEventListener("click", function (e) {
    if (drums_pieces[e.target.id] == undefined) {
        return;
    } else {
        e.target.classList.toggle("dark");
        let audio = new Audio("./../public/sound/drums/" + drums_pieces[e.target.id].audio);
        audio.play();
        setTimeout(() => {
            e.target.classList.toggle("dark");
        }, 300);
    }

});

const acc = document.querySelectorAll(".accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
