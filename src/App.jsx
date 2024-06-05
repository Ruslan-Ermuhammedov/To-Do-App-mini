import { createContext, useReducer, useState } from 'react'
import Home from './pages/Home/Home'
import Navbar from './layout/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import House from './pages/House/House'
import ToDoApp from './pages/ToDoApp/ToDoApp'
import Card from './pages/Card/Card'
import { taskInitialState, taskReducer } from './reducer/taskreducer'
export const  StateContext=createContext()
function App() {
const [taskState,taskDispatch]=useReducer(taskReducer,taskInitialState)
// console.log(taskState.task)
  return (
    <>
    <StateContext.Provider value={{taskState,taskDispatch}}>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='house' element={<House/>} />
        <Route path='todoapp' element={<ToDoApp/>} />
        <Route path='card' element={<Card/>} />
  
      </Routes>
    </StateContext.Provider>
    </>
  )
}
// shuuuuuuuuuuuuuuuuuu
export default App


