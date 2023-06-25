import { eventWrapper } from '@testing-library/user-event/dist/utils'
import React, { Component } from 'react'

export default class UserForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         fname : '',
         password: ''
      }
    }

    inputChangeHandler = (event) =>{
            // console.log(event.target.type);
            // console.log(event.target.name);
            // console.log(event.target.value);
            const {type,name,value} = event.target
            this.setState({[name]:value})
    }

    checkData = (event) =>{
        event.preventDefault();
        if(this.state.fname ===''){
            window.alert("Name is Required");
            return false;
        }
        if(!this.state.fname.match("^[a-zA-Z]{3,20}$")){
            window.alert("Write A Correct UserName")
        }
        if(this.state.password ===''){
          window.alert("Password is Required");
          return false;
        }
        if(!this.state.password.match("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")){
          window.alert(" Password must contain Minimum eight characters, at least one letter and one number")
      }

    // window.alert(JSON.stringify());

  }

  render() {
    const{fname,password} = this.state;
    return (
      <div className='container  pb-2 text-center' style={{width:"500px"}}>
        <h2>User Form Component</h2>
        <form className='myForm' onSubmit={this.checkData}>
            <label className='form-label' >Enter Your Name: </label>
            <input type='text' className='form-control' name='fname' onChange={this.inputChangeHandler} value={fname}></input>
            <label className='form-label'>Password: </label>
            <input type='text' className='form-control' name='password' onChange={this.inputChangeHandler} value={password}></input>
            <button className='btn btn-primary'>Submit</button>
        </form>
      </div>
    )
  }
}
