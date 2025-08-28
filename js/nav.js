const botonAbrirMenu = document.querySelector('.open-menu');

botonAbrirMenu.addEventListener('click', () => {
    document.getElementById('mobile-navbar').style.width = '50%';
});

function cerrarMenu(){
    document.getElementById('mobile-navbar').style.width = '0%';
};