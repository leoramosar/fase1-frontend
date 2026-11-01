// Flujo de "Nueva consulta": validar, guardar en localStorage,
// renderizar la lista y permitir eliminar.

const CLAVE_CONSULTAS = 'ipap_consultas';
const formConsulta = document.getElementById('form-consulta');
const listaConsultas = document.getElementById('lista-consultas');
const sinConsultas = document.getElementById('sin-consultas');
const exitoConsulta = document.getElementById('exito-consulta');

// --- Persistencia ---

function leerConsultas() {
    const guardadas = localStorage.getItem(CLAVE_CONSULTAS);
    if (!guardadas) return [];
    try {
        return JSON.parse(guardadas);
    } catch (error) {
        return [];
    }
}

function guardarConsultas(consultas) {
    localStorage.setItem(CLAVE_CONSULTAS, JSON.stringify(consultas));
}

// --- Validación ---

function limpiarErroresConsulta() {
    ['error-asunto', 'error-tipo', 'error-mensaje'].forEach(function (id) {
        const el = document.getElementById(id);
        if (!el) return;
        el.textContent = '';
        el.classList.add('hidden');
    });
}

function validarConsulta(asunto, tipo, mensaje) {
    const errores = {};
    if (!asunto || asunto.trim().length < 3) {
        errores.asunto = 'El asunto debe tener al menos 3 caracteres.';
    }
    if (!tipo) {
        errores.tipo = 'Elegí un tipo de consulta.';
    }
    if (!mensaje || mensaje.trim().length < 10) {
        errores.mensaje = 'El mensaje debe tener al menos 10 caracteres.';
    }
    return errores;
}

// --- Render ---

function crearTarjetaConsulta(consulta) {
    const fecha = new Date(consulta.fecha).toLocaleDateString('es-AR');
    return `
        <article class="rounded-2xl bg-white p-4 shadow-sm">
            <div class="flex flex-wrap items-center justify-between gap-2">
                <h3 class="text-base font-semibold text-barra">${consulta.asunto}</h3>
                <span class="rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-semibold text-amber-700">Pendiente</span>
            </div>
            <p class="mt-1 text-sm text-muted">Tipo: ${consulta.tipo} · ${fecha}</p>
            <p class="mt-2 text-sm text-barra">${consulta.mensaje}</p>
            <button type="button" data-eliminar="${consulta.id}"
                class="mt-3 rounded-full bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700 transition hover:bg-red-100">
                Eliminar
            </button>
        </article>
    `;
}

function renderConsultas() {
    if (!listaConsultas || !sinConsultas) return;
    const consultas = leerConsultas();

    if (consultas.length === 0) {
        listaConsultas.innerHTML = '';
        sinConsultas.classList.remove('hidden');
        return;
    }

    sinConsultas.classList.add('hidden');
    listaConsultas.innerHTML = consultas.map(crearTarjetaConsulta).join('');
}

// --- Eliminar con modal ---

var modalEliminar = document.getElementById('modal-eliminar');
var btnCancelarEliminar = document.getElementById('btn-cancelar-eliminar');
var btnConfirmarEliminar = document.getElementById('btn-confirmar-eliminar');
var fondoModal = document.getElementById('fondo-modal');
var idAEliminar = null;

function abrirModalEliminar(id) {
    idAEliminar = id;
    if (modalEliminar) {
        modalEliminar.classList.remove('hidden');
    }
}

function cerrarModalEliminar() {
    idAEliminar = null;
    if (modalEliminar) {
        modalEliminar.classList.add('hidden');
    }
}

function eliminarConsulta(id) {
    var consultas = leerConsultas().filter(function (c) {
        return c.id !== id;
    });
    guardarConsultas(consultas);
    renderConsultas();
}

if (listaConsultas) {
    listaConsultas.addEventListener('click', function (evento) {
        var boton = evento.target.closest('[data-eliminar]');
        if (!boton) return;
        var id = Number(boton.dataset.eliminar);
        abrirModalEliminar(id);
    });
}

if (btnCancelarEliminar) {
    btnCancelarEliminar.addEventListener('click', function () {
        cerrarModalEliminar();
    });
}

if (fondoModal) {
    fondoModal.addEventListener('click', function () {
        cerrarModalEliminar();
    });
}

if (btnConfirmarEliminar) {
    btnConfirmarEliminar.addEventListener('click', function () {
        if (idAEliminar !== null) {
            eliminarConsulta(idAEliminar);
        }
        cerrarModalEliminar();
    });
}

// --- Submit ---

if (formConsulta) {
    formConsulta.addEventListener('submit', function (evento) {
        evento.preventDefault();
        limpiarErroresConsulta();
        if (exitoConsulta) exitoConsulta.classList.add('hidden');

        const asunto = document.getElementById('asunto').value;
        const tipo = document.getElementById('tipo').value;
        const mensaje = document.getElementById('mensaje').value;

        const errores = validarConsulta(asunto, tipo, mensaje);

        if (Object.keys(errores).length > 0) {
            Object.keys(errores).forEach(function (campo) {
                const el = document.getElementById('error-' + campo);
                if (el) {
                    el.textContent = errores[campo];
                    el.classList.remove('hidden');
                }
            });
            return;
        }

        const nuevaConsulta = {
            id: Date.now(),
            asunto: asunto.trim(),
            tipo: tipo,
            mensaje: mensaje.trim(),
            fecha: new Date().toISOString()
        };

        const consultas = leerConsultas();
        consultas.unshift(nuevaConsulta);
        guardarConsultas(consultas);

        formConsulta.reset();
        renderConsultas();

        if (exitoConsulta) {
            exitoConsulta.textContent = 'Consulta enviada correctamente.';
            exitoConsulta.classList.remove('hidden');

            // Se oculta solo despues de unos segundos
            setTimeout(function () {
                exitoConsulta.classList.add('hidden');
            }, 3000);
        }
    });

    renderConsultas();
}