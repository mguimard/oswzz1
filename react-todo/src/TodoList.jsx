import { useEffect, useState } from "react";
import TodoService from "./TodosService";
import TodoItem from "./TodoItem";

export default function TodoList() {
  let [todos, setTodos] = useState([]);

  useEffect(() => {
    TodoService.getTodos().then((data) => setTodos(data));
  }, []);

  return (
    <>
      <div>
        Completed ({todos.filter((todo) => todo.completed).length}/
        {todos.length})
      </div>
      <ul>
        {todos
          .sort((a, b) => (a.completed ? 1 : -1))
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onChange={(e) => {
                todo.completed = e.target.checked;
                setTodos([...todos]);
              }}
            />
          ))}
      </ul>
    </>
  );
}
