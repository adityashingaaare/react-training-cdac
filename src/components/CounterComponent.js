import React, { Component } from 'react'


export class CounterComponent extends Component {

        constructor(props){
            super(props);

            this.state = {
                count : 0
            }
        }

    greeting = () =>{

        window.alert("Hello");
    }

    greeting1 = (sname) => {
        window.alert(`Hello  ${sname}`);
    }

    increment = () =>{
        this.setState({count: this.state.count+1})
    }

    decrement = () =>{
        this.setState({count: this.state.count-1})
    }





  render() {
    return (
      <div>
        <p>Counter value: <strong>{this.state.count}</strong></p>
        <br />
        <button onClick={this.increment} >Increment</button>&nbsp;
        <button onClick={this.decrement} >Decrement</button>&nbsp;
        <button onClick={() => this.greeting1("Aditya")}>Greetings User</button>
        <button onMouseOver={this.increment}>button</button>
        <br />
     <button onClick={this.greeting} >Submit</button>
      </div>
    )

  }
}

export default CounterComponent