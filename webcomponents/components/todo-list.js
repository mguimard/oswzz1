import {Component} from "../lib/my-framework.js"

export default class TodoList extends Component {

    static selector = 'todo-list'
    static template = ``
    static styles = `h2 {color: pink}`

    constructor(){
        super()
        this.init()
    }

    async init(){
        let res = await fetch('https://jsonplaceholder.typicode.com/todos')
        let todos = await res.json()
        this.shadowRoot.innerHTML = `<h2>Todos</h2>` + todos.map(todo => `<todo-item><span slot="my-text">${todo.title}</span></todo-item>` ).join("\n")
    }
}
