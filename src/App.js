import React from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      item: "",
      todoList: []
    };
  }

  addTask = (event, inputName) => {
    event.preventDefault();

    const newTask = {
      task: inputName,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todoList: [...this.state.todoList, newTask]
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      item: ""
    });
    this.addTask(event, this.state.item);
  };

  toggleItem = itemId => {
    this.setState({
      todoList: this.state.todoList.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  clearCompleted = event => {
    event.preventDefault();
    // console.log("Cleared");
    this.setState({
      todoList: this.state.todoList.filter(todo => !todo.completed)
    });
  };

  handleChange = event => {
    this.setState({ item: event.target.value });
  };

  render() {
    return (
      <div>
        <TodoList todoList={this.state.todoList} toggleItem={this.toggleItem} />
        <TodoForm
          clearCompleted={this.clearCompleted}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          todo={this.state.item}
        />
      </div>
    );
  }
}

export default App;
