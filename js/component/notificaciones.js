// Panel de notificaciones con estado "leídas" en localStorage.
// Si el usuario ya abrió el panel, el badge no se muestra.

const CLAVE_NOTIF_LIDAS = 'ipap_notif_lidas';

const boton = document.getElementById('abrir-notificaciones');
const panel = document.getElementById('panel-notificaciones');
const badge = boton ? boton.querySelector('span') : null;

// --- Persistencia ---

function notificacionesLeidas() {
    return localStorage.getItem(CLAVE_NOTIF_LIDAS) === 'true';
}

function marcarComoLeidas() {
    localStorage.setItem(CLAVE_NOTIF_LIDAS, 'true');
    if (badge) badge.classList.add('hidden');
}

function marcarComoNoLeidas() {
    localStorage.removeItem(CLAVE_NOTIF_LIDAS);
    if (badge) badge.classList.remove('hidden');
}

// --- Render inicial del badge ---

if (badge && notificacionesLeidas()) {
    badge.classList.add('hidden');
}

// --- Abrir / cerrar panel ---

if (boton && panel) {
    boton.addEventListener('click', function () {
        const estaAbierto = !panel.classList.contains('hidden');
        panel.classList.toggle('hidden');

        // Si lo estamos abriendo, marcamos como leídas
        if (!estaAbierto) {
            marcarComoLeidas();
        }
    });

    panel.addEventListener('click', function (evento) {
        if (evento.target.id === 'fondo-notificaciones' || evento.target.closest('[data-cerrar]')) {
            panel.classList.add('hidden');
        }
    });
}

// --- Botón opcional para volver a probar ---

const botonReset = document.getElementById('reset-notificaciones');
if (botonReset) {
    botonReset.addEventListener('click', function () {
        marcarComoNoLeidas();
    });
}