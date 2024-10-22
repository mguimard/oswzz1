import { Component } from "../lib/my-framework.js"

export default class TodoItem extends Component {

    static selector = 'todo-item'

    static template = `
        <p> 
         <input type="checkbox" />
         <slot name="my-text">Je suis un todo</slot>
         </p>
    `

    static styles = `input[type=checkbox] { width:32px }`

    constructor(){
        super()
    }
}