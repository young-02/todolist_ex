import { v4 as uuidv4 } from 'uuid';

const TODO_ADD = 'TODO_ADD';
const TODO_DELETE = 'TODO_DELETE';
const TODO_SWITCH = 'TODO_SWITCH';

export const todoAdd = (payload) => {
  return {
    type: TODO_ADD,
    payload,
  };
};
export const todoDelete = (payload) => {
  return {
    type: TODO_DELETE,
    payload,
  };
};
export const todoSWITCH = (payload) => {
  return {
    type: TODO_SWITCH,
    payload,
  };
};

const initailState = {
  items: [
    {
      id: uuidv4(),
      title: '리액트스터디',
      content: '리액트 뿌시기',
      isDone: false,
    },
    {
      id: uuidv4(),
      title: '리액트스터디2',
      content: '리액트 뿌시기2',
      isDone: true,
    },
    {
      id: uuidv4(),
      title: '리액트스터디3',
      content: '리액트 뿌시기3',
      isDone: false,
    },
  ],
};
//리듀서
const todos = (state = initailState, action) => {
  switch (action.type) {
    case TODO_ADD:
      const newDodos = {
        id: uuidv4(),
        title: action.payload.title,
        content: action.payload.content,
        isDone: false,
      };
      return {
        items: [...state.items, newDodos],
      };
    case TODO_DELETE:
      return {
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case TODO_SWITCH:
      return {
        items: state.items.map((t) => {
          if (t.id === action.payload.id) {
            return { ...t, isDone: !t.isDone };
          } else {
            return t;
          }
        }),
      };
    default:
      return state;
  }
};
export default todos;
