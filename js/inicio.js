// Lee la sesion y muestra el nombre. Si no hay sesion, va al login.

var saludo = document.getElementById('saludo');
var sesionGuardada = localStorage.getItem('ipap_sesion');

if (!sesionGuardada) {
    window.location.href = 'index.html';
} else {
    var sesion = JSON.parse(sesionGuardada);

    if (saludo && sesion.nombre) {
        saludo.textContent = 'Hola, ' + sesion.nombre;
    }
}

var botonCerrar = document.getElementById('cerrar-sesion');

if (botonCerrar) {
    botonCerrar.addEventListener('click', function () {
        localStorage.removeItem('ipap_sesion');
        window.location.href = 'index.html';
    });
}
