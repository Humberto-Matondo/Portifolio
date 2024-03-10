const sr = ScrollReveal(
    {
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400,
        reset: true,
    }
)

sr.reveal('.home-image', { origin: 'bottom', interval: 500 })

sr.reveal('.about-img', { origin: 'right', })
sr.reveal('.about-text', { origin: 'left', })

sr.reveal('.skill__container .skills__container', { interval: 500 })
sr.reveal('.container-proj .card-proj', { interval: 500 })

sr.reveal('.contact-text', { origin: 'right', })
sr.reveal('.contact-form', { origin: 'left', })
