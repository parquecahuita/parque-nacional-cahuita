document.addEventListener('DOMContentLoaded', () => {
    // 1. Mensaje dinámico según el horario del visitante
    const heroOverlay = document.querySelector('.hero-overlay');
    const hora = new Date().getHours();
    let saludo = '';

    if (hora >= 5 && hora < 12) {
        saludo = '¡Buenos días! Un excelente momento para recorrer los senderos.';
    } else if (hora >= 12 && hora < 18) {
        saludo = '¡Buenas tardes! Ideal para disfrutar del mar y el arrecife.';
    } else {
        saludo = '¡Buenas noches! Prepara tu visita para mañana.';
    }

    const mensajeEl = document.createElement('p');
    mensajeEl.className = 'saludo-dinamico';
    mensajeEl.textContent = saludo;
    heroOverlay.appendChild(mensajeEl);

    // 2. Botón flotante para volver arriba
    const btnArriba = document.createElement('button');
    btnArriba.id = 'btn-arriba';
    btnArriba.innerHTML = '↑';
    btnArriba.title = 'Volver arriba';
    document.body.appendChild(btnArriba);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 250) {
            btnArriba.classList.add('visible');
        } else {
            btnArriba.classList.remove('visible');
        }
    });

    btnArriba.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 3. Contador de especies observadas
    let contadorEspecies = 0;
    const btnRegistrar = document.getElementById('btn-registrar');
    const contadorEl = document.getElementById('contador-fauna');

    if (btnRegistrar && contadorEl) {
        btnRegistrar.addEventListener('click', () => {
            contadorEspecies++;
            contadorEl.textContent = contadorEspecies;
        });
    }
});