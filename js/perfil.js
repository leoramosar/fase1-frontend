// Renderiza los datos del alumno y la tabla de materias en perfil.html.
// Usa el objeto "alumno" y el arreglo "materias" definidos en datos.js.

const contenedorAlumno = document.getElementById('datos-alumno');
const btnEditar = document.getElementById('btn-editar');
const avatarIniciales = document.getElementById('avatar-iniciales');

let editando = false;

const camposAlumno = [
    { clave: 'nombre', etiqueta: 'Nombre', destacar: false, editable: true },
    { clave: 'dni', etiqueta: 'DNI', destacar: false, editable: true },
    { clave: 'email', etiqueta: 'Email', destacar: false, editable: true },
    { clave: 'telefono', etiqueta: 'Teléfono', destacar: false, editable: true },
    { clave: 'fechaNacimiento', etiqueta: 'Fecha de nacimiento', destacar: false, editable: true },
    { clave: 'localidad', etiqueta: 'Localidad', destacar: false, editable: true },
    { clave: 'curso', etiqueta: 'Curso', destacar: false, editable: false },
    { clave: 'estado', etiqueta: 'Estado', destacar: true, editable: false },
    { clave: 'fechaInscripcion', etiqueta: 'Fecha de inscripción', destacar: false, editable: false }
];

function crearCampoAlumno(etiqueta, valor, destacar) {
    const claseValor = destacar ? 'text-verde' : 'text-barra';
    return `
        <div class="rounded-xl bg-fondo p-4">
            <p class="text-xs text-muted">${etiqueta}</p>
            <p class="mt-1 font-medium ${claseValor}">${valor}</p>
        </div>
    `;
}

function crearCampoEditable(campo) {
    return `
        <div class="rounded-xl bg-fondo p-4">
            <label for="campo-${campo.clave}" class="block text-xs text-muted">${campo.etiqueta}</label>
            <input type="text" id="campo-${campo.clave}" name="${campo.clave}" value="${alumno[campo.clave] || ''}"
                class="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-barra outline-none focus:border-verde focus:ring-2 focus:ring-verde/20">
        </div>
    `;
}

function renderDatosAlumno() {
    if (!contenedorAlumno) return;

    if (editando) {
        contenedorAlumno.innerHTML = camposAlumno.map(function (campo) {
            if (campo.editable) {
                return crearCampoEditable(campo);
            }
            return crearCampoAlumno(campo.etiqueta, alumno[campo.clave], campo.destacar);
        }).join('') + `
            <div class="flex flex-wrap items-center justify-end gap-3 sm:col-span-2 lg:col-span-3">
                <button type="button" id="btn-cancelar"
                    class="rounded-full border border-barra/20 bg-white px-5 py-2.5 text-sm font-semibold text-barra transition hover:bg-fondo">
                    Cancelar
                </button>
                <button type="button" id="btn-guardar"
                    class="rounded-full bg-verde px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-barra">
                    Guardar
                </button>
            </div>
        `;

        document.getElementById('btn-guardar').addEventListener('click', guardarCambios);
        document.getElementById('btn-cancelar').addEventListener('click', cancelarEdicion);
    } else {
        contenedorAlumno.innerHTML = camposAlumno
            .map(function (campo) {
                return crearCampoAlumno(campo.etiqueta, alumno[campo.clave], campo.destacar);
            })
            .join('');
    }
}

function actualizarAvatar() {
    if (!avatarIniciales) return;
    avatarIniciales.textContent = alumno.iniciales || 'PP';
}

function guardarCambios() {
    camposAlumno.forEach(function (campo) {
        if (!campo.editable) return;
        const input = document.getElementById('campo-' + campo.clave);
        if (input) {
            alumno[campo.clave] = input.value.trim();
        }
    });

    // Actualizamos iniciales con el nombre
    const partes = (alumno.nombre || '').trim().split(/\s+/);
    if (partes.length >= 2) {
        alumno.iniciales = (partes[0][0] + partes[partes.length - 1][0]).toUpperCase();
    } else if (partes[0]) {
        alumno.iniciales = partes[0].slice(0, 2).toUpperCase();
    }

    editando = false;
    if (btnEditar) btnEditar.classList.remove('hidden');
    actualizarAvatar();
    renderDatosAlumno();
}

function cancelarEdicion() {
    editando = false;
    if (btnEditar) btnEditar.classList.remove('hidden');
    renderDatosAlumno();
}

if (btnEditar) {
    btnEditar.addEventListener('click', function () {
        editando = true;
        btnEditar.classList.add('hidden');
        renderDatosAlumno();
    });
}

// --- Tabla de materias ---

const tablaMaterias = document.getElementById('tabla-materias');

function crearFilaMateria(materia) {
    const badge = materia.nota === null
        ? `<span class="rounded-full bg-barra/10 px-2.5 py-1 text-xs font-semibold text-barra">${materia.estado}</span>`
        : `<span class="rounded-full bg-verde/10 px-2.5 py-1 text-xs font-semibold text-verde">${materia.nota} · ${materia.estado}</span>`;

    return `
        <tr class="border-t border-barra/10">
            <td class="border-0 px-4 py-3 text-barra">${materia.nombre}</td>
            <td class="border-0 px-4 py-3 text-muted">${materia.profesor}</td>
            <td class="border-0 px-4 py-3">${badge}</td>
            <td class="border-0 px-4 py-3 font-medium text-barra">${materia.asistencia}%</td>
        </tr>
    `;
}

function renderTablaMaterias() {
    if (!tablaMaterias) return;
    tablaMaterias.innerHTML = getMaterias().map(crearFilaMateria).join('');
}

// --- Ejecutar ---

actualizarAvatar();
renderDatosAlumno();
renderTablaMaterias();
