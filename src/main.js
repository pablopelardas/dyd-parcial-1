// Seleccionar elementos del DOM
const openMenuButton = document.getElementById('openMenuButton');
const mobileMenu = document.getElementById('mobile-menu');
const menuClosedIcon = document.getElementById('menuClosedIcon');
const menuOpenedIcon = document.getElementById('menuOpenedIcon');

// Estado inicial: menú cerrado
let isMenuOpen = false;

// Función para alternar el menú
function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        // Mostrar menú y cambiar icono
        mobileMenu.classList.remove('hidden');
        menuClosedIcon.classList.add('hidden');
        menuOpenedIcon.classList.remove('hidden');
        openMenuButton.setAttribute('aria-expanded', 'true');
    } else {
        // Ocultar menú y cambiar icono
        mobileMenu.classList.add('hidden');
        menuClosedIcon.classList.remove('hidden');
        menuOpenedIcon.classList.add('hidden');
        openMenuButton.setAttribute('aria-expanded', 'false');
    }
}

// Añadir event listener al botón
openMenuButton.addEventListener('click', toggleMenu);