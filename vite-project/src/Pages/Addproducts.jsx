import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
// import { useEffect } from 'react';
import * as Yup from 'yup';
function Addproducts() {
    // useEffect(() => {
    //     GetProduct()
    
    // }, [])
    // async  function GetProduct() {
    //     const response= await fetch("http://localhost:3000/product")
    //     const data=await response.json()
    //     return  setCategory(data)
    //  }
    // async  function AddProduct(values) {
    //     const response= await fetch("http://localhost:3000/product",{method:"Post", headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //       },

    //       body: JSON.stringify(values)})
    //     const data=await response.json()
    //     GetProduct()
    //  }
  return (
    <>
      <Formik
       initialValues={{ title: '', image : '', description: '', price:'' }}
       validationSchema={Yup.object({
         title: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
         image: Yup.string()
           .max(60, 'Must be 60 characters or less')
           .required('Required'),
           description: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
          price: Yup.number()
           .required('Required'),
       })}
       onSubmit={(values ) => {
        fetch("http://localhost:3000/product",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(values)
})
       }}
     >
       <Form>
         <label htmlFor="title">Title</label>
         <Field name="title" type="text" />
         <ErrorMessage name="title" />
       <br />
         <label htmlFor="image">Last Name</label>
         <Field name="image" type="text" />
         <ErrorMessage name="image" />
 <br />
         <label htmlFor="description">description</label>
         <Field name="description"  />
         <ErrorMessage name="description" />
 <br />
       <label htmlFor="price">Price</label>
         <Field name="price" type="number" />
         <ErrorMessage name="price" />
         <br />
         <button type="submit">Submit</button>
       </Form>
     </Formik>
    </>
  )
}

export default Addproducts