import style from "./AddTodo.module.css";
import { BiSolidCommentAdd } from "react-icons/bi";
import { useState } from "react";
function AddTodo({ onNewItem }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const onHandleItem = (event) => {
    setName(event.target.value);
  };
  const onHandleDate = (event) => {
    setDate(event.target.value);
  };

  const onButtonClick = (event) => {
    onNewItem(name, date);
    setName("");
    setDate("");
  };
  return (
    <div className="container">
      <div className="row gap">
        <div className="col-6">
          <input
            value={name}
            onChange={onHandleItem}
            className={style["insert"]}
            type="text"
            placeholder="Enter Todo Here"
          ></input>
        </div>
        <div className="col-4">
          <input
            value={date}
            onChange={onHandleDate}
            className={style["insert"]}
            type="date"
          ></input>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-btn"
            onClick={onButtonClick}
          >
            <BiSolidCommentAdd />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
