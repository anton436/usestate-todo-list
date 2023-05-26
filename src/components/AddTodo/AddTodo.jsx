import React from "react";
import { useState } from "react";

const AddTodo = (props) => {
  // состояние для того, чтобы хранить данные таска, который хотим добавить
  const [task, setTask] = useState("");
  // функция для синхронизации данных инпута и стейта task
  function handleInput(e) {
    setTask(e.target.value);
  }

  // функция, которая срабатывает при нажатии на кнопку add
  function handleAdd() {
    // проверка на заполненность
    if (!task) {
      alert("input is empty!");
      return;
    }
    // собираем новый таск со статусом false, т.к тас не выполнен изначально, задаем id, для редактирования и удаления
    const newTask = {
      task: task,
      status: false,
      id: Date.now(),
    };
    // фунцкция для добавления нового таска в массив todos, из которого далее мы будем отображать таски в браузере
    props.handleTask(newTask);
    setTask("");
  }

  return (
    <div>
      <h2>ADD TODO COMPONENT</h2>
      <input type="text" value={task} onChange={handleInput} />
      <button onClick={handleAdd}>add task</button>
    </div>
  );
};

export default AddTodo;
