import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            <li>
                {props.todos.map(todo => {
                    return <Todo key={todo.id} todo={todo} toggleSlashed={props.toggleSlashed}/>
                })}
            </li>
        </div>
    );
}


export default TodoList;