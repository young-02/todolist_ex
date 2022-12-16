import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../App';
import TodoDetail from '../component/Todo/TodoDetail';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="todoDetail" element={<TodoDetail />} />
      <Route path="todoDetail/:id" element={<TodoDetail />} />
    </Routes>
  );
};

export default Router;
