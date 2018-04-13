import React from 'react';
import './todoInput.css';
import '../App.css';

 export default class TodoReset extends React.Component{
     constructor(props) {
         super(props);

     // console.log(this.props.todo);
    //  this.resetTodo = this.resetTodo.bind(this);
     } 
     resetTodo(){
           
        this.props.resetTodo();
         
     }
 render(){
    return (
      <div>
          <button id="reset" class="w3-button w3-red" onClick={ (e) => {this.resetTodo()}}>Reset</button>
      </div>
    );
 } 
}
