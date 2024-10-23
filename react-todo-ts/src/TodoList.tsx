import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import TodoService from "./TodoService";
import Todo from "./Todo";

export default function TodoList() {
  let [todos, setTodos] = useState<Todo[]>([]);

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
          .sort((a,b) => (a.completed ? 1 : -1))
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
