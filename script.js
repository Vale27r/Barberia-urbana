document.addEventListener("DOMContentLoaded", function() {
    const menuHamburguesa = document.querySelector('.menu-hamburguesa');
    const menuDesplegable = document.querySelector('.menu-desplegable');

    menuHamburguesa.addEventListener('click', function() {
        menuDesplegable.classList.toggle('visible'); // Alternar la visibilidad del menú desplegable
    });
});
