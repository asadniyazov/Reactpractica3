import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Maincontext } from '../../context/MainProvider'

function UserNavbar() {
  const{Basket,Wishlist}=useContext(Maincontext)
  return (
    <>
    <ul>
       <li><NavLink to={'/'}>Home</NavLink></li> 
        <li><NavLink to={'admin'}>Admin</NavLink></li>
        <li><NavLink to={'basket'}>Basket{Basket.length}</NavLink></li>
        <li><NavLink to={'wishlist'}>Wishlist{Wishlist.length}</NavLink></li>
    </ul>
    </>
  )
}

export default UserNavbar