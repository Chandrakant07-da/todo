import React from "react";


import todoList from "./todoList";

class todoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      input: ''
    }
  }


  inputHandler = (event) => {
    this.setState({
      input: event.target.value,
    })
  }


  addTodo = () => {
    this.setState((state) => {
      return {
        ...state,
        list: [...state.list, this.state.input],
      }
    })



    this.setState({
      input:''
    })
  }



  render() {
    return (
      <React.Fragment>
        <div className="add-todo">
          <input
            type="text"
            placeholder="Add Your Todo"
            onChange={this.inputHandler}
            value={this.state.input}
          />
        <button onClick={this.addTodo}>Add Youyr Todo</button>
        </div>

        <div className="todos">
          {this.state.list.map((todo, index) => {
            return <todoList key={index} todo={todo} />;
          })}
          {this.state.todos.length === 0 && (
            <div className="center">Here is Nothing to Do</div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default todoForm;