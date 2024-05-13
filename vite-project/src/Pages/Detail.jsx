import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect ,useState } from 'react'
function Detail() {
    let {idDetail} =useParams()
    const [Category, setCategory] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/product/"+idDetail)
        .then(res=>res.json())
        .then(data=>setCategory(data))
    }, [])
  return (
    <>{
        <>
        <h1>{Category.title}</h1>
       <img src={ Category.image} alt="" />
       <h3>{Category.description}</h3>
       <h3>{Category?.rating?.rate}⭐</h3>
       <p>{Category.price}$</p>
       </>
    }</>
  )
}

export default Detail