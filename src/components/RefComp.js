import React, { Component } from 'react'

export class RefComp extends Component {
    constructor(props) {
      super(props)
      //Created ref
    this.inputRef = React.createRef();
    }

    accessInput = () =>{
        this.inputRef.current.focus();
        console.log(this.inputRef.current.value)
    }
  render() {
    return (
        <div>
      <div className='container bg-secondary text-center'>
        {/* <h2>This is ref Component</h2> */}
        {/* we assign the ref to input */}
        <input type='text' name='myText' ref={this.inputRef} /><br/>
        <button type='button' className='btn btn-warning mt-3 mb-3' onClick={this.accessInput}>Check</button>
        <h2></h2>
      </div>
        <h2></h2>
      </div>
    )
  }
}

export default RefComp