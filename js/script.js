// Confirmación interactiva al enviar el formulario de contacto
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Gracias por contactarnos! Tu mensaje sobre el Parque Nacional Cahuita ha sido enviado con éxito.');
            form.reset();
        });
    }
});