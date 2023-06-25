import React, { Component } from 'react'

export default class User extends Component {
  render() {
        if(this.props.name === "Shawarma"){
            throw new Error("Not a user")
            // return <h2>Not a user</h2>
        }
    return (
      <div>
        {/* <h1>This is User Component</h1> */}
        <p className='text-center'>This is <strong>{this.props.name}</strong></p>
      </div>
    )
  }
}
