import style from "./Todoitems.module.css";
import TodoItem from "./TodoItem";
const TodoItems = ({ AllTodo, onClickForDelete }) => {
  return (
    <>
      <div>
        {AllTodo.map((item) => (
          <TodoItem
            key={item.name}
            TodoName={item.name}
            TodoDate={item.date}
            onClickForDelete={onClickForDelete}
          />
        ))}
      </div>
    </>
  );
};
export default TodoItems;
