import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Edit = () => {

    const{id} = useParams();
    const navigate = useNavigate();

    

    const [product,setProduct] = useState({
        name:"",
        price:"",
        company:""
    })

    useEffect(() => {
        axios.get(`http://localhost:8888/product/${id}`).then((res) =>{
            console.log(res.data);
            setProduct(res.data);
        })
    },[])

   
    const inputChangeHandler = (event) => {
       setProduct({...product,[event.target.name]: event.target.value})
   }
   

   const editProduct = (event) => {
       event.preventDefault();
       axios.put(`http://localhost:8888/product/${id}`,product).then(() =>{
           window.alert("Success!");
           navigate("/dashboard");
       })
 }
    
    const{name,price,company} = product;

  return (
    <div>
        <h2>Edit</h2>
        <form onSubmit={editProduct}  style={{width:"400px",margin:"auto"}}>
        <div className='form-group'>
            <label className='form-label'>Product Name:</label>
            <input type='text' name='name' className='form-control' value={name} onChange={inputChangeHandler}></input>
        </div>
        <div className='form-group'>
            <label className='form-label'>price: </label>
            <input type='text' name='price' className='form-control' value={price} onChange={inputChangeHandler}></input><br />
         </div>
        <div className='form-group'>
            <label className='form-label'>Company: </label>
            <input type='text' name='company' className='form-control' value={company} onChange={inputChangeHandler}></input><br/>
            <button className='btn btn-primary mt-2' type='submit'>Submit</button>
        </div>
        </form>
    </div>
  )

  }
export default Edit