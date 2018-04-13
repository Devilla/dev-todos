import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import TodoInput from './components/todoInput';
import TodoItem from './components/todoItem';
import RmTodoItem from './components/rmtodo';
import ResetTodo from './components/todoReset';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id:997, text:"Eat dinner!" }
      ],
      nextId: 996,


      rmtodos: [
        { id: 999, text: "Done laundry" }
      ],
      rmnextId:998,
    }

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.resetTodo = this.resetTodo.bind(this);
  }
  addTodo(todoText) {
    let todos = this.state.todos.slice();
    todos.push({ id: this.state.nextId, text: todoText });
    todos.sort(function (a, b) {
      return parseInt(a.id) - parseInt(b.id);
    })
    this.setState({
      todos: todos,
      nextId: --this.state.nextId
    })
  }

  resetTodo(todo){
    let todos = this.state.todos;
    let rmtodos = this.state.rmtodos;
console.log("sdds");
    this.setState({
     todos: this.state.todos=[
      { id:997, text:"Eat dinner!" }
    ],
     rmtodos:this.state.rmtodos=[
      { id: 999, text: "Done laundry"}
    ]
    });
    }


  removeTodo(id,text) {
  let rmtodos = this.state.rmtodos.slice();
  let todos = this.state.todos;

    rmtodos.push({id: this.state.rmnextId, text: text });

    rmtodos.sort(function (a, b) {
    return parseInt(a.id) - parseInt(b.id);
    })
    // console.log(this.state.rmnextId+" "+" " + text);

    this.setState({
      rmtodos: rmtodos,
      rmnextId: --this.state.rmnextId,
      todos: this.state.todos.filter((todo, index) => todo.id !== id)

    });
  }


  render() {
    return (
      <div className="App">
    
        <div className="todo-wrapper">
          <Header />
   
          <ResetTodo resetTodo={this.resetTodo}/>
       
          <br></br>
          <TodoInput todoText="" addTodo={this.addTodo} />
          <br></br>
          <br></br>
          <br></br>
          
          <h3 class="w3-container w3-green">
                   Things to do..
                </h3>
          <ul>
            
            <li>
             
              
              {
                this.state.todos.map((todo) => {
                  return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo} />
                })
              }
            </li>
          </ul>
          <br></br>
          <br></br>

          <h4 class="w3-container w3-green">
                   Completed Tasks!
                </h4>
          <ul>
            <li>
              {
                this.state.rmtodos.map((rmtodo) => {
                  return <RmTodoItem rmtodo={rmtodo} key={rmtodo.id} id={rmtodo.id} />
                })
              }
            </li>

          </ul>
        </div>
      </div>
    );
  }
}

export default App;
