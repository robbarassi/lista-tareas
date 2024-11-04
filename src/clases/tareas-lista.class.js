export class TareaLista{
    constructor(){
        this.tareas = [];
    }
    nuevaTarea(tarea){
        this.tareas.push(tarea);
    }
    eliminarTarea(id){

    }
    marcarCompletado(id){
        for(const elemento of this.tareas){
            if(elemento.id == id){
                elemento.completado = !elemento.complatado;
                break;
            }
        }
    }
    eliminarCompletados(){
        
    }
}