import React, { Component } from 'react'

 class FavColor extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         color: "red"
      }
    }

    // static getDerivedStateFromProps = (props,state) =>{
    //     return {
    //         color: props.color
    //     }

    // }

    // shouldComponentUpdate(){
    //     return true;
    // }

    // componentDidMount(){

    //     setTimeout(() =>{this.setState({color:'yellow'})},2000)
    // }

    getSnapshotBeforeUpdate(prevState,preProps){
        document.getElementById("beforeupdate").innerHTML= `before update color was: ${preProps.color}`
    }

    componentDidUpdate(){
        document.getElementById("afterupdate").innerHTML= `after update color is: ${this.state.color}`
    }

    changeColor = () =>{
        this.setState({color: "gray"})
    }

  render() {

    const{ color} = this.state;
    return (
      <div>
        <h2>FavColor is: <strong>{color}</strong></h2>
      <button type='button' onClick={this.changeColor} >updateColor</button>
      <div id='beforeupdate'></div>
      <div id='afterupdate'></div>
      </div>
    )
  }
}

export default FavColor