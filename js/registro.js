// Registro de alumno. Guarda los datos en localStorage (JSON).

var formRegistro = document.getElementById('form-registro');

function mostrarError(id, mensaje) {
    var el = document.getElementById(id);
    el.textContent = mensaje;
    el.classList.remove('hidden');
}

function limpiarErrores() {
    document.getElementById('error-nombre').classList.add('hidden');
    document.getElementById('error-usuario').classList.add('hidden');
    document.getElementById('error-email').classList.add('hidden');
    document.getElementById('error-clave').classList.add('hidden');
    document.getElementById('error-clave2').classList.add('hidden');
}

formRegistro.addEventListener('submit', function (e) {
    e.preventDefault();
    limpiarErrores();

    var nombre = document.getElementById('nombre').value.trim();
    var usuario = document.getElementById('usuario').value.trim();
    var email = document.getElementById('email').value.trim();
    var clave = document.getElementById('clave').value;
    var clave2 = document.getElementById('clave2').value;

    var hayError = false;

    if (nombre.length < 3) {
        mostrarError('error-nombre', 'Ingresá tu nombre completo');
        hayError = true;
    }

    if (usuario.length < 3) {
        mostrarError('error-usuario', 'Ingresá un usuario o legajo');
        hayError = true;
    }

    if (email.indexOf('@') === -1) {
        mostrarError('error-email', 'Ingresá un email válido');
        hayError = true;
    }

    if (clave.length < 4) {
        mostrarError('error-clave', 'La contraseña debe tener al menos 4 caracteres');
        hayError = true;
    }

    if (clave !== clave2) {
        mostrarError('error-clave2', 'Las contraseñas no coinciden');
        hayError = true;
    }

    if (hayError) {
        return;
    }

    // Traemos la lista actual
    var lista = getUsuarios();

    // Revisamos si el usuario ya existe
    for (var i = 0; i < lista.length; i++) {
        if (lista[i].usuario.toLowerCase() === usuario.toLowerCase()) {
            mostrarError('error-usuario', 'Ese usuario ya está registrado');
            return;
        }
    }

    // Armamos el nuevo alumno
    var nuevo = {
        nombre: nombre,
        usuario: usuario,
        email: email,
        clave: clave
    };

    lista.push(nuevo);
    guardarUsuarios(lista);

    alert('Cuenta creada. Ya podés ingresar.');
    window.location.href = 'index.html';
});
