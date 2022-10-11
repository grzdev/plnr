import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveTodo } from '../redux/slices/todoSlice'

export default function input() {
    const [ input, setInput ] = useState()
    const dispatch = useDispatch()

    const addTodo = () => {
            
    }
  return (
    <div>
        <input
            type="text" className='input'
            value={input} onChange={(e)=> setInput(e.target.value)}
        />
        <button
            className='button'
            onClick={addTodo}
        >Add</button>
    </div>
  )
}
