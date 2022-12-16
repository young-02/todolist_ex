import React from 'react';
import styled from 'styled-components';
import Todo from './Todo';
import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';

function TodoList({ isActive }) {
  const todosList = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();
  // const param = useParams();

  return (
    <>
      <TodoContainer>
        <h3>{!isActive ? 'Working 🎄' : 'IsDone 🎁'}</h3>
        <List>
          {todosList
            .filter((item) => item.isDone === isActive)
            .map((item) => {
              return (
                <Todo
                  item={item}
                  key={item.id}
                  isActive={isActive}
                  id={item.id}
                  dispatch={dispatch}
                  // param={param}
                />
              );
            })}
        </List>
      </TodoContainer>
    </>
  );
}

export default TodoList;

const TodoContainer = styled.div`
  margin-top: 3em;

  h3 {
    font-size: 2em;
    font-weight: 900;
  }
`;

const List = styled.div`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
  margin-top: 1em;

  > div {
    /* border: 2px solid #fff; */
    background-color: #d5ffcaed;
    padding: 2em;
    border-radius: 8px;
    color: #051a42;
    cursor: pointer;

    :hover {
      background-color: #ff9a9a;
      transition: all 0.3s;
    }
    > h3 {
      font-size: 1.5em;

      > a {
        display: block;
        color: #346649;
      }
    }
    > p {
      padding: 1em 0;
    }
    .btn_wrap {
      display: flex;
      justify-content: space-between;
      gap: 8px;
    }
  }
`;
