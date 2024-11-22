document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Scroll fino alla sezione corrispondente
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Chiudi la navbar se è aperta
        const navCheckbox = document.querySelector("#check");
        if (navCheckbox && navCheckbox.checked) {
            navCheckbox.checked = false;
        }
    });
});

window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    if (window.pageYOffset > 0) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

$(document).ready(function() {
    $(".navbar a").on("click", function() {
        // Chiude la navbar automaticamente
        $(".navbar").removeClass("open");
        $("#check").prop("checked", false);

        // Scorre fino alla sezione target
        var target = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });
});





