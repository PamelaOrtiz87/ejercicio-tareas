const tareas = require('./tareas')
let process = require('process')
let archivo = require('./funcionesDeTareas')
let accion = process.argv[2]

switch(accion) {
    case 'listar':
        archivoArray = archivo.leerArchivo()
        archivoArray.forEach(function(tarea, index) {
            posicion = index + 1
            impresion = "La tarea "+ posicion + " es " + tarea.titulo + ". Y el estado es: " + tarea.estado
            console.log(impresion)
        });
        break;
    case undefined:
        console.log("Atencion - Tienes que pasar una acción")
        break;
    case 'crear':
        let nuevaTarea = {
            titulo: process.argv[3],
            estado: "pendiente"
        }
        archivo.guardarTarea(nuevaTarea)
        console.log(archivo.leerArchivo());
        break;
    case 'filtrar':
        let estado = process.argv[3]
        let tareasFiltradas =  archivo.leerPorEstado(estado)
        tareasFiltradas.forEach(function(tarea){
            console.log(tarea)
        })
        break;
     default:
        console.log("No entiendo lo que quieres hacer")
        break;
}

