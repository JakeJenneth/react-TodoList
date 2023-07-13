import React, { useContext } from "react";
import Context from "../context";
import PropTypes from 'prop-types'

const styles = {
   li: {
      display: 'flex',
      marginBottom: '5px',
      border: '1px solid grey',
      alignItems: 'center',
      padding: '10px',
      borderRadius: '.5rem',
      justifyContent: 'space-between'
   },

   button: {
      cursor: 'pointer',
      border: '1px solid #A1DBFD',
      padding: '8px 12px',
      borderRadius: '.5rem',
      background: '#E0F4FF',
   },

   input: {
      margin: '0 10px 0 0'
   }
}

const TodoItem = ({person, index}) => {
   const classes = []

   if(person.completed){
      classes.push('done')
   }

   const value = useContext(Context)

   return (
      <li style={styles.li}>
         <span className={classes.join(' ')}>
            <input 
               style={styles.input} 
               type="checkbox"
               checked={person.completed}
               onChange={() => value.checkTodo(person.id)}
            />
            <strong>{index + 1}</strong>
            &nbsp;
            {person.name}
         </span>
         <button onClick={() => value.removeTodo(person.id)} style={styles.button}>&times;</button>
      </li>
   )
}

TodoItem.propTypes = {
   person: PropTypes.object.isRequired,
   index: PropTypes.number,
}

export default TodoItem