import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Add = () => {

    const navigate = useNavigate();

    const[product,setProduct] =useState({
        name:"",
        price:"",
        company:""
    })

    const{name,price,company} = product;

     const inputChangeHandler = (event) => {
        setProduct({...product,[event.target.name]: event.target.value})
    }

    const addProduct = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8888/product",product).then(() =>{
            window.alert("Success!");
            navigate("/dashboard");
        })

    }
  return (
    <div>
        <h1>Add product to the list</h1>
        <form onSubmit={addProduct}  style={{width:"400px",margin:"auto"}}>
        <div className='form-group'>
            <label className='form-label'>Product Name:</label>{' '}
            <input type='text' name='name' className='form-control' value={name} onChange={inputChangeHandler}></input>
        </div>
        <div className='form-group'>
            <label className='form-label'>price: </label>{' '}
            <input type='text' name='price' className='form-control' value={price} onChange={inputChangeHandler}></input><br />
         </div>
        <div className='form-group'>
            <label className='form-label'>Company: </label>{' '}
            <input type='text' name='company' className='form-control' value={company} onChange={inputChangeHandler}></input><br/>
            <button className='btn btn-primary mt-2' type='submit'>Submit</button>
        </div>
        </form>
    </div>
  )
}

export default Add;