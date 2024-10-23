import "./TodoItem.css";
import Todo from './Todo'
import { ChangeEventHandler } from "react";

interface TodoItemParams {
    todo:Todo
    onChange: ChangeEventHandler<HTMLInputElement>
}

export default function TodoItem({ todo, onChange }: TodoItemParams) {
  return (
    <li className={todo.completed ? "complete" : "todo"}>
      <label>
        <input
          type="checkbox"
          defaultChecked={todo.completed}
          onChange={onChange}
        />
        {todo.title}
      </label>
    </li>
  );
}
