document.addEventListener('DOMContentLoaded', () => {
    // Chiude la navbar quando clicchi un link interno
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Scorri fino alla sezione corrispondente
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Chiudi la navbar
            const navCheckbox = document.querySelector("#check");
            if (navCheckbox && navCheckbox.checked) {
                navCheckbox.checked = false;
            }
        });
    });

    // Chiudi la navbar quando scrolli la pagina
    window.addEventListener("scroll", function () {
        const navCheckbox = document.querySelector("#check");
        if (navCheckbox && navCheckbox.checked) {
            navCheckbox.checked = false;
        }
    });

    // Chiudi la navbar quando clicchi fuori di essa
    document.addEventListener('click', function (e) {
        const nav = document.querySelector('nav');
        const navCheckbox = document.querySelector("#check");

        if (navCheckbox && navCheckbox.checked && !nav.contains(e.target)) {
            navCheckbox.checked = false;
        }
    });

    // Cambia aspetto della navbar durante lo scrolling
    window.addEventListener("scroll", function () {
        const nav = document.querySelector("nav");
        if (window.pageYOffset > 0) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });
});
