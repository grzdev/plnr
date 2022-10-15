import Input from "../components/input"
import TodoItem from "../components/todoItem"
import { useSelector } from 'react-redux'
import { selectTodoList } from '../redux/slices/todoSlice'

export default function Home() {
  const todolist = useSelector(selectTodoList)

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
   </div>
  )
}
