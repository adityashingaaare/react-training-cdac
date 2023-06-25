import React, { Component, PureComponent } from 'react'
import ComponentTwo from './ComponentTwo'

export default class ComponentOne extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:"Aditya"
      }
    }

    changeName = () =>{
        if(this.state.name == "Aditya"){
            this.setState({name:"Vadapav"})
        }else{
            this.setState({name:"Aditya"})
        }
       console.log("Component one is Called.")
    }
  render() {
    const{name} = this.state;
    return (
      <div>
        <h1>This is Component One</h1>

        <h2>Name is: {name}</h2>
        <button className='btn btn-primary' type='button' onClick={this.changeName}>changeName</button>
        <hr></hr>
        <ComponentTwo myName={name} />
      </div>
    )
  }
}
