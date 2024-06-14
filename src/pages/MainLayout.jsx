import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/Navbar'
const MainLayout = () => {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <div>Hello world</div>
    </>
  )
}

export default MainLayout