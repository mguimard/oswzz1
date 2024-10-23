import "./TodoItem.css";

export default function TodoItem({ todo, onChange }) {
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
