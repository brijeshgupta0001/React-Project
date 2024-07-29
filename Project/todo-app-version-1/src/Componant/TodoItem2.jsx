function TodoItem2() {
  let TodoName = "Go To Play";
  let TodoDate = "08/07/2024";
  return (
    <div class="container">
      <div class="row  gap">
        <div class="col-6">{TodoName}</div>
        <div class="col-4">{TodoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem2;
