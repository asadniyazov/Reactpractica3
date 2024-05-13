import React from 'react'
import { Helmet ,HelmetProvider} from 'react-helmet-async';
import { useState ,useEffect } from 'react';
import "./Home.scss"
import { Link } from 'react-router-dom';
function Adminpanel() {
    const [Category, setCategory] = useState([])
    useEffect(() => {
        GetProduct()
    }, [])
    
   async  function GetProduct() {
       const response= await fetch("http://localhost:3000/product")
       const data=await response.json()
       return  setCategory(data)
    }
    async  function DeleteProduct(id) {

        const response= await fetch("http://localhost:3000/product/"+id,{method:"Delete"
    })
        const data=await response.json()
       GetProduct()
     }
  return (
    <>
    <HelmetProvider >
      <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
     
  </HelmetProvider>
   <div className='CardContainer'>
    <table>
    <thead>
    <tr>
    <th>id</th>
    <th>Title</th>
    <th>Image</th>
    <th>Description</th>
    <th>Price</th>
    <th>Update</th>
    <th>Delete</th>
  </tr>
        </thead>
        <tbody>
    {Category.map((x)=><>
     <tr key={x.id}>
     <td>{x.id}</td>
    <td>{x.title}</td>
    <td><img className='image' src={x.image} alt="" /></td>
    <td> {x.description}</td>
    <td>{x.price}</td>
    <td><button><Link to={"/admin/adminpanel/update/"+x.id}>Update</Link></button></td>
    <td><button onClick={()=>DeleteProduct(x.id)}>Delete</button></td>
     </tr>
    </>)}
    </tbody>
    </table>
    </div>
    </>
  )
}

export default Adminpanel