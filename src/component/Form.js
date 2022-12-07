import { useState } from 'react';
import './Todo.css';
import Working from './Working';
export default function Form() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  function onChangeTitle(e) {
    setTitle(e.target.value);
  }
  function onChangeText(e) {
    setText(e.target.value);
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
        <button className="btn_add">추가하기</button>
      </div>
      <Working text={text} title={title} />
    </>
  );
}
