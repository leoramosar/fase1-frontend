// Panel de Laura Rios.
// Solo carga notas de Economia del sector publico (id 4).
// Regla: parciales >= 6 para poder cargar el final.

var MATERIA_ID = 4; // Economia del sector publico

var parcial1 = document.getElementById('parcial1');
var parcial2 = document.getElementById('parcial2');
var final = document.getElementById('final');
var aviso = document.getElementById('aviso');
var error = document.getElementById('error');
var exito = document.getElementById('exito');
var botones = document.getElementById('botones');
var btnEditar = document.getElementById('btn-editar');
var btnCancelar = document.getElementById('btn-cancelar');
var form = document.getElementById('form-notas');
var tabla = document.getElementById('tabla');
var promedio = document.getElementById('promedio');

var editando = false;

// Busca la materia de Laura en la lista
function getMateriaLaura() {
    var lista = getMaterias();
    for (var i = 0; i < lista.length; i++) {
        if (lista[i].id === MATERIA_ID) {
            return lista[i];
        }
    }
    return null;
}

// Muestra los datos en los inputs y en la tabla
function mostrarDatos() {
    var m = getMateriaLaura();
    if (!m) return;

    parcial1.value = m.parcial1 !== null ? m.parcial1 : '';
    parcial2.value = m.parcial2 !== null ? m.parcial2 : '';
    final.value = m.nota !== null ? m.nota : '';

    // Tabla solo de su materia
    var p1 = m.parcial1 !== null ? m.parcial1 : '-';
    var p2 = m.parcial2 !== null ? m.parcial2 : '-';
    var n = m.nota !== null ? m.nota : '-';

    tabla.innerHTML =
        '<tr class="border-t border-barra/10">' +
        '<td class="px-4 py-3">' + m.nombre + '</td>' +
        '<td class="px-4 py-3">' + p1 + '</td>' +
        '<td class="px-4 py-3">' + p2 + '</td>' +
        '<td class="px-4 py-3">' + n + '</td>' +
        '<td class="px-4 py-3">' + m.estado + '</td>' +
        '</tr>';

    // Promedio del alumno (todas las materias con final)
    var lista = getMaterias();
    var suma = 0;
    var cant = 0;
    for (var i = 0; i < lista.length; i++) {
        if (lista[i].nota !== null) {
            suma = suma + Number(lista[i].nota);
            cant = cant + 1;
        }
    }
    if (cant === 0) {
        promedio.textContent = 'Promedio: -';
    } else {
        promedio.textContent = 'Promedio: ' + (suma / cant).toFixed(2);
    }
}

function bloquear() {
    editando = false;
    parcial1.disabled = true;
    parcial2.disabled = true;
    final.disabled = true;
    botones.classList.add('hidden');
    btnEditar.disabled = false;
    btnEditar.className = 'rounded-full bg-barra px-4 py-2 text-sm font-semibold text-white hover:bg-verde';
    aviso.textContent = 'Tocá "Editar" para modificar.';
    aviso.className = 'mt-1 text-xs text-muted';
    error.classList.add('hidden');
}

function desbloquear() {
    editando = true;
    parcial1.disabled = false;
    parcial2.disabled = false;
    botones.classList.remove('hidden');
    btnEditar.disabled = true;
    btnEditar.className = 'rounded-full bg-slate-300 px-4 py-2 text-sm font-semibold text-slate-500';

    // El final solo si los 2 parciales estan aprobados
    var p1 = Number(parcial1.value);
    var p2 = Number(parcial2.value);

    if (parcial1.value !== '' && parcial2.value !== '' && p1 >= 6 && p2 >= 6) {
        final.disabled = false;
        aviso.textContent = 'Puede rendir final: los 2 parciales están aprobados.';
        aviso.className = 'mt-1 text-xs text-muted';
    } else {
        final.disabled = true;
        aviso.textContent = 'No puede cargar final: faltan parciales aprobados (6 o más).';
        aviso.className = 'mt-1 text-xs text-red-600';
    }
}

btnEditar.addEventListener('click', function () {
    desbloquear();
});

btnCancelar.addEventListener('click', function () {
    mostrarDatos();
    bloquear();
});

parcial1.addEventListener('input', function () {
    if (editando) desbloquear();
});

parcial2.addEventListener('input', function () {
    if (editando) desbloquear();
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    error.classList.add('hidden');
    exito.classList.add('hidden');

    var p1 = parcial1.value === '' ? null : Number(parcial1.value);
    var p2 = parcial2.value === '' ? null : Number(parcial2.value);
    var fin = final.value === '' ? null : Number(final.value);

    if (p1 !== null && (p1 < 1 || p1 > 10)) {
        error.textContent = 'Parcial 1 debe ser entre 1 y 10.';
        error.classList.remove('hidden');
        return;
    }

    if (p2 !== null && (p2 < 1 || p2 > 10)) {
        error.textContent = 'Parcial 2 debe ser entre 1 y 10.';
        error.classList.remove('hidden');
        return;
    }

    if (fin !== null) {
        if (fin < 1 || fin > 10) {
            error.textContent = 'El final debe ser entre 1 y 10.';
            error.classList.remove('hidden');
            return;
        }
        if (p1 === null || p2 === null || p1 < 6 || p2 < 6) {
            error.textContent = 'No se puede guardar el final sin los 2 parciales aprobados.';
            error.classList.remove('hidden');
            return;
        }
    }

    var lista = getMaterias();
    for (var i = 0; i < lista.length; i++) {
        if (lista[i].id === MATERIA_ID) {
            lista[i].parcial1 = p1;
            lista[i].parcial2 = p2;

            if (fin !== null && p1 >= 6 && p2 >= 6) {
                lista[i].nota = fin;
                lista[i].estado = 'Finalizado';
            } else {
                lista[i].nota = null;
                lista[i].estado = 'En curso';
            }
            break;
        }
    }

    guardarMaterias(lista);
    mostrarDatos();
    bloquear();

    exito.textContent = 'Notas guardadas correctamente.';
    exito.classList.remove('hidden');
    setTimeout(function () {
        exito.classList.add('hidden');
    }, 3000);
});

// Al cargar la pagina
mostrarDatos();
bloquear();
