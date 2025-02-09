let buttonToggle = document.querySelector('.icon-toogle');
let menu = document.querySelector('.toogle');
let root = './';
if (buttonToggle.getAttribute('src').includes('./../')) {
    root = './../';
}

buttonToggle.addEventListener('click', function () {
    if (buttonToggle.getAttribute('src') == root + 'public/img/toogle.svg') {
        buttonToggle.setAttribute('src', (root + 'public/img/close.svg'));
        menu.setAttribute('class', 'toogle toogle-active');
    } else {
        buttonToggle.setAttribute('src', (root + 'public/img/toogle.svg'));
        menu.setAttribute('class', 'toogle');
    }
})

// nav dropdown
let dropdown = menu.querySelector('.dropdown');
let menuDropdown = document.querySelector('.dropdown-list');
let dropClick = document.querySelector('.dropdown-click');
dropClick.addEventListener('click', function () {
    if (window.innerWidth <= 768) {
        return;
    }
    if (dropdown.classList.replace('fa-caret-down', 'fa-caret-up')) {
        menuDropdown.setAttribute('class', 'dropdown-list dropdown-list-active');
    } else {
        menuDropdown.setAttribute('class', 'dropdown-list');
        dropdown.classList.replace('fa-caret-up', 'fa-caret-down')
    }
})

