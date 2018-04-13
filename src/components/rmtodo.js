import React from 'react';
import './todoItem.css';

export default class RmTodoItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="todoWrapper">
               <strike> {this.props.rmtodo.text}</strike>
            </div>
        )
    }
}