import React, { ReactElement } from 'react'

interface props {}
const ToDoList: React.FC<props> = (): ReactElement => {
  return (
    <div className='container'>
      Todo: microfrontend1
      <div>ToDoList</div>
    </div>
  )
}

export default ToDoList;

