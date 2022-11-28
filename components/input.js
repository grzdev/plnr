import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BsPlusLg } from "react-icons/bs"
import { saveTodo } from '../redux/slices/todoSlice'
import { Button, FormControl, Input } from '@chakra-ui/react'

const input = () => {
    const [ input, setInput ] = useState('')  
    const dispatch = useDispatch()
    
    const addTodo = (event) => {
        dispatch(saveTodo({
            name : input,
            done: false,
            id: Date.now()
        })),
        event.preventDefault(),
        setInput('')        
    }

  return (
    <FormControl>
       <Input
            type="text"
            id='input'
            name='input'
            value={input}
            onChange={(e)=> setInput(e.target.value)}
            placeholder="Add new todo..." 
        />

        <Button
            onClick={addTodo}
            disabled={!input}
            type="submit"
            id='button' 
        >
            <BsPlusLg   />
        </Button>
    </FormControl>
  )
}

export default input