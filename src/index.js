import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
const divStyle = {
  color: "blue"
};

function App() {
  const people = [
    { name: "Nell", color: "pink", food: "pizza", job: "doctor" },
    { name: "Sam", color: "red", food: "pizza", job: "teacher" },
    { name: "James", color: "blue", food: "burgers", job: "engineer" }
  ];
  return (
    <div className="App">
      <h1>Hello Sharavogue!</h1>
      {people.map((person, index) => {
        return (
          <button style={divStyle} className="item" key={person.index}>
            {person.name}
          </button>
        );
      })}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
