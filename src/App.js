import React, { useEffect, useState } from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";
import Loader from "./Todo/Loader/Loader";

function App() {
  let [people, setPeople] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setPeople(todos)
          setLoading(false)
        }, 2000)
      })
  }, [])

  function checkTodo(id) {
    setPeople(people.map(person => {
      if(person.id === id){
        person.completed = !person.completed
      }

      return person
    }))
  }

  function removeTodo(id) {
    setPeople(people.filter(person => person.id !== id))
  }

  function addTodo(title) {
    const newPeople = {
      id: Date.now(),
      title,
      completed: false
    }


    setPeople([...people, newPeople])
  }

  const value = {
    checkTodo,
    removeTodo,
  }

  return (
    <Context.Provider value={value}>
      <div className="wrapper">
        <h1>Список действий</h1>
        <AddTodo onCreate={addTodo}/>
        {loading ? <Loader /> : null}
        {people.length ? <TodoList people={people}/> : loading ? null : <p>Нет элементов!</p>}
      </div>
    </Context.Provider>
  );
}

export default App;
