import React, { useState } from 'react'

const Add = ({ onAddTodos }) => {
  const [text, setText] = useState('')

  const addTodos = (e) => setText(e.target.value)
  const onSubmitText = (e) => {
    e.preventDefault()
    if (text.trim().length === 0) return
    onAddTodos(text)
    setText('')
  }
  
  return (
    <div>
      <form onSubmit={onSubmitText}>
        <input 
          className="form-control" 
          type="text" 
          placeholder="Add Todo"
          value={text}
          onChange={addTodos}/>
        <button 
          className="btn btn-outline-secondary mt-2 btn-sm w-25" 
          type="submit">
          Save Todo
        </button>
      </form>
    </div>
  )
}

export default Add;