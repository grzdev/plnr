import { HamburgerIcon, MdArrowDropDown } from '@chakra-ui/icons'
import { Select, Box } from '@chakra-ui/react'
import React from 'react'


export default function completedTodos({setStatus}) {
    const statusHandler = (e) =>{
       setStatus(e.target.value)
    }


  return (
    // <form>
    // <div className="dropDown">
    //   <select onChange={statusHandler} name="todolist" className="filter-todo">
    //     <option value="all">All Todos</option>
    //     <option value="completed">Completed</option>
    //     <option value="uncompleted">Uncompleted</option>
    //   </select>
    //   </div>
    // </form>
    <Box>
      <Select 
        onChange={statusHandler} 
        name="todolist"
        variant="filled"
        w="8rem"
      >
        <option value="all">All Todos</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </Select>
    </Box>
  )
}
