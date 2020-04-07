import React from "react";

import Todo from "./Todo";

export default function TodoList(props) {
  return (
    <div>
      {props.todoList.map(todoItem => (
        <Todo key={todoItem.id} item={todoItem} toggleItem={props.toggleItem} />
      ))}
    </div>
  );
}
