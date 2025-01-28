let buttonToggle = document.querySelector('.icon-toogle');
let menu = document.querySelector('.toogle');
buttonToggle.addEventListener('click', function () {
    if (buttonToggle.getAttribute('src') == './../public/img/toogle.svg') {
        buttonToggle.setAttribute('src', './../../public/img/close.svg');
        menu.setAttribute('class', 'toogle toogle-active');
    } else {
        buttonToggle.setAttribute('src', './../public/img/toogle.svg');
        menu.setAttribute('class', 'toogle');
    }
})
