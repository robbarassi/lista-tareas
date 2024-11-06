import './styles.css'
import {Tarea,TareaLista} from './clases'
import { crearTareaHtml } from './js/funciones'

export const listaTarea = new TareaLista()
const tarea = new Tarea("Practicar webpack")

listaTarea.tareas.forEach((elemento) => {crearTareaHtml(elemento)});

// listaTarea.nuevaTarea(tarea);

// crearTareaHtml(tarea);
// console.log(listaTarea);

// localStorage.setItem('mi-key','ABC123')
// //sessionStorage.setItem('nombre', 'robbie')

// //setTimeout(() => {
    //localStorage.removeItem('mi-key')
    //sessionStorage.removeItem('nombre')
//}, 1500)

