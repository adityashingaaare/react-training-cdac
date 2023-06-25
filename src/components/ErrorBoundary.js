import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError : false
      }
    }
    static getDerivedStateFromError(){
        return {
            hasError : true
        }
    }
    componentDidCatch(error,info){
        console.log(error)
    }
  render() {
        if(this.state.hasError){
            return <h2>Something Went Wrong</h2>
        }
        return this.props.children
    return (
      <div>
        
      </div>
    )
  }
}
