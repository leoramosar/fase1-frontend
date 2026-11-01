// Buscar materias en la tabla del perfil

var inputBuscar = document.getElementById('buscar-materia');
var btnBuscar = document.getElementById('btn-buscar');
var btnLimpiar = document.getElementById('btn-limpiar');
var cuerpoTabla = document.getElementById('tabla-materias');

function buscarMaterias() {
    if (!inputBuscar || !cuerpoTabla) {
        return;
    }

    var texto = inputBuscar.value.toLowerCase().trim();
    var filas = cuerpoTabla.getElementsByTagName('tr');

    for (var i = 0; i < filas.length; i++) {
        var nombreMateria = filas[i].cells[0].textContent.toLowerCase();

        if (texto === '' || nombreMateria.indexOf(texto) !== -1) {
            filas[i].style.display = '';
        } else {
            filas[i].style.display = 'none';
        }
    }
}

function limpiarBusqueda() {
    if (!inputBuscar || !cuerpoTabla) {
        return;
    }

    inputBuscar.value = '';

    var filas = cuerpoTabla.getElementsByTagName('tr');
    for (var i = 0; i < filas.length; i++) {
        filas[i].style.display = '';
    }
}

if (btnBuscar) {
    btnBuscar.addEventListener('click', function () {
        buscarMaterias();
    });
}

if (btnLimpiar) {
    btnLimpiar.addEventListener('click', function () {
        limpiarBusqueda();
    });
}

if (inputBuscar) {
    inputBuscar.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            buscarMaterias();
        }
    });
}
