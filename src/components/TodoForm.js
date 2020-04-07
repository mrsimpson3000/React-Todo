import React from "react";

export default function TodoForm(props) {
  console.log(props.todo);
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type='text'
        value={props.todo}
        name='todo'
        onChange={props.handleChange}
      />
      <button onClick={props.addTask}>Add Todo</button>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </form>
  );
}
