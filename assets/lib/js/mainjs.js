$(document).ready(function(){
    ScrollReveal({ reset: true });
    ScrollReveal().reveal('.headline');			// jQuery methods go here...

    ScrollReveal().reveal('.headline', { 
        delay: 1000,
        distance: '30px',
        origin: 'right'
    });
    ScrollReveal().reveal('.container');			// jQuery methods go here...

    ScrollReveal().reveal('.container', { 
        delay: 1000,
        distance: '30px',
        origin: 'bottom'
    });
});
