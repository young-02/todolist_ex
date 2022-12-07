import './Todo.css';
export default function Form() {
  return (
    <div className="form_warpper">
      <div className="input_warpper">
        <div className="input_box">
          <label>제목</label>
          <input type="text" />
        </div>
        <div className="input_box">
          <label>내용</label>
          <input type="text" />
        </div>
      </div>
      <button className='btn_add'>추가하기</button>
    </div>
  );
}
