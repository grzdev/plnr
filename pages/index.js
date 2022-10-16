import Input from "../components/input"
import TodoItem from "../components/todoItem"
import { useSelector } from 'react-redux'
import { useState, useEffect} from 'react'
import { selectTodoList } from '../redux/slices/todoSlice'


export default function Home() {
  const todolist = useSelector(selectTodoList)

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

  return (
    <div>
      <div className="header-div">
          <h1 className="header1">Website Todo</h1>
        </div>
      <div className='app'>

        <div className='todo-div'>
          <div className='todo-container'>
            {todolist.map((todo) => (
              <TodoItem
              key={todo.id}
              id={todo.id}
              name = {todo.name}
              done = {todo.done}
              />
            ))}
          </div> 
          <Input/>
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
