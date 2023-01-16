import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import TodoContext from "../../context/todo/TodoContext";

const TodoListItem = ({ id, urgent, title, description, deadline }) => {
  const { todoDispatch } = useContext(TodoContext);

  return (
    <div
      className={`py-10 my-5 flex justify-between border-l-4 ${
        urgent ? "border-red-500" : "border-green-500"
      } shadow-lg shadow-slate-400`}
    >
      <div className="flex sm:mx-10 mx-5 overflow-x-hidden">
        <div>{title}</div>
        <div className="ml-10 break-words sm:w-[50%] w-[75%]">
          {description}
        </div>
      </div>
      <div className="flex md:px-10 px-5">
        <div className="md:pr-10 mr-10">{deadline}</div>
        <AiFillDelete
          onClick={() =>
            todoDispatch({ type: "REMOVE_TODO", payload: { id: id } })
          }
        />
      </div>
    </div>
  );
};

export default TodoListItem;
