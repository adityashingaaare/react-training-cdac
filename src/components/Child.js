import React from 'react'

const Child = ({count, increment, setName}) => {
  return (
    <React.Fragment>
        <h2>THis is Child Component</h2>
        <p>My Counter is: {count}</p>
        <button type='button' onClick={increment}>increment</button>&nbsp;
        <button type='button' onClick ={()=>window.alert(`Welcome ${setName}`)}>Greet</button>
    </React.Fragment>
  )
}

export default Child