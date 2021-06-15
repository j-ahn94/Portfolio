
const body = document.getElementById('body');
const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('menu-list')
var closeMenu = document.getElementById('menuControlClose');

closeMenu.addEventListener('click', function(e) {
    navUL.classList.toggle('menu--active');
});

/*hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});*/