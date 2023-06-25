import React, { Component } from 'react'
import Data from '../shared/constant/constantData';

class ToggleImage extends Component {

    constructor(props) {
      super(props)
        
      this.isCond = false;
      this.state = {

        image1 :Data.shawarma,
        image1name : "Shawarma",
         
      }
    }

    changeImage =() =>{
        this.isCond = !this.isCond;  //Toggles value
        if(this.isCond){
        this.setState({image1: Data.shawarma, image1name : "Shawarma"})
      }else{
        this.setState({image1: Data.vadapav, image1name:"Vadapav"})
      }
    }
  render() {
    const{image1,image1name} =this.state;


    return (
      <React.Fragment className='myBox'>
        <h2>This is my ToggleImage Component</h2>
        <img src={image1}></img><br />
        <h2>{image1name}</h2>
        <button type='button' onClick={this.changeImage}>Toggle</button>
        
      </React.Fragment>
    )
  }
}

export default ToggleImage;
