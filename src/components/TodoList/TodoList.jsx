import React from "react";
import "./TodoList.css";

const TodoList = (props) => {
  return (
    <div>
      <h2>TODO LIST COMPONENT</h2>
      <ul>
        {/* перебираем массив todos, где на каждый task возвращаем li */}
        {props.todos.map((item) => (
          <li key={item.id} className={item.status ? "completed" : ""}>
            <input
              type="checkbox"
              onChange={() => props.changeStatus(item.id)}
            />
            {item.task}
            <button>edit</button>
            <button>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
