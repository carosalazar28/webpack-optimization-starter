
import '../styles/index.css'
import { onLoadEventHandler, newTodoEventHandler, removeTodoEventHandler, toggleTodoEventListener } from './event-handlers'

window.addEventListener('load', onLoadEventHandler)
document.addEventListener('change', function (event) {
    if (event.target.classList.contains('new-todo')) {
        newTodoEventHandler(event)
    }
})
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete')) {
        removeTodoEventHandler(event)
    }
    if (event.target.classList.contains('real-checkbox')) {
        toggleTodoEventListener(event)
    }
})