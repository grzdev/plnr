import Input from '../components/input'
import TodoItem from '../components/todoItem'

const todolist = [
  {
    item: "todo1",
    done: true,
    id: 13
  },
  {
    item: "todo1",
    done: true,
    id: 12
  }
]

export default function Home() {
  return (
    <div className='app'>
    <div className='todo-div'>
    <h1 className='header1'>To-do list app</h1>
      <div className='todo-container'>
        {todolist.map(todo => (
          <TodoItem
          key={todo.id}
          item = {todo.item}
          done = {todo.done}
          />
        ))}
      </div> 
      <Input/>
    </div>
  </div>
  )
}
