import './App.css';
// import { useState } from 'react';
import { Reset } from 'styled-reset';

import { useSelector, useDispatch } from 'react-redux';
import Header from './component/Header/Header';

// import InputForm from './component/Input/InputForm';
// import TodoList from './Todo/TodoList';

function App() {
  // const [todos, setTodos] = useState(initialTodos);
  const todosStore = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(todosStore);
  return (
    <div className="App">
      <Reset />
      <Header>MyTodoList</Header>
      <main>
        <InputForm setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} isActive={false} />
        <TodoList todos={todos} setTodos={setTodos} isActive={true} />
      </main>
    </div>
  );
}

export default App;
