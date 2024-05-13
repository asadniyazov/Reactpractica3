import React from 'react'
import { Link } from 'react-router-dom'
import "./AdminNavbar.scss"
function AdminNavbar() {
  return (
   <>
   <ul>
    <li><Link to={"adminpanel"}>Adminpanel</Link></li>
    <li><Link to={"addproduct"}>Add Products</Link></li>
    
   </ul>
   </>
  )
}

export default AdminNavbar