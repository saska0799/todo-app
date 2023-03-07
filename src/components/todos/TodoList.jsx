import { useContext } from "react";
import TodoContext from "../../context/todo/TodoContext";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const { todoState } = useContext(TodoContext);
  return (
    <div className="md:w-[55%] w-[70%] my-10 m-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {todoState.length === 0 && <p>No todos for today</p>}
      {todoState.map((item) => (
        <TodoListItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default TodoList;
