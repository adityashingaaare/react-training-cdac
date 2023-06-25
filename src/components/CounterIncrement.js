import React, { Component } from "react";
import Hoc from "./Hoc";

class CounterIncrement extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }

//   increment = () => {
//     this.setState((prevState) => ({ count: prevState.count + 1 }));
//   };
  render() {
    // const { count } = this.state;
    const{count, increment} = this.props;     
    return (
      <div>
        <h1>CounterIncrement</h1>
        <h2>Counter is on: {count}</h2>
        <button type="button" onClick={increment}>Increment
        </button>
      </div>
    );
  }
}

export default Hoc(CounterIncrement)
