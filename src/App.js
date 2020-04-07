import React from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    // const todoList = [];
    this.state = {
      task: "",
      todoList: []
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    // this.setState({ task: "" });
    // this.props.addTask(event, this.state.task);
  };

  addTask = event => {
    event.preventDefault();
    console.log(this.props.todo);
    const newTask = {
      task: this.props.todo,
      id: Date.now(),
      completed: false
    };
    console.log(`this is the task: ${newTask.task}`);

    this.setState({
      todoList: [...this.state.todoList, newTask]
    });
  };

  toggleItem = itemId => {
    console.log(itemId);
  };

  clearCompleted = event => {
    event.preventDefault();
    // console.log("Cleared");
    this.setState({
      todoList: this.state.todoList.filter(todo => !todo.completed)
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <TodoList todoList={this.state.todoList} toggleItem={this.toggleItem} />
        <TodoForm
          addTask={this.addTask}
          clearCompleted={this.clearCompleted}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          todo={this.state.task}
        />
      </div>
    );
  }
}

export default App;
