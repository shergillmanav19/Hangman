import React from "react";
import ReactDOM from "react-dom";
import Hangman from "./Components/Hangman.js";
import "bootstrap/dist/css/bootstrap.min.css";
class Index extends React.Component {
  render() {
    return (
      <div className="container">
        <Hangman />
      </div>
    );
  }
}
ReactDOM.render(<Index />, document.getElementById("root"));
