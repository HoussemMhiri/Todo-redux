import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { add, all, comp, filterd, uncomp } from "../../redux/actions";

const TodoCont = () => {
  const [inp, setInp] = useState("");
  const dispatch = useDispatch();
  const { tasks } = useSelector((status) => status);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add(inp));
    setInp("");
  };

  //---------------------------------------------------
  const [status, setStatus] = useState("all");

  //Functions
  const filterHandler = () => {
    switch (status) {
      case "uncompleted":
        return dispatch(uncomp());
      /* setFiltredTodos(tasks.filter(todo=> todo.done === true))  */

      case "completed":
        return dispatch(comp());
      /*    setFiltredTodos(tasks.filter(todo=> todo.done === false))  */

      default:
        return dispatch(all());
      /*  setFiltredTodos(tasks) */
    }
  };

  useEffect(() => {
    filterHandler();
  }, [tasks, status]);

  return (
    <header>
      <h1 style={{ color: "white", fontSize: "3.5rem", fontWeight: "bold" }}>
        My Todos
      </h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => setInp(e.target.value)}
          value={inp}
        />
        <button>
          <i class="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select
            onChange={(e) => setStatus(e.target.value)}
            name="todos"
            id=""
            className="filter-todo"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </header>
  );
};

export default TodoCont;
