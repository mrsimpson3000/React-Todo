import React from "react";

export default function Todo(props) {
  return (
    <div
      className={`item${props.task.completed ? " purchased" : ""}`}
      onClick={() => props.toggleItem(props.task.id)}
    >
      <p>{props.task.task}</p>
    </div>
  );
}
