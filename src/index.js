import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ModalProvider } from "./context/modal/ModalContext";
import { TodoProvider } from "./context/todo/TodoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TodoProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </TodoProvider>
  </React.StrictMode>
);
