import React, { createContext } from 'react'
import { useState } from 'react'
import useLocalstorage from '../Hooks/useLocalstorage'
 export const Maincontext=createContext()
function MainProvider({children}) {
  const [Basket, setBasket] = useLocalstorage("basket",[])
  const [Wishlist, setWishlist] = useLocalstorage("wishlist",[])
  function AddBasket(item) {
    const index=Basket.findIndex((x)=>x.id===item.id)
    if (index===-1) {
      setBasket([...Basket,{...item,count:1}])
    }
  }
  function AddWishlist(item) {
    const index=Wishlist.findIndex((x)=>x.id===item.id)
    if (index===-1) {
      setWishlist([...Wishlist,item])
    }
    
  }  
  function IncreaseBasket(item) {
    const index=Basket.findIndex((x)=>x.id===item.id)
    if (index!==-1) {
      Basket[index].count++
      setBasket([...Basket])
      
    }
  }
  function Decrease (item) {
    const index=Basket.findIndex((x)=>x.id===item.id)
   const  element=Basket[index]
    if (element.count>1) {
      Basket[index].count--
      setBasket([...Basket])
    }
  }
  function RemovbeBasket(item) {
    setBasket(Basket.filter((x)=>x.id!==item.id))
  }
  function RemoveWishlist(item) {
    setWishlist(Wishlist.filter((x)=>x.id!==item.id))
  }
  return (
   <Maincontext.Provider value={{Basket,Wishlist,AddBasket,Decrease,RemovbeBasket,IncreaseBasket,AddWishlist,RemoveWishlist}}>{children}</Maincontext.Provider>
  )
}

export default MainProvider