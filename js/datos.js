// Datos de ejemplo del portal

const alumno = {
    nombre: 'Pedrito Pérez',
    iniciales: 'PP',
    usuario: 'pedrito',
    clave: '1234',
    dni: '40123456',
    email: 'pedrito.perez@ejemplo.com',
    telefono: '2984 555-0123',
    fechaNacimiento: '14/03/1995',
    localidad: 'General Roca',
    curso: 'Tecnicatura en Gestión Pública',
    estado: 'Activo',
    fechaInscripcion: '02/03/2026'
};

const usuarios = [
    {
        nombre: 'Pedrito Pérez',
        usuario: 'pedrito',
        email: 'pedrito.perez@ejemplo.com',
        clave: '1234'
    }
];

// Para rendir final: parcial1 y parcial2 aprobados (6 o mas)
// La nota de la materia es el examen final
const materias = [
    {
        id: 1,
        nombre: 'Derecho constitucional',
        profesor: 'Jenifer Lopez',
        dia: 'Lunes',
        horario: '18:00 a 20:00',
        parcial1: null,
        parcial2: null,
        nota: null,
        asistencia: 78,
        tipo: 'Anual',
        estado: 'En curso'
    },
    {
        id: 2,
        nombre: 'Derecho administrativo',
        profesor: 'Jenifer Garden',
        dia: 'Miércoles',
        horario: '18:00 a 20:00',
        parcial1: 7,
        parcial2: 8,
        nota: 8,
        asistencia: 92,
        tipo: 'Cuatrimestral',
        estado: 'Finalizado'
    },
    {
        id: 3,
        nombre: 'Gestión pública',
        profesor: 'Martín Acosta',
        dia: 'Martes',
        horario: '20:00 a 22:00',
        parcial1: null,
        parcial2: null,
        nota: null,
        asistencia: 85,
        tipo: 'Anual',
        estado: 'En curso'
    },
    {
        id: 4,
        nombre: 'Economía del sector público',
        profesor: 'Laura Ríos',
        dia: 'Jueves',
        horario: '18:00 a 20:00',
        parcial1: 7,
        parcial2: 8,
        nota: 9,
        asistencia: 95,
        tipo: 'Cuatrimestral',
        estado: 'Finalizado'
    },
    {
        id: 5,
        nombre: 'Introducción a la informática',
        profesor: 'Pedro Gómez',
        dia: 'Viernes',
        horario: '18:00 a 21:00',
        parcial1: null,
        parcial2: null,
        nota: null,
        asistencia: 88,
        tipo: 'Cuatrimestral',
        estado: 'En curso'
    }
];

function getUsuarios() {
    var guardados = localStorage.getItem('usuarios');

    if (guardados) {
        return JSON.parse(guardados);
    }

    return usuarios;
}

function guardarUsuarios(lista) {
    localStorage.setItem('usuarios', JSON.stringify(lista));
}

function getMaterias() {
    var guardadas = localStorage.getItem('materias_v2');

    if (guardadas) {
        return JSON.parse(guardadas);
    }

    return materias;
}

function guardarMaterias(lista) {
    localStorage.setItem('materias_v2', JSON.stringify(lista));
}
