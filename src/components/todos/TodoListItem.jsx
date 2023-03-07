import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { formatDistanceToNow } from "date-fns";
import TodoContext from "../../context/todo/TodoContext";

const TodoListItem = ({ id, urgent, title, description, createdAt }) => {
  const { todoDispatch } = useContext(TodoContext);

  return (
    <div
      className={` h-64 py-10 flex flex-col justify-between items-center border-b-4 ${
        urgent ? "border-[#CE1F6A]" : "border-[#52734D]"
      } shadow-lg shadow-slate-400`}
    >
      <div className="w-[80%] flex justify-between">
        <h2 className="w-[80%] break-words text-2xl">{title}</h2>
        <AiFillDelete
          className="cursor-pointer hover:fill-[#CE1F6A] transition-all"
          onClick={() =>
            todoDispatch({ type: "REMOVE_TODO", payload: { id: id } })
          }
        />
      </div>
      <div className="w-[80%] break-words">{description}</div>
      <div className="">
        {formatDistanceToNow(new Date(createdAt), {
          addSuffix: true,
        })}
      </div>
    </div>
  );
};

export default TodoListItem;
