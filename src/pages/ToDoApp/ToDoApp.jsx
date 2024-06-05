import React, { useContext, useRef, useState } from 'react'
import { StateContext } from '../../App'

function ToDoApp() {
    const { taskState, taskDispatch } = useContext(StateContext)
    const [task, setTask] = useState("")
    const newTask = {
        task: task,
        id: taskState.task.length + 1,
        completed: false

    }
    const AddTaskHeandlear = (e) => {
        e.preventDefault()
        taskDispatch({
            type: "ADD_TASK",
            payload: newTask
        })
        setTask("")
        console.log(task)
    }
    return (
        <div className='w-80 h-72 rounded-xl bg-slate-300 m-auto mt-7 p-9'>

            <form className='flex flex-col gap-5 items-center' onSubmit={AddTaskHeandlear} >
                <h1 className=' font-bold text-4xl '>My Todos</h1>
                <input value={task} className='p-3 rounded-lg w-full' type="text" onChange={(e) => setTask(e.target.value)} placeholder='task kriting' />
                <button className='text-white bg-blue-500 text-lg px-7 py-3 rounded-lg'>Add Task</button>
            </form>
        </div>
    )
}
// shuuuuuuuuuuuuuuuuuuuuuu
export default ToDoApp
