import React from "react";
import { TodoButton } from "../clients/TodoForm";

const TodoInfo = ({ title, description, id, completed }) => {
  return (
    <div className="border px-2 py-1 d-flex justify-content-between">
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className="d-flex align-items-center">
        <TodoButton id={id} completed={completed} />
      </div>
    </div>
  );
};

export default TodoInfo;
