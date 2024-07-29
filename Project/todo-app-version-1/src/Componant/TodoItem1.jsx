function TodoItem1() {
  let TodoName = "Buy Milk";
  let TodoDate = "04/08/2024";
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
export default TodoItem1;
