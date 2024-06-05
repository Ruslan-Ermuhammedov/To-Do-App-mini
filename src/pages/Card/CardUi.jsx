import React, { useContext } from 'react'
import { StateContext } from '../../App'

function CardUi({item}) {
    const { completed,task, id }=item
    const { taskState, taskDispatch } = useContext(StateContext)
    
    // DELETE_TASK
    const deleteTask = () => {
        taskDispatch({
            type: "DELETE_TASK",
            payload: { id }
        })

    }
    const toggleTask = () => {
        taskDispatch({
            type: 'TOGGLE_TASK',
            payload: { id: id }
        });
    };

    return (
        <div className='flex flex-row justify-between  bg-white p-4 rounded-xl '>
            <div className='flex flex-row gap-3 items-center '>
            <input type="checkbox" checked={task.completed} onChange={toggleTask} />
            <h1 className='text-lg'>{task}</h1>

            </div>
            <button onClick={deleteTask} className='text-white bg-orange-600 text-sm px-4 py-2 rounded-lg'>remove</button>
        </div>
    )
}
// shu hshshshshshhs
export default CardUi   
