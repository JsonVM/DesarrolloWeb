console.log("-------------CRUD ESTUDIANTES-------------")

let estudiantes = [
    {
        id:"0001",
        nombre:"Jheyson",
        apellido:"Velez",
        edad:19,
        correo:"jheyson.v.m1@gmail.com",
        carrera:"Ingeniería de sistemas" 
    }
]
let estudianteTemporal = null
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
    let miEstudiante2 = {id,nombre,apellido,edad,correo,carrera}
    console.log(miEstudiante2)
    return miEstudiante2
}

function crearEstudiante() {
    let estudiante = obtenerValores()
    let existeEstudiante = estudiantes.find(x => estudiante.id ===x.id)
    if(existeEstudiante){
        console.log('el estudiante ya existe')
        return
    }
    //let existe = false
    //estudiantes.forEach(element => {
    //    if(estudiante.id == element.id)
   //     existe = true
    //});
    //
   // if(existe) {
   //     
    //}
    
    estudiantes.push(estudiante)
    console.log(estudiantes)
    listarEstudiantes()
}

function eliminarEstudiante(index) {
    estudiantes.splice(index,1)
    listarEstudiantes()
}

function cargarInformacion(index){
    let estudiante = estudiantes[index]
    estudianteTemporal = index
    document.getElementById("id").value =estudiante.id
    document.getElementById("nombre").value =estudiante.nombre  
    document.getElementById("apellido").value =estudiante.apellido
    document.getElementById("edad").value =estudiante.edad
    document.getElementById("correo").value =estudiante.correo
    document.getElementById("carrera").value =estudiante.carrera

    document.getElementById("btncrearEstudiante").style.display = "none"
    document.getElementById("btnactualizarEstudiante").style.display = "inline"
}

function limpiarCampos() {
    document.getElementById("id").value =""
    document.getElementById("nombre").value =""
    document.getElementById("apellido").value =""
    document.getElementById("edad").value =""
    document.getElementById("correo").value =""
    document.getElementById("carrera").value =""
}

function actualizarEstudiante() {
    let estudianteActualizado = obtenerValores()
    estudiantes.splice(estudianteTemporal,1,estudianteActualizado)
    limpiarCampos()
    listarEstudiantes()
}

function listarEstudiantes() {
    let lista = document.getElementById("listaEstudiantes")
    let data = ""
    for (let i = 0; i < estudiantes.length; i++) {
        let miEstudiante = estudiantes[i];
        data += "<tr>"
        data +=`<td>${miEstudiante.id}</td>`
        data +=`<td>${miEstudiante.nombre} ${miEstudiante.apellido}</td>`
        data +=`<td>${miEstudiante.correo}</td>`
        data +=`<td>${miEstudiante.carrera}</td>`
        data += `<td><input class="btn btn-primary" type="button" onClick="cargarInformacion(${i})" value="editar"></td>`
        data += '<td><input class="btn btn-primary" type="button" onClick="eliminarEstudiante('+i+')" value="eliminar"></td>'
        data += "</tr>"
    }
    lista.innerHTML=data
}

//llamo a la funcion
listarEstudiantes()