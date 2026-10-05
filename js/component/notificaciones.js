const boton = document.getElementById('abrir-notificaciones');
const panel = document.getElementById('panel-notificaciones');

if (boton && panel) {
    boton.addEventListener('click', function () {
        panel.classList.toggle('hidden');
    });

    panel.addEventListener('click', function (evento) {
        if (evento.target.id === 'fondo-notificaciones' || evento.target.closest('[data-cerrar]')) {
            panel.classList.add('hidden');
        }
    });
}
