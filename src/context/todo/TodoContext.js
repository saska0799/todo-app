import { createContext, useEffect, useReducer } from "react";
import { todoReducer } from "./TodoReducer";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const initialTodoState = [];

  const [todoState, todoDispatch] = useReducer(
    todoReducer,
    initialTodoState,
    () => {
      const localData = localStorage.getItem("todos");
      return localData ? JSON.parse(localData) : [];
    }
  );
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoState));
  }, [todoState]);

  return (
    <TodoContext.Provider value={{ todoState, todoDispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
