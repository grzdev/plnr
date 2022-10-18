import Input from "../components/input"
import TodoItem from "../components/todoItem"
import { useSelector } from 'react-redux'
import { useState, useEffect} from 'react'
import { selectTodoList } from '../redux/slices/todoSlice'
import CompletedTodos from "../components/completedTodos"


export default function Home() {
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
        setFilteredTodos(todolist.filter(todo => todo.done === true));
        break;
      case "uncompleted":
        setFilteredTodos(todolist.filter(todo => todo.done === false));
        break;
      default:
        setFilteredTodos(todolist);
    }
  }

  

  //darkMode
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  
  //Loop
  let todos = [];
  filteredTodos.forEach((todo)=>{
    todos.push(<TodoItem
      key={todo.id}
      id={todo.id}
      name = {todo.name}
      done = {todo.done}
      />)
  })

  
  return (
    <div>
      <div className="header-div">
          <h1 className="header1">Website Todo</h1>
        </div>
      <div className='app'>
        <div className="dropDown">
          <CompletedTodos
            setStatus={setStatus}
          />     
        </div>
        <div className='todo-div'>
          <div className='todo-container'>
             {todos}
          </div> 
          <Input
            filteredTodos={filteredTodos}
          />
        </div>
      </div>

      <div className="darkMode">
        <label className="switch">
          <input type="checkbox" onClick={toggleTheme}/>
          <span className="slider round"></span>
        </label>
      </div>

      
   </div>
  )
}
