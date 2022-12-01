import { Select } from '@chakra-ui/react'
import React from 'react'

const TodoStatus = ({setStatus}) => {
    const statusHandler = (e) =>{
        setStatus(e.target.value)
     }
 
  return (
    <Select
     onChange={statusHandler}
     size={["xs", "sm", "sm"]}
     variant='filled'
    >
        <option value="all">All todos</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
    </Select>
  )
}

export default TodoStatus