import React from 'react'

const TodoForm = props => {
    
    return (
        <div> 
            <input
                type='text'
                name='item'
                onChange={props.handleChange}
                value={props.newTodo}
            />

            <button onClick={props.createNewTodo}> Add Todo </button>
            <button onClick={props.clearCompletedTodos}> Clear Completed </button>
        </div>
    );
}

export default TodoForm;