"use client";

import React from "react";

const TodoForm = () => {
  return (
    <div className="my-5">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Task Title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Task Description"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TodoForm;

export const TodoButton = ({ id, completed }) => {
  const deleteTodo = (id) => {
    console.log("deleting", id);
  };
  return (
    <>
      <input
        type="checkbox"
        checked={completed}
        name="completed"
        id="todoChecked"
        className="me-1"
        style={{width:"20px", height:"20px"}}
      />
      <button
        type="button"
        className="btn btn-dark"
        onClick={() => deleteTodo(id)}
      >
        Delete
      </button>
    </>
  );
};
