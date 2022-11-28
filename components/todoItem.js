import React from 'react'
import { checkTodo } from '../redux/slices/todoSlice'
import { useDispatch } from 'react-redux'
import { MdDeleteOutline } from "react-icons/md"
import { deleteTodo } from '../redux/slices/todoSlice'
import { Button } from '@chakra-ui/react'

export default function TodoItem({name, done, id}) {
  const dispatch = useDispatch()

    const handleCheckTodo = () =>{
      dispatch(checkTodo(id))
    }

    const handleRemoveTodo = () =>{
      dispatch(deleteTodo({id:id})) 
    }
  return (
    // <div className='todoItem'>
    //     <input 
    //         type="checkbox" 
    //         id="todo" 
    //         checked={done}
    //         name="isFriendly"
    //         className='todo-check'
    //         onChange={handleCheckTodo}
    //     />
    //     <div className='todo-task'>
    //     <label
    //         htmlFor="todo"
    //         className={done && 'todo-label-done'}
    //         style={{
    //           fontSize:"0.8rem",
    //           fontFamily: "'Poppins', sans-serif"
    //         }}
    //     >{name}</label>
    //     </div>

    //     <button className='delete-button' onClick={()=> handleRemoveTodo()}> 
    //       <MdDeleteOutline />
    //     </button>
    // </div>
    <Box>
      <Checkbox
        id="todo" 
        isChecked={allChecked}
        name="isFriendly"
        onChange={handleCheckTodo}  
      >
        {name}
      </Checkbox>

      <Button
        onClick={()=> handleRemoveTodo()}
      >
        <MdDeleteOutline />
      </Button>
    </Box>
  )
}
