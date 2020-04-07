import React from "react";

export default function TodoForm(props) {
  return (
    <form>
      <input
        type='text'
        name='todo'
        value={props.todo}
        onChange={props.handleChange}
      />
      <button onClick={props.handleSubmit}>Add Todo</button>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </form>
  );
}
