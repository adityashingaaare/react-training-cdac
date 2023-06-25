import React, { Component } from 'react'
import shawarma from '../assets/Shawarma.webp'
import sample from '../assets/GOPR2199.MP4'
import nezuko from '../assets/1028689.jpg'
import './myExternal.css'
import stylefile from './external.module.css'


class Multimedia  extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         source: shawarma,
         fname : "Shawarma"
      }
    }

    changeImage = () =>{

      if(this.state.fname === "Shawarma"){
        this.setState({source:nezuko, fname: "Nezuko"})
      }else{
        this.setState({source:shawarma, fname: "Shawarma"})
      }

   

    }

  render() {

    const {source,fname} = this.state;
    return (
      <div>
        <h2 className={stylefile.myTitle}>Multimedia Component</h2>
        {/* <img src={shawarma}></img>
        <video src={sample} controls height="300px"></video> */}

        <img src={source} ></img>
        <h2>{fname}</h2> 
        <button onClick={this.changeImage}>Change Image</button> 

        {/* <h3 className="textDesign">Samosa</h3> */}
      </div>
    )
  }
}

export default Multimedia