import React from "react";
import ReactDOM from "react-dom";
import { Link, Router } from '@reach/router';
import { format } from "prettier";
import Pet from "./Pet";
import SearchParams from "./SearchParams.js";
import Details from "./Details";

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">
          Adopt Me!
        </Link>
      </header>
      <Router>
        <SearchParams path="/" /> 
        <Details path="/details/:id" />
      </Router>
    </div>
  )
};
ReactDOM.render(<App/>, document.getElementById("root"));
