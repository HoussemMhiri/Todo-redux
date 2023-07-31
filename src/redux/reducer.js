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

  filtredTodos:[]
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
   /*  case actions.FILTERD:
      return { ...state, filtredTodos: state.tasks.map(el=> el.done === true && action.payload === "completed" ? el.done === true : el.done === false && action.payload === "uncompleted" ? el.done === false : el )
       
      
      }; */ 
      case actions.COMP:
        return {
          ...state,filtredTodos: state.tasks.filter(el=> el.done === true)
          
        };
      case actions.UNCOMP:
        return {
          ...state,filtredTodos: state.tasks.filter(el=> el.done === false)
          
        };
      case actions.ALL:
        return {
          ...state,filtredTodos: state.tasks
          
        };

    default:
      return state;
  }
};
