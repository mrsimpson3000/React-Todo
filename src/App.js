import React from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    const todoList = [];
    this.state = {
      todoList
    };
  }

  addItem = (event, item) => {
    event.preventDefault();
    const newTask = {
      task: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTask]
    });
  };

  toggleItem = itemId => {
    console.log(itemId);
  };

  clearCompleted = event => {
    event.preventDefault();
    console.log(event);
  };

  render() {
    return (
      <div>
        <TodoList
          todoList={this.state.todoList}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
        />
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
