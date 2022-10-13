import Input from '../components/Input'
import TodoItem from '../components/TodoItem'
import { useSelector } from 'react-redux'
import { selectTodoList } from '../redux/slices/todoSlice'

export default function Home() {
  const todolist = useSelector(selectTodoList)
  
  return (
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
  )
}
