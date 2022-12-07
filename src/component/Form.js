import { useState } from 'react';
import './Todo.css';
import Working from './Working';
export default function Form() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [inputTitle, setInpuTitle] = useState('');
  const [inputText, setInpuText] = useState('');

  function onChangeTitle(e) {
    setTitle(e.target.value);
  }
  function onChangeText(e) {
    setText(e.target.value);
  }
  function addList() {
    setInpuTitle([...title]);
    setInpuText([...text]);
  }
  return (
    <>
      <div className="form_warpper">
        <div className="input_warpper">
          <div className="input_box">
            <label>제목</label>
            <input type="text" onChange={onChangeTitle} />
          </div>
          <div className="input_box">
            <label>내용</label>
            <input type="text" onChange={onChangeText} />
          </div>
        </div>
        <button className="btn_add" onClick={addList}>
          추가하기
        </button>
      </div>

      <Working text={inputText} title={inputTitle} />
    </>
  );
}
