import React from 'react'
import { useState, useEffect} from 'react'
import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import { useColorModeValue } from '@chakra-ui/react'
import TodoInput from '../components/TodoInput'
import { useSelector } from 'react-redux'
import { selectTodoList } from '../redux/slices/todoSlice'
import TodoStatus from '../components/TodoStatus'
import Todo from '../components/Todo'

const todoDiv = () => {
    
    const todoList = useSelector(selectTodoList)

    //Completed
    const [status, setStatus] = useState('all')
    const [filteredTodos, setFilteredTodos] = useState([])
  
    useEffect(()=>{
      filterHandler();
    },[todoList, status])
  
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todoList.filter(todo => todo.done === true));
          break;
        case "uncompleted":
          setFilteredTodos(todoList.filter(todo => todo.done === false));
          break;
        default:
          setFilteredTodos(todoList);
      }
    }

    // let todos = [];
    // filteredTodos?.forEach((todo)=>{
    //   todos.push(
    //   <TodoItem
    //     key={todo.id}
    //     id={todo.id}
    //     name = {todo.item}
    //     done = {todo.done}
    //     />
    //   )
    // })
    let todos = []
    filteredTodos?.forEach((todo)=>{
        todos.push(
            <Todo
                key={todo.id}
                id={todo.id}
                name={todo.item}
                done={todo.done}
            />
        )
    })
  


  const textColor = useColorModeValue("#00308F", "white")
  return (
    
    <Container
        maxW="container.xl"
        centerContent
    >
        <Flex
            justifyContent="center"
            alignItems="center"
            flexDir="column"
            mt="-1.6rem"
        >
            <Heading
                color={textColor}
            >
                Hey,
            </Heading>
            <Text
                textAlign="center"
                color={textColor}
                fontWeight="700"
            >
                what do you want to do today?
            </Text>
        </Flex>

        <Flex
            py={[4, 9, 12]} 
        >
            <Flex 
                w={[290, 300, 400]}
                h={[450, 500, 500]}
                boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 50px;" 
                mt={["0.2rem", "-1.5rem", "-1.5rem"]}
                flexDir="column"
                alignItems="center"
                mb={["5rem", "1rem", "1rem"]}
            >
            <Box
                mt="0.7rem"
            >
                <TodoStatus
                    setStatus={setStatus}
                />
            </Box>
                
            <Box
            >
              {/* {
                todoList?.map(item=>(
                    <TodoItem
                        key={item.id}
                        name= {item.item}
                        done={item.done}
                        id={item.id}
                    />
                ))
            } */}
            {todos}
            </Box>
          
            <TodoInput
                filteredTodos={filteredTodos}
            />

            </Flex>
        </Flex>
        

    </Container>
   
    
    // <div>
    //   <div className="header-div">
    //       <h1 className="header1">Website Todo</h1>
    //     </div>
    //   <div className='app'>
    //     <div className="dropDown">
    //       <CompletedTodos
    //         setStatus={setStatus}
    //       />     
    //     </div>
    //     <div className='todo-div'>
    //       <div className='todo-container'>
    //          {todos}
    //       </div> 
    //       <Input
    //         filteredTodos={filteredTodos}
    //       />
    //     </div>
    //   </div>

    //   <div className="darkMode">
    //     <label className="switch">
    //       <input type="checkbox" onClick={toggleTheme}/>
    //       <span className="slider round"></span>
    //     </label>
    //   </div>

      
    //  </div>

  )
}

export default todoDiv