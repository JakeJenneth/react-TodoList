import React, { useState } from "react";
import PropTypes from 'prop-types'

const style = {
   button: {
      cursor: 'pointer',
      border: '1px solid #A1DBFD',
      padding: '8px 12px',
      borderRadius: '.5rem',
      background: '#E0F4FF',
      margin: '0 0 0 15px'
   },
}

const AddTodo = ({onCreate}) => {
   const [name, setName] = useState('')

   function submitHandler(e) {
      e.preventDefault()

      if(name.trim()){
         onCreate(name)
         setName('')
      }
   }

   return (
      <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
         <input value={name} onChange={event => setName(event.target.value)}/>
         <button style={style.button}>Добавить человека</button>
      </form>
   )
}

AddTodo.propTypes = {
   onCreate: PropTypes.func.isRequired
}

export default AddTodo