document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Quando l'utente scrolla la pagina
window.onscroll = function() {
    fixNavbar();
    fadeHome();
};
// Ottieni la navbar
var navbar = document.querySelector('.navbar');
// Ottieni la sezione home
var homeSection = document.querySelector('.home');
// Ottieni l'offset della navbar rispetto alla parte alta della pagina
var sticky = navbar.offsetTop;
// Funzione per aggiungere o rimuovere la classe "fixed" dalla navbar
function fixNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
}
// Funzione per gestire la dissolvenza della sezione home
function fadeHome() {
    // Calcola l'opacità in base alla quantità di scroll
    var opacity = 1 - (window.pageYOffset / (window.innerHeight * 0.8));
    // Limita il valore dell'opacità tra 0 e 1
    if (opacity >= 0) {
        homeSection.style.opacity = opacity;
    }
}