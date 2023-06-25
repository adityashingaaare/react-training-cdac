import React, { Component } from 'react'
import '../components/external.module.css'

 class ToggleFace extends Component {
  

    constructor(props) {
      super(props)
    
      this.state = {
         face : "😊",
         mood: "happy"
      }
    }

    changeMoodHappy = () =>{
            this.setState({face: "😊",mood:"happy"})
    }

    changeMoodSad = () =>{
      
           this.setState({face: "😒",mood:"sad"})
     
    }
    render(){
        const{face,mood} = this.state;
        return (
          <div className='myBox'>
            <h2 style={{fontSize: "40px"}}>{face}</h2>
            <h2>I am {mood}</h2>
            <button type='button' onClick={this.changeMoodHappy}>Happy</button>&nbsp;
            <button type='button' onClick={this.changeMoodSad}>sad</button>
          </div>
        )
    }
}
export default ToggleFace
    
        
      
    
    
    
    
    
    

   
    
    