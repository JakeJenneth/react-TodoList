import React, { useState } from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";

function App() {
  let [people, setPeople] = useState([
    {id: 1, name: 'Elena', completed: false},
    {id: 2, name: 'Max', completed: true},
    {id: 3, name: 'Vitya', completed: false},
  ])

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

  function addTodo(name) {
    const newPeople = {
      id: Date.now(),
      name,
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
        <h1>Todo List</h1>
        <AddTodo onCreate={addTodo}/>
        {people.length ? <TodoList people={people}/> : <p>No Todos!</p>}
      </div>
    </Context.Provider>
  );
}

export default App;
