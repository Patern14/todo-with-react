import React from 'react'

function Form({inputText, setInputText, todos, setTodos}) {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {text: inputText, completed: false, id: Math.round(Math.random()*1000)}]);
        setInputText("");
    }

    return (
        <div>
            <form>
                <input type="text" className="todo-input" value={inputText} onChange={inputTextHandler}/>
                <button className="todo-button" type="submit" onClick={submitTodoHandler} >
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Form
