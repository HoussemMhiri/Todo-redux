import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { check, supp } from "../../redux/actions";
import Editbtn from "../edit/Editbtn";
const Todos = () => {
  const { tasks,filtredTodos } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filtredTodos.map((el) => (
          <div key={el.id} className={`task ${el.done ? "check" : " "} todo`}>
            <li className="todo-item"> {el.task} </li>

            <button
              className="complete-btn"
              onClick={() => dispatch(check(el.id))}
            >
              <i class="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={() => dispatch(supp(el.id))}>
              <i class="fas fa-trash"></i>
            </button>
            <Editbtn el={el} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
