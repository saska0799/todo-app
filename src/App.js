import { useContext } from "react";
import ReactDOM from "react-dom";
import ModalContext from "./context/modal/ModalContext";
import Header from "./components/shared/Header";
import Modal from "./components/shared/Modal";
import Overlay from "./components/shared/Overlay";
import TodoList from "./components/todos/TodoList";

const App = () => {
  const { modalState } = useContext(ModalContext);

  return (
    <>
      {modalState.open &&
        ReactDOM.createPortal(
          <Overlay />,
          document.getElementById("overlay-root")
        )}
      {modalState.open &&
        ReactDOM.createPortal(<Modal />, document.getElementById("modal-root"))}
      <Header />
      <TodoList />
    </>
  );
};

export default App;
