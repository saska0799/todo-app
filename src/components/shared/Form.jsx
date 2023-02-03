import { useContext, useRef } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { v4 as uuid } from "uuid";
import ModalContext from "../../context/modal/ModalContext";
import TodoContext from "../../context/todo/TodoContext";

const Form = () => {
  const { modalDispatch } = useContext(ModalContext);
  const { todoDispatch } = useContext(TodoContext);

  const id = uuid();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const urgentRef = useRef();

  const formSubmit = (e) => {
    e.preventDefault();

    todoDispatch({
      type: "ADD_TODO",
      payload: {
        id,
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        urgent: urgentRef.current.checked,
        createdAt: new Date(),
      },
    });

    modalDispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <form
      className="flex flex-col bg-slate-200 md:w-[25rem] w-[20rem] rounded-lg p-5"
      onSubmit={formSubmit}
    >
      <div className="flex justify-between my-5">
        <h2 className="text-3xl">Add a task</h2>
        <AiOutlineCloseSquare
          className=" w-[2.5rem] h-auto"
          color="gray"
          onClick={() => modalDispatch({ type: "CLOSE_MODAL", payload: false })}
        />
      </div>
      <div className="flex flex-col my-5">
        <label>Title</label>
        <input
          type="text"
          placeholder="Title"
          className="p-3 my-3 rounded-lg"
          ref={titleRef}
          required
        />
        <label>Description</label>
        <textarea
          placeholder="Description"
          className="p-3 my-3 rounded-lg"
          ref={descriptionRef}
          maxLength="30"
          required
        />
      </div>
      <div className="flex items-center mb-10">
        <label>Urgent?</label>
        <input type="checkbox" className="ml-5 rounded-lg" ref={urgentRef} />
      </div>
      <button className=" p-3 rounded-lg bg-slate-500">Submit</button>
    </form>
  );
};

export default Form;
