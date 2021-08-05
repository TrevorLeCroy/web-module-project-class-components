import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [{task: 'Make A List', id: 1231245325243, completed: false}, {task: 'Do a thing', id: 1231245325433, completed: false}],
      newTodo : {
        task: '',
        id: 0,
        completed: false
      }
    }
  }

  toggleSlashed = (itemID) => {
    console.log('toggling slash on something', itemID)
    const updatedTodos = this.state.todos.map(item => {
      if (item.id === itemID) {
        return {...item, completed: !item.completed};
      } else {
        return item;
      }
    });

    console.log(updatedTodos)

    this.setState({
      ...this.state,
      todos: updatedTodos
    });
  }

  createNewTodo = () => {
    this.setState({
      ...this.state,
      todos:[...this.state.todos, this.state.newTodo],
      newTodo: {
        task: '',
        id: Date.now(),
        completed: false
      }
    });
  }

  clearCompletedTodos = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(item => !item.completed)
    });
  }
  
  handleInput = (e) => {
    const {name, value} = e.target;
    this.setState({
      ...this.state,
      newTodo : {
        ...this.state.newTodo,
        task : value
      }
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} toggleSlashed={this.toggleSlashed}/>
        <TodoForm newTodo={this.state.newTodo.task} handleChange={this.handleInput} createNewTodo={this.createNewTodo} clearCompletedTodos={this.clearCompletedTodos}/>
      </div>
    );
  }
}

export default App;
