import React from 'react'

export default function todoItem({item, done, id}) {
  return (
    <div className='todoItem'>
        <p>{item}</p>
    </div>
  )
}
