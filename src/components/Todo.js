import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <ul 
            onClick={() => props.toggleSlashed(props.todo.id)} 
            className={`item${props.todo.completed ? '-completed' : ''}`}>
             {props.todo.task}
        </ul>

    );
}

export default Todo;