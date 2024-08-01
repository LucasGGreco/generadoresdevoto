let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav a');
let nav = document.querySelector('nav');
let logo = document.querySelector('nav img');

window.onscroll = () => {
    let isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

    sections.forEach(sec => {
        let top = window.scrollY + 150;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= 500) {
            nav.classList.add('nav-scrolled');
            logo.classList.add('img-logo-scrolled');       
        } else if (top < 500){
            nav.classList.remove('nav-scrolled');
            logo.classList.remove('img-logo-scrolled');
        }

        // Verifica si es el último enlace y si el scroll está en la parte inferior de la página
        if (top >= offset && (top < offset + height || (id === 'contacto' && top + window.innerHeight >= document.body.offsetHeight))) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav a[href*=' + id + ']').classList.add('active');
            });
        };

        if (isBottom){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav a[href*=' + 'contacto' + ']').classList.add('active');
            });
        }


    });
};