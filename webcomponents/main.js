import Chocolatine from "./chocolatine.js";
import { TodoItem, TodoList } from "./todo-list.js";

customElements.define('my-chocolatine', Chocolatine)
customElements.define('todo-list', TodoList)
customElements.define('todo-item', TodoItem)