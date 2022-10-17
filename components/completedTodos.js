import React from 'react'

export default function completedTodos({setStatus}) {
    const statusHandler = (e) =>{
       setStatus(e.target.value)
    }


  return (
    <form>
    <div className="dropDown">
      <select onChange={statusHandler} name="todolist" className="filter-todo">
        <option value="all">All Todos</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
      </div>
    </form>
  )
}
