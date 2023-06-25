import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const DashBoard = () => {


    const[product,setProduct]=useState([]);


    useEffect(() => {
        fetchData();
    },[])

    const fetchData = () =>{
        axios.get("http://localhost:8888/product").then((res) => {
            console.log(res.data);
            setProduct(res.data);
        })
    }

    const deleteRecord = (id) => {
        if(window.confirm(`Are you sure to Delete record with ID ${id}`)){
            axios.delete(`${"http://localhost:8888/product"}/${id}`).then(() =>{
                window.alert("Deleted Successfully");
                fetchData();
            })
        }
        
    }
  return (
    <div><h2>DashBoard</h2>
    <div className='row'>
        <div className='col-sm-4'>
            <Link to='/add' className='btn btn-primary mb-2'><i class="fa fa-plus" aria-hidden="true"> Add</i></Link>
        </div>
        <div className='col-sm-8'></div>
    </div>
    <table className='table table-hover table-bordered table-striped'>
        <thead>
            <tr>
                <th>ID</th><th>product</th><th>price</th><th>Company</th><th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                product.map((val,index) =>{
                    return <tr key ={index}>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
                        <td>{val.price}</td>
                        <td>{val.company}</td>
                        <td>
                            <Link to={`/edit/${val.id}`} className='btn btn-otline-success btn-sm'><i class="fa fa-pencil" aria-hidden="true"></i>
</Link> |{' '}
                            <button type='button' className='btn btn-outline-danger'  onClick={() =>deleteRecord(val.id)} ><i class="fa fa-trash" aria-hidden="true"></i></button> 
                            
                        </td>
                    </tr>
                            
                })
            
            
            }
        </tbody>
    </table>
    </div>
  )
}

export default DashBoard