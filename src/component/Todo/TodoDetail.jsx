import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

const TodoDetail = ({ item }) => {
  const param = useParams();
  const todo = useSelector((state) => state.todos.items);
  console.log(item);
  // console.log(todo);

  return (
    <TodoDetailWrap>
      {todo
        .filter((item) => item.id === param.id)
        .map((t) => {
          return (
            <div key={t.id}>
              <h3>{t.title}</h3>
              <p>{t.content}</p>
              <div className="before_btn">
                <Link to="/">이전으로</Link>
              </div>
            </div>
          );
        })}
    </TodoDetailWrap>
  );
};

export default TodoDetail;

const TodoDetailWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  > div {
    width: 300px;
    /* height: 150px; */
    padding: 2em;
    background-color: #fff;
    border-radius: 16px;
    color: black;

    > p {
      padding: 1em 0;
    }
    .before_btn {
      display: flex;
      justify-content: flex-end;
      > a {
        color: #fff;
        border-radius: 4px;
        padding: 0.8em 2em;
        font-size: 1em;
        font-weight: 600;
        background-color: #346649;
      }
    }
  }
`;
