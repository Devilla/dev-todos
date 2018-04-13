import React from 'react';
import './todoItem.css';
import './rmtodo';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    removeTodo(id,text) {
        this.props.removeTodo(id,text)
        
    }

    render() {
        return (
            <div className="todoWrapper">
                <button className="w3-red removeTodo" onClick={
                    (e)=>{
                    this.removeTodo(this.props.id,this.props.todo.text)}}>
                    Check</button>{this.props.todo.text}
            </div>
        )
    }
}