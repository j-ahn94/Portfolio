const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('menu-list')

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});