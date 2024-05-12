import React from 'react'
import Home from './Home/Home'
import Courses from './components/Courses'
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';

export default function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/courses' element={<Courses/>}/>
    <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </div>
    </>
  )
}
