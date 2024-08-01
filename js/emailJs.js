window.onload = function() {
    const frmEmail = document.getElementById("frm-email")
    frmEmail.addEventListener('submit', sendEmail)
    
    const serviceId = "service_gkb2x5q"
    const templateId = "template_jvyd6a9"
    const apiKey = "zkJKW5WucHf3tOAmK"
    
    function sendEmail(event){
        event.preventDefault()
        emailjs.init(serviceId)
    
        emailjs.sendForm(serviceId, templateId, frmEmail, apiKey)
        .then(result => 
            Swal.fire("Email enviado, Muchas gracias")
        ).catch( error => 
            Swal.fire({
                icon: 'error',
                text: 'Ocurrio un error',
                customClass: {
                    confirmButton: 'my-custom-button'
                }
            })
        )
    }
}