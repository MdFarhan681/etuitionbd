import React from 'react'
import Navbar from '../Components/Navber'
import { Outlet } from 'react-router'
import image from "../../src/assets/image.png"
const Dashboard = () => {
  return (
   <div className=' min-h-screen flex flex-col' >
     <div className="main grow ">
        <Navbar></Navbar>
        <main className='mx-auto'>
        
            <Outlet></Outlet>
        </main>
      </div>
      
    </div>
  )
}

export default Dashboard
