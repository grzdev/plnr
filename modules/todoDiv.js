import React from 'react'
import TodoInput from "../components/input"
import TodoItem from "../components/todoItem"
import { useSelector } from 'react-redux'
import { useState, useEffect} from 'react'
import { selectTodoList } from '../redux/slices/todoSlice'
import CompletedTodos from "../components/completedTodos"
import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import { useColorModeValue } from '@chakra-ui/react'

const todoDiv = () => {
    
  const todolist = useSelector(selectTodoList)

  //completed todos
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(()=>{
    filterHandler();
  },[todolist, status])

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todolist?.filter(todo => todo.done === true));
        break;
      case "uncompleted":
        setFilteredTodos(todolist?.filter(todo => todo.done === false));
        break;
      default:
        setFilteredTodos(todolist);
    }
  }

  

//   //darkMode
//   const [theme, setTheme] = useState('light');
//   const toggleTheme = () => {
//     if (theme === 'light') {
//       setTheme('dark');
//     } else {
//       setTheme('light');
//     }
//   };
//   useEffect(() => {
//     document.body.className = theme;
//   }, [theme]);

  
  //Loop
  let todos = [];
  filteredTodos?.forEach((todo)=>{
    todos.push(<TodoItem
      key={todo.id}
      id={todo.id}
      name = {todo.name}
      done = {todo.done}
      />)
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
                what do you want to do today..
            </Text>
        </Flex>

        <Flex
            px={[0, 7, 10]} 
        >
            <Flex 
                w={[290, 300, 400]}
                h={[450, 500, 500]}
                boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 50px;" 
                mt={["2rem", "1rem", "1rem"]}
                flexDir="column"
                alignItems="center"
            >
                <Flex
                  float="left"
                  p="1rem"
                >
                    <CompletedTodos
                    setStatus={setStatus}
                    /> 
                </Flex>

                {todos}
            
                
                <Box>
                    <TodoInput
                     filteredTodos={filteredTodos}
                    />
                </Box>


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