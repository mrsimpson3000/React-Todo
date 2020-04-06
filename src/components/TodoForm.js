import React from "react";

export default function TodoForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type='text'
        value={props.item}
        name='item'
        onChange={props.handleChange}
      />
      <button onClick={props.addItem}>Add Todo</button>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </form>
  );
}
