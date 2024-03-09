const sr = ScrollReveal(
    {
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay:400,
        reset: true,
    }
)

sr.reveal('.about-img, .about-text', {interval:100})
sr.reveal('.contact-text', {origin: 'left',})
sr.reveal('.contact-form', {origin: 'right',})
sr.reveal('.skill__container', {origin: 'bottom',})
sr.reveal('.testimonial, .container-proj' , {interval:100})



