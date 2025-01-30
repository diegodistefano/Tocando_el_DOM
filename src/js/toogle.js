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

// nav dropdown
let dropdown = menu.querySelector('.dropdown');
let menuDropdown = document.querySelector('.dropdown-list');
dropdown.addEventListener('click', function () {
    if (window.innerWidth <= 768) {
        return;
    }
    // let submenu = menu.querySelector('.submenu');
    // if (submenu.style.display == 'none') {
    //     submenu.style.display = 'block';
    // } else {
    //     submenu.style.display = 'none';
    // }
    if (dropdown.classList.replace('fa-caret-down', 'fa-caret-up')) {
        menuDropdown.setAttribute('class', 'dropdown-list dropdown-list-active');
    } else {
        menuDropdown.setAttribute('class', 'dropdown-list');
        dropdown.classList.replace('fa-caret-up', 'fa-caret-down')
    }
    // console.log(dropdown.classList.replace('fa-caret-down','fa-caret-up'));


})