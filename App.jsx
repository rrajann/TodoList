import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form';
import List from './List';
import { useEffect } from 'react';

export default function App() {
  const [todos, setTodos] = useState(() => {
    let local = localStorage.getItem("ITEMS");
    if (local == null) return [];
    return JSON.parse(local);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos])

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos, { id: crypto.randomUUID(), title, completed: false},
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id == id) {
          return {...todo, completed};
        }
        return todo;
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id != id);
    })
  }

  return (
    <>
      <Form className="box" onSubmit={addTodo}/>
      <h1 className="header">Todo List</h1>
      <List className="box" todos = {todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}></List>
    </>
  )
}

