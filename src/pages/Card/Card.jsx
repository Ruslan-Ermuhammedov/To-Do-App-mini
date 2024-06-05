import React, { useContext } from 'react'
import { StateContext } from '../../App'
import CardUi from './CardUi'

function Card() {
    const { taskState, taskDispatch } = useContext(StateContext)
    const filtered = taskState.task.filter(item => item.completed === true)
    console.log(filtered.length)
  return (
    <div>
     
    <div className='w-[420px] p-7 bg-zinc-100 m-auto mt-9 min-h-[300px] rounded-xl flex flex-col gap-4'>
      <div className='flex flex-row gap-9'>
        <h1 className='text-xl font-medium'> All Task: {taskState.task.length} </h1>
         <h1 className='text-xl font-medium'>Doing: {taskState.task.length-filtered.length}</h1>
         <h1 className='text-xl font-medium'>Done: {filtered.length}</h1>
      </div>

   {taskState.task.map((item)=><CardUi key={item.id} item={item}/>)}
    </div>
    </div>
  )
}

export default Card
