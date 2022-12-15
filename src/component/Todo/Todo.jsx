import React from 'react';
import Button from '../BTN/Button';
import { todoSWITCH, todoDelete } from '../../redux/modules/todos';
import { Link } from 'react-router-dom';

function Todo({ item, isActive, dispatch }) {
  const completeOnclickHandler = () => {
    dispatch(todoSWITCH(item));
  };
  const cancelOnclickHandler = () => {
    dispatch(todoDelete(item));
  };

  return (
    <div key={item.id}>
      <h3>
        <Link to={`todoDetail/${item.id}`}>{item.title}</Link>
      </h3>
      <p>{item.content}</p>
      <div className="btn_wrap">
        <Button
          value={!isActive ? '완료' : '취소'}
          backgroundColor="#346649"
          onClick={completeOnclickHandler}
        />
        <Button
          value="삭제"
          backgroundColor="#d62433"
          onClick={cancelOnclickHandler}
        />
      </div>
    </div>
  );
}

export default Todo;
