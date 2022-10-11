import React from 'react'

export default function todoItem({name, done, id}) {

    const handleCLick = () =>{

    }
  return (
    <div className='todoItem'>
        <input 
            type="checkbox" 
            id="todo" 
            checked={done}
            name="isFriendly"
            className='todo-check'
            onChange={handleCLick()}
        />
        <label
            htmlFor="todo"
            className={done && 'todo-label-done'}
        >{name}</label>
    </div>
  )
}
