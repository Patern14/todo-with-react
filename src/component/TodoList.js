import React from 'react'
import TodoItem from './TodoItem'

function TodoList({todos, setTodos}) {
    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {todos.map(todo => (
                        <TodoItem key={todo.id} text={todo.text} todos={todos} setTodos={setTodos} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoList;
