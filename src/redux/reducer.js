import * as actions from "./actionTypes";
const initState = {
  tasks: [
    {
      id: Math.random(),
      task: "Learn HTML",
      done: false,
    },
    {
      id: Math.random(),
      task: "Learn CSS",
      done: false,
    },
    {
      id: Math.random(),
      task: "Learn Js",
      done: false,
    },
  ],
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case actions.CHECK:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === action.payload.id ? { ...el, done: !el.done } : el
        ),
      };
    case actions.DELETE:
      return {
        ...state,
        tasks: state.tasks.filter((el) => el.id !== action.payload),
      };
    case actions.ADD:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case actions.EDIT:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === action.payload.id
            ? { ...el, task: action.payload.task }
            : el
        ),
      };

    default:
      return state;
  }
};
