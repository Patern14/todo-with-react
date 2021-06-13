import React from 'react'
import TodoItem from './TodoItem'

function TodoList({todos, setTodos, filteredTodos}) {
    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {filteredTodos.map(todo => (
                        <TodoItem 
                            todo={todo} 
                            key={todo.id} 
                            text={todo.text} 
                            todos={todos} 
                            setTodos={setTodos} 
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoList;
