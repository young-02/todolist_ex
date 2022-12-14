import React from 'react';
import Button from '../component/BTN/Button';

function Todo({ item, isActive, dispatch, id }) {
  const completeOnclickHandler = () => {
    dispatch({ type: 'TODO_SWITCH', payload: { id } });
  };
  const cancelOnclickHandler = () => {
    dispatch({ type: 'TODO_DELETE', payload: { id } });
  };

  return (
    // {id}
    <div key={item.id}>
      <h3>{item.title}</h3>
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
