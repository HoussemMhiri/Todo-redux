import * as actions from "./actionTypes";

export const check = (id) => {
  return {
    type: actions.CHECK,
    payload: {
      id: id,
      done: false,
    },
  };
};

export const supp = (id) => {
  return {
    type: actions.DELETE,
    payload: id,
  };
};

export const add = (inp) => {
  return {
    type: actions.ADD,
    payload: {
      id: Math.random(),
      task: inp,
      done: false,
    },
  };
};

export const edits = (id, inp) => {
  return {
    type: actions.EDIT,
    payload: {
      id: id,
      task: inp,
    },
  };
};
