import { defineComponents } from "./lib/my-framework.js";

import Chocolatine from "./components/chocolatine.js";
import TodoList from "./components/todo-list.js";
import TodoItem from "./components/todo-item.js";

defineComponents([
    Chocolatine, TodoItem, TodoList
])
