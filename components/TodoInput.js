import React from 'react'
import { useState } from 'react'
import { Flex, Box, Input, Button } from "@chakra-ui/react"
import { useDispatch } from 'react-redux'
import { saveTodo } from '../redux/slices/todoSlice'
import { nanoid } from '@reduxjs/toolkit'
import { useColorModeValue } from '@chakra-ui/react'
import { AddIcon } from "@chakra-ui/icons"

const TodoInput = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const buttonColor = useColorModeValue("#4462b5", "#7CB9E8")

    const addTodo = (event) => {
      dispatch(saveTodo({
        item: input,
        done: false,
        // id: nanoid(),
        // createdAt: new Date().toISOString(),
        id: Date.now()
      })),
      event.preventDefault(),
      setInput('')        
    } 

  return (
    <Flex
      pos="absolute"
      mt={["22.5rem", "23rem", "25rem"]}
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
        <Input
          value={input}
          onChange={e =>setInput(e.target.value)}
          placeholder="Add new todo..."
          size={["xs", "sm", "sm"]}
          border="0.1rem solid #7CB9E8"
        />
        <Button
          onClick={addTodo}
          disabled={!input}
          w={["5rem"]}
          borderRadius="0.5rem"
          mt="0.5rem"
          bg={buttonColor}
          color="white"
        >
          <AddIcon/>
        </Button>
    </Flex>
  )
}

export default TodoInput