import './Todo.css';

export default function Working() {
  return (
    <div className="working_wrapper">
      <h2>Working...</h2>
      <ul className="work_list">
        <li>
          <h3>리액트 공부하기</h3>
          <p>리액트 공부하기</p>
          <div className="btn_wrap">
            <button className="btn_del">삭제하기</button>
            <button className="btn_com">완료하기</button>
          </div>
        </li>
      </ul>
    </div>
  );
}
