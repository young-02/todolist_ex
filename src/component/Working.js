import './Todo.css';

export default function Working({ text, title }) {
  return (
    <div className="working_wrapper">
      <h2>Working...</h2>
      <ul className="work_list">
        <li className={text ? 'list_active' : 'list'}>
          <h3>{title}</h3>
          <p>{text}</p>
          <div className="btn_wrap">
            <button className="btn_del">삭제하기</button>
            <button className="btn_com">완료하기</button>
          </div>
        </li>
      </ul>
    </div>
  );
}
