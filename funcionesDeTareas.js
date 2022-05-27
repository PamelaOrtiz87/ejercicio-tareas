const fs = require('fs');
const { json } = require('stream/consumers');
archivo = './tareas.json'

let funcionesDeTareas = {
    leerArchivo: function(){
        let tareas = fs.readFileSync(archivo, 'utf-8');
        return JSON.parse(tareas);
    },

    escribirJSON: function(arrayTareas){
        let tareasString = JSON.stringify(arrayTareas)
        fs.writeFileSync(archivo, tareasString)
    },
    
    guardarTarea: function(tarea){
        let info = this.leerArchivo()
        info.push(tarea)
        this.escribirJSON(info)
    },
    
    leerPorEstado: function(estado){
        let tareasJSON = this.leerArchivo()
        let resultado = tareasJSON.filter(function(tarea){
            return tarea.estado == estado
        })
        return resultado
    }
}

module.exports = funcionesDeTareas