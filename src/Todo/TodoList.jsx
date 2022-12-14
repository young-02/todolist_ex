import React from 'react';
import styled from 'styled-components';
import Todo from './Todo';
import { useSelector, useDispatch } from 'react-redux';

function TodoList({ isActive }) {
  const todosList = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();
  console.log('todosList', todosList);
  return (
    <>
      <TodoContainer>
        <h3>{!isActive ? 'Working' : 'IsDone'}</h3>
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
    border: 2px solid #fff;
    background-color: #f3edd8;
    padding: 2em;
    border-radius: 8px;
    color: #183527;

    > h3 {
      font-size: 1.5em;
    }
    > p {
      margin: 1em 0;
    }
    .btn_wrap {
      display: flex;
      justify-content: space-between;
      gap: 8px;
    }
  }
`;
