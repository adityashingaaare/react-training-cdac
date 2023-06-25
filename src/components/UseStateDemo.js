import React, { useState } from 'react'

const UseStateDemo = () => {

    const[city,setCity] =useState("Pune");
    const[emp,setemp] = useState({id:101,name:"aditya",post:"Vadpav"})
    const[fruits,setFruits] = useState(["Apple","Banana","Mango"])


    const changeFruits = () =>{

        setFruits(["adahd","adabdja","adlakd"]);
    }


    const changeCity = () => {
        setCity("Mumbai");
    }


  return (
    <div>
        <h1>This is UseStateDemo</h1>
        <p>I live in <strong>{city}</strong></p>
        <p>{`ID: ${emp.id} Name: ${emp.name}`}</p>
        <ol>
            {fruits.map((val,index) => {
                return  <li key={index}>{val}</li>
                
            })}
        </ol>
        <button type='button' className='btn btn-primary' onClick={changeFruits}>changeCity</button>
    </div>
  )
}

export default UseStateDemo