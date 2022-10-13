import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { BsPlusLg } from "react-icons/bs"
import { saveTodo } from '../redux/slices/todoSlice'

export default function Input() {
    const [ input, setInput ] = useState("")
    const dispatch = useDispatch()

    const addTodo = () => {
        dispatch(saveTodo({
            name : input,
            done: false,
            id: Date.now()
        }))
    }
  return (
    <div className='input-box'>
        <input
            type="text" className='input'
            value={input} onChange={(e)=> setInput(e.target.value)}
        />
        <button
            className='button'
            onClick={addTodo}
        >
            <BsPlusLg className='add-icon'/>
        </button>
    </div>
  )
}
