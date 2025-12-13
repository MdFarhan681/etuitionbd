import React from 'react'
import Navber from '../Components/Navber'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router'
import { DataProvider } from '../Components/context/DataContext'

const Root = () => {

  return (
    <DataProvider>
      <div className=' min-h-screen flex flex-col w-full' >
        <Navber></Navber>
      <div className="main grow">
          <Outlet></Outlet>
      </div>
        <Footer></Footer>
      
    </div>
    </DataProvider>
  )
}

export default Root
