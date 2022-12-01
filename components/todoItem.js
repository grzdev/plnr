import { Box, Button, Checkbox, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { setTodo } from '../redux/slices/todoSlice'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../redux/slices/todoSlice'
import { DeleteIcon } from "@chakra-ui/icons"
import { useColorModeValue } from '@chakra-ui/react'

const TodoItem = ({name, done, id}) => {
    const dispatch = useDispatch()

    const handleCheck = () => {
        dispatch(setTodo(id))
    }

    const handleRemoveTodo = () =>{
        dispatch(deleteTodo({id:id})) 
      }

    const bgColor = useColorModeValue("#00308F", "#7CB9E8")
  return (
    <Flex
        flexDir="row"
        alignItems="center"
        mt="1.5rem"
    >
        <Checkbox
            onChange={handleCheck}
            isChecked={done}
            mr="0.5rem"
        >

        </Checkbox>

        <Text 
            textDecor={done ? "line-through" : "none"}
            color={done? "grey" : "default"}
            w={["10rem", "15rem", "15rem"]}
            fontSize={["xs", "sm", "sm"]}
        >
            {name}
        </Text>

        <Button
            onClick={()=> handleRemoveTodo()}
            size={["xs", "sm", "sm"]}
        >
            <DeleteIcon color={bgColor}/>
        </Button>
    </Flex>
  )
}

export default TodoItem