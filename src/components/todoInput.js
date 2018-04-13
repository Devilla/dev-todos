 import React from 'react';
import './todoInput.css';
import '../App.css';

 export default class TodoInput extends React.Component{
     constructor(props) {
         super(props)

         this.state={value : ""};

         this.handleChange = this.handleChange.bind(this);
         this.addTodo = this.addTodo.bind(this);
     }

     handleChange(e){
        this.setState({value: e.target.value});
     }
     addTodo(todo){
        if(todo.length > 0) {
            this.props.addTodo(todo);
            this.setState({value: ''});
        }
     }
 render(){
    return (
      <div>
          <input class="w3-input"  type="text" value={this.state.value} onChange={this.handleChange}/><br></br>
          <button className="w3-button w3-blue" onClick={()=> this.addTodo(this.state.value)}>Submit</button>
    </div>
    );
 } 
}
