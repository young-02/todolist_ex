import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import Button from '../BTN/Button';
import { todoAdd } from '../../redux/modules/todos';

function InputForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  // 제목 입력 value
  const titleOnchangeHandler = (e) => {
    setTitle(e.target.value);
  };
  // 내용 입력 value
  const contentOnchangeHandler = (e) => {
    setContent(e.target.value);
  };

  //추가하기 버튼
  const formOnsubmitHandler = (event) => {
    event.preventDefault();
    if (!title) {
      alert('제목 을 입력해주세요');
      return;
    }
    if (!content) {
      alert('내용 을 입력해주세요');
      return;
    }

    dispatch(todoAdd({ title, content }));
    setTitle('');
    setContent('');
  };

  return (
    <>
      <InputContainer onSubmit={formOnsubmitHandler}>
        <InputBox>
          <label>제목 🥳</label>
          <input value={title} onChange={titleOnchangeHandler} />
        </InputBox>
        <InputBox>
          <label>내용 ✏️</label>
          <input value={content} onChange={contentOnchangeHandler} />
        </InputBox>
        <Button
          value="추가하기"
          backgroundColor="#ffc642"
          fontColor="#167867"
        />
      </InputContainer>
    </>
  );
}

export default InputForm;
const InputContainer = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #167867;
  padding: 2em;
  border-radius: 4px;
`;
const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;

  > label {
    font-size: 1.3em;
    font-weight: 800;
  }
  > input {
    background-color: #fff;
    border: none;
    padding: 1em;
    border-radius: 2em;
    width: 280px;
  }
`;
