import React from "react";
import "./task.css";

const Task = () => {
  return (
    <div className="container">
      <div className="box">
        <div>
          <div className="header">
            <h3 className="dot">57+8</h3>
          </div>
        </div>
        <div className="book1">
          {FirstRow.map((item, index) => (
            <button className="book" key={index}>
              {item}
            </button>
          ))}
        </div>
        <div className="book2">
          {SecondRow.map((item, index) => (
            <button className="but" key={index}>
              {item}
            </button>
          ))}
        </div>
        <div className="book3">
          {ThirdRow.map((item, index) => (
            <button className="but" key={index}>
              {item}
            </button>
          ))}
        </div>
        <div className="book4">
          {FourthRow.map((item, index) => (
            <button className="but" key={index}>
              {item}
            </button>
          ))}
        </div>
        <div className="book5">
          {FifthRow.map((item, index) => (
            <button className="but" key={index}>
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
const FirstRow = ["(", ")", "%", "Ac"];
const SecondRow = ["7", "8", "9", "-"];
const ThirdRow = ["4", "5", "6", "x"];
const FourthRow = ["1", "2", "3", "-"];
const FifthRow = ["0", ".", "=", "+"];

export default Task;
