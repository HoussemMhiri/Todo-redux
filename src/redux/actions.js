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
/* export const filterd = (status) => {
  return {
    type: actions.FILTERD,
     payload: status
  };
};
 */ 

export const comp = () => {
  return {
    type: actions.COMP, 
   
}; 
}
export const uncomp = () => {
  return {
    type: actions.UNCOMP,
   
}; 
}
export const all = () => {
  return {
    type: actions.ALL,
   
}; 
}