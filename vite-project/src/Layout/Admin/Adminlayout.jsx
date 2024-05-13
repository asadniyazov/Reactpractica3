import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'

function Adminlayout() {
  return (
   <><AdminNavbar></AdminNavbar>
   <Outlet></Outlet>
   </>
  )
}

export default Adminlayout