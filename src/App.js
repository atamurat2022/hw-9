import React, { useReducer, useEffect } from "react"
import Header from "./components/header/Header"
import TodoForm from "./components/todo-form/TodoForm"
import TodoList from "./components/todo-list/TodoList"
import { reducer } from "./components/reducer"
import "./App.css"

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos") || "[]"),
  inputValue: "",
  editInputValue: "",
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos))
  }, [state.todos])
  return (
    <div className="App">
      <Header />
      <TodoForm state={state} dispatch={dispatch} />
      <TodoList state={state} dispatch={dispatch} />
    </div>
  )
}

export default App
