import React from "react";
import TodoItem from "./TodoItem";

const styles = {
   ul: {
      listStyle: 'none',
      padding: '0',
      margin: '0',
   }
}

const TodoList = (props) => {
   return (
      <ul style={styles.ul}>
         {props.people.map((person, index) => 
            <TodoItem person={person} index={index} key={person.id}/>
         )}
      </ul>
   )
}



export default TodoList