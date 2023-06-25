import React, { Component, PureComponent } from 'react'

export default class ComponentTwo extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
  render() {
    console.log("Component two is called")
    return (
      <div>
        <h1>This is Component Two</h1>
        <p>My name is: {this.props.myName}</p>
      </div>
    )
  }
}
