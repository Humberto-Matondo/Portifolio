const contactForm = document.getElementById('contact-forms'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_wnuavai', 'template_gapxnea', '#contact-forms', 'tbQSaHEejOh-xIovo')
        .then(() => {
            // Exibe uma mensagem de sucesso
            alert('Message sent sucessfully ✅');
            // Recarrega a página após 2 segundos
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        })
        .catch((error) => {
            // Exibe uma mensagem de erro
            alert('Message not sent: ' + error.message);
        });
}

contactForm.addEventListener('submit', sendEmail)