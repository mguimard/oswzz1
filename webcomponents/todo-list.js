export class TodoList extends HTMLElement {
    constructor(){
        super()

        let shadowRoot = this.attachShadow({mode: 'open'}) // open/closed : encapsulation ouverte/fermée
        //this.appendChild(new MyCustomElement())

       this.init(shadowRoot) 
       
    }

    async init(el){
        let res = await fetch('https://jsonplaceholder.typicode.com/todos')
        let todos = await res.json()
        el.innerHTML = todos.map(todo => `<todo-item><span slot="my-text">${todo.title}</span></todo-item>` ).join('<br />')

    }
}

export class TodoItem extends HTMLElement {

    static template = `

        <p> 
         <input type="checkbox" />
         <span>Je suis un todo</span>
         </p>

    `

    constructor() {
        super()
        let shadow = this.attachShadow({mode:'open'})
        let templateContent = document.getElementById('todo-list-template').content
        let node = templateContent.cloneNode(true)
        shadow.appendChild(node)
        //this.innerHTML = '<p>Je suis un todo</p>'
    }
}