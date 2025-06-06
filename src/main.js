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

// Theme switcher logic
const lightModeBtn = document.getElementById('lightModeBtn');
const darkModeBtn = document.getElementById('darkModeBtn');
const lightModeBtnMobile = document.getElementById('lightModeBtnMobile');
const darkModeBtnMobile = document.getElementById('darkModeBtnMobile');
const body = document.body;

const THEME_KEY = 'themePreference';

// Function to apply the theme
function applyTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        if(darkModeBtn) darkModeBtn.style.display = 'none';
        if(lightModeBtn) lightModeBtn.style.display = 'inline-block'; // or 'block' if it's a block element
        if(darkModeBtnMobile) darkModeBtnMobile.style.display = 'none';
        if(lightModeBtnMobile) lightModeBtnMobile.style.display = 'block';

    } else {
        document.documentElement.classList.remove('dark');
        if(lightModeBtn) lightModeBtn.style.display = 'none';
        if(darkModeBtn) darkModeBtn.style.display = 'inline-block'; // or 'block'
        if(lightModeBtnMobile) lightModeBtnMobile.style.display = 'none';
        if(darkModeBtnMobile) darkModeBtnMobile.style.display = 'block';
    }
}

function setTheme(theme) {
    applyTheme(theme);
    localStorage.setItem(THEME_KEY, theme);
}

if (lightModeBtn && darkModeBtn) {
    lightModeBtn.addEventListener('click', () => setTheme('light'));
    darkModeBtn.addEventListener('click', () => setTheme('dark'));
}

if (lightModeBtnMobile && darkModeBtnMobile) {
    lightModeBtnMobile.addEventListener('click', () => setTheme('light'));
    darkModeBtnMobile.addEventListener('click', () => setTheme('dark'));
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme('light');
    }
});