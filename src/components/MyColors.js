import React, { Component } from "react";

export default class MyColors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [
        { id: 1, color: "Red" },
        { id: 2, color: "Black" },
        { id: 3, color: "Orange" },
        { id: 4, color: "Green" },
      ],

      emp: [
        { id: 101, name: "Aditya", course: "Full Stack Developer", sal: 1000 },
        { id: 102, name: "Cooper", course: "Astronaut", sal: 10000 },
        { id: 103, name: "Sachin", course: "Bat ka Grip", sal: 4000 },
        { id: 104, name: "Goku", course: "Maramari", sal: 500 },
      ],
    };
  }

  render() {
    const { colors, emp } = this.state;

    return (
      <div>
        <h1 className="text-primary">This is color Component..</h1>
        <ol>
          {colors.length > 0 &&
            colors.map((val, id) => {
              return (
                <li style={{ color: val.id % 2 == 0 ? "green" : "red" }}>
                  {val.color}
                </li>
              );
            })}
        </ol>
        <hr></hr>
        <table className="table table-hover table-striped table-dark table-bordered">
          <thead>
            <tr className="table-primary">
              <th>ID</th>
              <th>Name</th>
              <th>Course</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {emp.map((val) => {
              return (
                <tr key={val.id}>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.course}</td>
                  <td>{val.sal}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
