import React, { Component } from "react";
import Hoc from "./Hoc";

class HoverIncrement extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }

//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
  render() {
    // const { count } = this.state;
    const{increment,count} = this.props;
    return (
      <div>
        <h1>Hover Increment</h1>
        <h2>Counter is on: {count}</h2>
        <button type="button" onMouseOver={increment}>
          Hover Increment
        </button>
      </div>
    );
  }
}

export default Hoc(HoverIncrement)
