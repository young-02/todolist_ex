import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { Reset } from 'styled-reset';

const TodoDetail = ({ item }) => {
  const param = useParams();
  const todo = useSelector((state) => state.todos.items);
  console.log(item);
  // console.log(todo);

  return (
    <>
      <Reset />
      <TodoDetailWrap>
        {todo
          .filter((item) => item.id === param.id)
          .map((t) => {
            return (
              <div key={t.id}>
                <div className="text_box">
                  <h3>{t.title}</h3>
                  <p>{t.content}</p>
                </div>
                <div className="before_btn">
                  <Link to="/">👈 이전으로</Link>
                </div>
              </div>
            );
          })}
      </TodoDetailWrap>
    </>
  );
};

export default TodoDetail;

const TodoDetailWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 460px;
    height: 200px;
    padding: 2em;
    background-color: #fff;
    border: 4px solid #af1004;
    border-radius: 16px;
    color: black;

    > .text_box {
      > h3 {
        font-size: 1.6em;
        font-weight: 900;
        color: #346649;
      }

      > p {
        padding: 1.5em 0;
      }
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
