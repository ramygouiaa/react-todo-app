import { useState, useEffect } from 'react';
import './styles.css';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

export default function App() {
  
  const [todos, setTodos] = useState(() => {
    const localvalue = localStorage.getItem('ITEMS');
    return localvalue ? JSON.parse(localvalue):[]
  });

  //this wont work because this will trigger an infinite loop fo rendering
  //setNewItem('test');

  //the useEffect function takes a function as argument alongside with a list of values 
  //If the list is present, effect will only activate if the values in the list change
  useEffect(()=> {
    localStorage.setItem('ITEMS', JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        title: title,
        completed: false
      }
    ])
  }

  function toggleTodo(id, completed) {
    setTodos(todos => {
      return todos.map((todo) => {
        if (todo.id === id) {
          return {...todo, completed}
        } return todo; 
      })
    })
  }

  function deleteTodo(id) {
    setTodos(todos => {
      return todos.filter(todo => todo.id !== id);
    }) 
    
  }
  
  return (
    <>
    <NewTodoForm onSubmit={addTodo} />
      <h1 className='header'>Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
  
}