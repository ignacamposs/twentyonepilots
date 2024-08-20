// Seleccionar el botón toggle y los enlaces del navbar
const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

// Agregar evento de clic al botón toggle
toggleButton.addEventListener('click', () => {
    // Alternar la clase 'active' en los enlaces del navbar
    navbarLinks.classList.toggle('active');
});
