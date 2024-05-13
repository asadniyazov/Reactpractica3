import React, { useContext } from 'react'
import { Maincontext } from '../context/MainProvider'
import "./Home.scss"
function Basket() {
  const {Basket,Decrease,RemovbeBasket,IncreaseBasket}=useContext(Maincontext)
  return (
   <>
    <div className='CardContainer'>
   {Basket.map((x)=><>
    <h1 className='Cardh1'>{x.title}</h1>
        <img className='Cardimage' src={x.image} alt="" />
        <p className='Cardprice'>{x.price}$</p>
        <p>Count:{x.count}</p>
        <button onClick={()=>IncreaseBasket(x)}> +</button>
        <button onClick={()=>RemovbeBasket(x)}>x</button>
        <button onClick={()=>Decrease(x)}>-</button>
   </>)}
   </div>
   </>
  )
}

export default Basket