const botonCerrarMenu = document.querySelector('.close-menu');
const botonAbrirMenu = document.querySelector('.open-menu');

botonAbrirMenu.addEventListener('click', () => {
    document.getElementById('mobile-navbar').style.width = '50%';
});

botonCerrarMenu.addEventListener('click', () => {
    document.getElementById('mobile-navbar').style.width = '0%';
});