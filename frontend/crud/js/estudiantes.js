console.log("-------------CRUD ESTUDIANTES-------------")

let estudiantes = []
let id = document.getElementById("id").value

function obtenerValores() {
    let id = document.getElementById("id").value
    console.log("Mi id: ", id)

    let nombre = document.getElementById("nombre").value
    console.log("nombre: ", nombre)

    let apellido = document.getElementById("apellido").value
    console.log("apellido: ", apellido)

    let edad = document.getElementById("edad").value
    console.log("edad: ", edad)

    let correo = document.getElementById("correo").value
    console.log("correo: ", correo)

    let carrera = document.getElementById("carrera").value
    if(carrera == 001)
    console.log("carrera: ingenieria de sistemas")
    else if(carrera == 002)
    console.log("carrera: derecho")
    else console.log("Carrera: comunicacion")

    //primera forma
    let miEstudiante ={}
    miEstudiante.id = id
    miEstudiante.nombre = nombre

    console.log(miEstudiante)

    //segunda forma
    let miEstudiante2 = {id,nombre,edad,correo,carrera}
    console.log(miEstudiante2)
    return miEstudiante2
}

function crearEstudiante() {
    let estudiante = obtenerValores()
    estudiantes.push(estudiante)
    console.log(estudiantes)
}