import React from 'react'
import { Maincontext } from '../context/MainProvider'
import { useContext} from 'react'
function Wishlist() {
    const {Wishlist,RemoveWishlist}=useContext(Maincontext)
  return (
    <>
      {Wishlist.map((x)=><>
      <button onClick={()=>RemoveWishlist(x)}>x</button>
    <h1 className='Cardh1'>{x.title}</h1>
        <img className='Cardimage' src={x.image} alt="" />
        <p className='Cardprice'>{x.price}$</p>
        </>)}
    </>
  )
}

export default Wishlist