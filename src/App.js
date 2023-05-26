import React, { useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  // состояние, в котором будут хранится все таски, из этого состояния мы потом будем отображать таски в браузере
  const [todos, setTodos] = useState([]);

  // функция для обновления состояния todos
  const handleTask = (newObj) => {
    // копируем все, что было в состоянии todos
    const newTodos = [...todos];
    //добавили новый таск в newTodos
    newTodos.push(newObj);
    //обновили состояние
    setTodos(newTodos);
  };

  // функция для изменения статуса таска
  function changeStatus(id) {
    //перебираем массив todos и если у какого-то элемента id совпадает с тем id, который был передан при вызове данной функции, то меняем его status на противоположный
    const newTodos = todos.map((item) => {
      if (item.id == id) {
        item.status = !item.status;
      }
      return item;
    });
    // обновляем состояние
    setTodos(newTodos);
  }
  return (
    <div>
      <AddTodo handleTask={handleTask} />
      <TodoList todos={todos} changeStatus={changeStatus} />
    </div>
  );
};

export default App;
