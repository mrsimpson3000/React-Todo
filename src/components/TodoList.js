import React from "react";

import Todo from "./Todo";

export default function TodoList(props) {
  return (
    <div>
      {props.todoList.map(task => (
        <Todo key={task.id} task={task} toggleItem={props.toggleItem} />
      ))}
    </div>
  );
}
