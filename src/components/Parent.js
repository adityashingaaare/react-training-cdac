import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment = () =>{
        this.setState({count: this.state.count+1})
    }

    reset = () =>{
        this.setState({count: 0})
    }




  render() {
    const{count} = this.state;
    return (
      <div>
        <h1>This is Parent</h1>
        <h3>My counter is {count}</h3>
        <button type='button' onClick={this.increment}>increment</button>&nbsp;
        <button type='reset' onClick={this.reset}>Reset</button>
        <h3>My Name is</h3>
        <hr></hr>
        <Child count={count} increment={this.increment} setName ="Aditya" />
      </div>
    )
  }
}

export default Parent