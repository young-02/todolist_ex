import { useState } from 'react';
import './Todo.css';
// import Working from './Working';

function Working({ list, handleDelete, handleComplete }) {
  return (
    <li>
      <h2>{list.title}</h2>
      <p>{list.text}</p>
      <div className="btn_wrap">
        <button
          className="btn_del"
          onClick={() => {
            handleDelete(list.id);
          }}
        >
          삭제하기
        </button>
        <button
          className="btn_com"
          onClick={() => {
            handleComplete(list.id);
          }}
        >
          완료하기
        </button>
      </div>
    </li>
  );
}

export default function Form() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: '리액트공부하기',
      text: 'todoList 만들기.',
    },
  ]);

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const addListHandler = () => {
    const newList = {
      id: todoList.length + 1,
      title: title,
      text: text,
    };
    setTodoList([...todoList, newList]);
    setTitle('');
    setText('');
  };
  const deleteListHandler = (id) => {
    const newList = todoList.filter((list) => list.id !== id);
    setTodoList(newList);
  };
  const completeListHandler = (id) => {
    const newList = todoList.filter((list) => list.id == id);
    setTodoList(newList);
  };
  return (
    <>
      <div className="form_warpper">
        <div className="input_warpper">
          <div className="input_box">
            <label>제목</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="input_box">
            <label>내용</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>
        <button className="btn_add" onClick={addListHandler}>
          추가하기
        </button>
      </div>
      <div className="working_wrapper">
        <h2>Working...</h2>
        <ul className="work_list">
          {todoList.map((list) => {
            return (
              <Working
                list={list}
                key={list.id}
                handleDelete={deleteListHandler}
                handleComplete={completeListHandler}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}
