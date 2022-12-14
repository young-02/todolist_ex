import './App.css';
// import { useState } from 'react';
import { Reset } from 'styled-reset';
import Header from './component/Header/Header';
import InputForm from './component/Input/InputForm';
import TodoList from './Todo/TodoList';

function App() {
  // const [todos, setTodos] = useState(initialTodos);

  return (
    <div className="App">
      <Reset />
      <Header>MyTodoList</Header>
      <main>
        <InputForm />
        <TodoList isActive={false} />
        <TodoList isActive={true} />
      </main>
    </div>
  );
}

export default App;
