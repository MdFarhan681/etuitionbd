import React from 'react'

import { Outlet } from 'react-router'
import Navbar from '../Components/Navber'

const Auth = () => {
  return (
   <div className=' min-h-screen flex flex-col' >
     <div className="main grow ">
        <Navbar></Navbar>
        <main className='mx-auto '>
            <Outlet></Outlet>
        </main>
      </div>
      
    </div>
  )
}

export default Auth
