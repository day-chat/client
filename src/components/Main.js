import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Welcome from './Welcome'

function Main() {
    return (
        <div className="bg-slate-100 h-screen w-screen flex flex-col">
            <Navbar />
            
            <div className='w-full flex-grow flex'>
                <Sidebar />
                
                <Routes>
                    <Route path="/" element={<Welcome />} />
                </Routes>
            </div>
      </div>
    )
}

export default Main
