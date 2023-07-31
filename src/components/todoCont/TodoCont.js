import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { add } from "../../redux/actions";

const TodoCont = () => {
  const [inp, setInp] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add(inp));
    setInp("");
  };

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
          {" "}
          <i class="fas fa-plus-square"></i>
        </button>
      </form>
    </header>
  );
};

export default TodoCont;
