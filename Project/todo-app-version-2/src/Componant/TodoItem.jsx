import { RiDeleteBin6Fill } from "react-icons/ri";
function TodoItem({ TodoName, TodoDate, onClickForDelete }) {
  return (
    <div className="container">
      <div className="row gap">
        <div className="col-6">{TodoName}</div>
        <div className="col-4">{TodoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-btn"
            onClick={() => onClickForDelete(TodoName)}
          >
            <RiDeleteBin6Fill />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
