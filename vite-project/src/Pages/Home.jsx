import React, { useContext } from 'react'
 import { useState ,useEffect } from 'react'
 import "./Home.scss"
 import { Helmet ,HelmetProvider} from 'react-helmet-async';
 import { Link } from 'react-router-dom';
import { Maincontext } from '../context/MainProvider';
function Home() {
    const [Category, setCategory] = useState([])
    const{AddBasket,AddWishlist}=useContext(Maincontext)
    useEffect(() => {
        GetProduct()
    }, [])
    console.log(Category);
   async  function GetProduct() {
       const response= await fetch("http://localhost:3000/product")
       const data=await response.json()
       return  setCategory(data)
    }
    const [Inp1, setInp1] = useState("")
 function Sorted(item) {
    setCategory([...Category].sort((a,b)=>a[item]>b[item] ?1 :b[item]>a[item] ?-1 :0))
 }
  return (
   <>
    <HelmetProvider >
      <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
     
  </HelmetProvider>
  <input type="text"  value={Inp1} onChange={(e)=>setInp1(e.target.value)}/> <button onClick={()=>Sorted("price")}>Price</button>
  <button onClick={()=>Sorted("title")}>A-z</button>
   <div className='CardContainer'>
    {Category
    .filter((x)=>x.title.toLowerCase().includes(Inp1.toLowerCase()))
    .map((x)=><>
    <div className='Card' key={x.id}>
    <i onClick={()=>AddWishlist(x)} class="fa-regular fa-heart"></i>
        <h1 className='Cardh1'>{x.title}</h1>
        <img className='Cardimage' src={x.image} alt="" />
        <p className='Cardprice'>{x.price}$</p>
        <button onClick={()=>AddBasket(x)}>Add Basket</button>
        <button> <Link to={"/detail/"+x.id}>Go Detail</Link></button>
    </div>
    </>)}
    </div>
   </>
  )
}

export default Home