import React, { Component } from 'react'

export class ConRen extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLogin: true
      }
    }


  render() {

    const {isLogin} = this.state;
    let msg = '';
    // if(isLogin == true){
    //     // return <h2>Admin Login</h2>
    //     msg = "Admin Login"
    // }else
    //     // return <h2>User login</h2>
    //     msg = "User Login"

        // return isLogin ? <h2>Admin login</h2> : <h2>User login</h2>

        return isLogin && <h2>Admin Login</h2>
  }
    
}

export default ConRen