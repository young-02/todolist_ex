import { useState } from 'react';
import './Todo.css';

export default function Working({ text, title }) {
  const [conDelete, setConDelete] = useState([...text, ...title]);

  function deleteHandler() {
    console.log('삭제');
    setConDelete('');
  }
  return (
    <div className="working_wrapper">
      <h2>Working...</h2>
      <ul className="work_list">
        {conDelete && (
          <li className={text ? 'list_active' : 'list'}>
            <h3>{title}</h3>
            <p>{text}</p>
            <div className="btn_wrap">
              <button className="btn_del" onClick={deleteHandler}>
                삭제하기
              </button>
              <button className="btn_com">완료하기</button>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}
