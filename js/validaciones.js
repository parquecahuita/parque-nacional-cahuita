document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('form');

    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            const nombre = document.querySelector('#nombre');
            const email = document.querySelector('#email');
            const mensaje = document.querySelector('#mensaje');

            // Validación simple para asegurar que los campos no estén vacíos
            if (nombre && email && mensaje) {
                if (nombre.value.trim() === '' || email.value.trim() === '' || mensaje.value.trim() === '') {
                    e.preventDefault(); // Evita que se envíe el formulario
                    alert('Por favor, complete todos los campos antes de enviar su mensaje.');
                } else {
                    // Opcional: alerta de éxito temporal antes del envío
                    alert('¡Mensaje enviado con éxito! Gracias por contactarnos.');
                }
            }
        });
    }
});