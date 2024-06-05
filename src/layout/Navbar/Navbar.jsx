import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='w-full bg-slate-200 p-3 items-center justify-center flex flex-row gap-4 h-20'>
            <NavLink className={"font-bold text-2xl active:text-teal-500 "} to={"/"}>Home</NavLink>
            <NavLink className={"font-bold text-2xl active:text-teal-500"}  to={"/house"}>House</NavLink>
            <NavLink className={"font-bold text-2xl active:text-teal-500"}  to={"/todoapp"}>ToDoApp</NavLink>
            <NavLink className={"font-bold text-2xl active:text-teal-500"}  to={"/card"}>Card</NavLink>
        </nav>
    )
}

export default Navbar
