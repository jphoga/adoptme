import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "someting-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Peter",
      animal: "Cat",
      breed: "something",
    }),
    React.createElement(Pet, {
      name: "Peter",
      animal: "Cat",
      breed: "something",
    }),
    React.createElement(Pet, {
      name: "Peter",
      animal: "Cat",
      breed: "something",
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
