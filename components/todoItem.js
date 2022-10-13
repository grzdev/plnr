import React from 'react'
import { checkTodo } from '../redux/slices/todoSlice'
import { useDispatch } from 'react-redux'
import { MdDeleteOutline } from "react-icons/md"
import { deleteTodo } from '../redux/slices/todoSlice'

export default function TodoItem({name, done, id}) {
  const dispatch = useDispatch()

    const handleCheckTodo = () =>{
      dispatch(checkTodo(id))
    }

    const handleRemoveTodo = () =>{
      dispatch(deleteTodo({id:id})) 
    }
  return (
    <div className='todoItem'>
        <input 
            type="checkbox" 
            id="todo" 
            checked={done}
            name="isFriendly"
            className='todo-check'
            onChange={handleCheckTodo}
        />
        <div className='todo-task'>
        <label
            htmlFor="todo"
            className={done && 'todo-label-done'}
            style={{
              fontSize:"1rem",
              fontFamily: "'Poppins', sans-serif"
            }}
        >{name}</label>
        </div>

        <button className='delete-button' onClick={()=> handleRemoveTodo()}> 
          <MdDeleteOutline />
        </button>
    </div>
  )
}
