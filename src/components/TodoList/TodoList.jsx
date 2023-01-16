import { useContext } from "react";
import TodoContext from "../../context/todo/TodoContext";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const { todoState } = useContext(TodoContext);
  return (
    <div className="lg:w-[55%] md:w-[75%] sm:w-[90%] w-[100%] m-auto py-24 text-center">
      {todoState.length === 0 && <p>No todos for today</p>}
      {todoState.map((item) => (
        <TodoListItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default TodoList;
