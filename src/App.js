import React from "react";
import ReactDOM from "react-dom";
import { format } from "prettier";
import Pet from "./Pet";


const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Peter" animal="Cat" breed="Mixed" />
    </div>
  )
};
ReactDOM.render(<App/>, document.getElementById("root"));
