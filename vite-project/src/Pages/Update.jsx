import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useState ,useEffect } from 'react';
// import { useEffect } from 'react';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
function Update() {
    let {id} =useParams()
    const [Category, setCategory] = useState(null)
    useEffect(() => {
        fetch("http://localhost:3000/product/"+id)
        .then(res=>res.json())
        .then(data=>setCategory(data))
    }, [])
    const navigate = useNavigate();
  return (
  <> {Category && <Formik
    initialValues={{ title: Category.title, image : Category.image, description: Category.description, price:Category.price }}
    validationSchema={Yup.object({
      title: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      image: Yup.string()
        
        .required('Required'),
        description: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
       price: Yup.number()
        .required('Required'),
    })}
    onSubmit={(values  ) => {
     fetch("http://localhost:3000/product/"+id,
  {
  headers: {
   'Accept': 'application/json',
   'Content-Type': 'application/json'
  },
  method: "PUT",
  body: JSON.stringify(values)
  })
  navigate("../adminpanel")
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
  </Formik>}
</>
  )
}

export default Update