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
      item: "",
      todoList: []
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
    console.log("Cleared");
    // this.setState({
    //   todoList: this.state.todoList.filter(item => !item.completed)
    // });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // this.setState({ item: "" });
    // this.props.addItem(event, this.state.item);
  };

  render() {
    return (
      <div>
        <TodoList todoList={this.state.todoList} toggleItem={this.toggleItem} />
        <TodoForm
          addItem={this.addItem}
          clearCompleted={this.clearCompleted}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          item={this.state.item}
        />
      </div>
    );
  }
}

export default App;
