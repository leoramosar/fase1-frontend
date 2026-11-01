// Login. Busca el usuario en la lista guardada en JSON.

var formLogin = document.getElementById('form-login');

function mostrarError(id, mensaje) {
    var el = document.getElementById(id);
    el.textContent = mensaje;
    el.classList.remove('hidden');
}

function limpiarErrores() {
    document.getElementById('error-usuario').classList.add('hidden');
    document.getElementById('error-clave').classList.add('hidden');
}

formLogin.addEventListener('submit', function (e) {
    e.preventDefault();
    limpiarErrores();

    var usuario = document.getElementById('usuario').value.trim();
    var clave = document.getElementById('clave').value;

    if (usuario.length < 3) {
        mostrarError('error-usuario', 'Ingresá tu usuario o legajo');
        return;
    }

    if (clave.length < 4) {
        mostrarError('error-clave', 'La contraseña debe tener al menos 4 caracteres');
        return;
    }

    var lista = getUsuarios();
    var encontrado = null;

    for (var i = 0; i < lista.length; i++) {
        if (
            lista[i].usuario.toLowerCase() === usuario.toLowerCase() &&
            lista[i].clave === clave
        ) {
            encontrado = lista[i];
            break;
        }
    }

    if (encontrado === null) {
        mostrarError('error-clave', 'Usuario o contraseña incorrectos');
        return;
    }

    // Guardamos la sesion
    var sesion = {
        usuario: encontrado.usuario,
        nombre: encontrado.nombre
    };

    localStorage.setItem('ipap_sesion', JSON.stringify(sesion));
    window.location.href = 'inicio.html';
});
