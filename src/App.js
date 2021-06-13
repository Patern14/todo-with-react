import React, {useState, useEffect} from "react"
import './App.css';
import Form from "./component/Form"
import TodoList from "./component/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterHandler = () => {
    switch(status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true ))
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false ))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  useEffect(() => {
    getLocalTodos();
  }, [])

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]))
    } else {
      let localTodo = JSON.parse(localStorage.getItem("todos"))
      setTodos(localTodo)
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Todo or not todo</h1>
        <h2>That is the question</h2>
      </header>
      <Form 
        inputText={inputText} 
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos}
        setStatus={setStatus} 
        />
      <TodoList 
        todos={todos} 
        setTodos={setTodos} 
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
