 /*import React from 'react'
import Home from './CRUD/Home'
import Create from './CRUD/Create'
import Update from './CRUD/Update'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Read from './CRUD/Read'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/create" element={<Create/> }/>
        <Route path='/read/:id' element={<Read/>} />
        <Route path='/update/:id' element={<Update/> }/>
        <Route/>
    </Routes>
    </BrowserRouter>
  )
}

export default App 
*/
// todoapp
import React from 'react'
import Todo from './todo/Todo'
 import './todo/Style.css'

const App = () => {
  return (
    <>
    <Todo/>
    </>
  )
}

export default App