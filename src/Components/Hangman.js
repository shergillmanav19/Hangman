import React from "react";
import "./hangman.css";
import { Button } from "react-bootstrap";
import mistake1 from "../images/1.png";
import mistake2 from "../images/2.png";
import mistake3 from "../images/3.png";
import mistake4 from "../images/4.png";
import mistake5 from "../images/5.png";
import mistake6 from "../images/6.png";
import mistake7 from "../images/7.png";
import { pickAWord } from "../Words/words.js";

class Hangman extends React.Component {
  constructor() {
    super();
    this.state = {
      guessed: [],
      answer: pickAWord(),
      tries: 0,
      maxTries: 6,
      hangman: [
        mistake1,
        mistake2,
        mistake3,
        mistake4,
        mistake5,
        mistake6,
        mistake7,
      ],
      counter: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  theWord() {
    return this.state.answer
      .split("")
      .map((char) => (this.state.guessed.includes(char) ? char : " _ "));
  }
  handleClick = (event) => {
    let letter = event.target.value;
    console.log(letter);

    this.setState((prevState) => ({
      guessed: prevState.guessed.concat(event.target.value),
      tries: prevState.tries + (this.state.answer.includes(letter) ? 0 : 1),
    }));
    console.log(this.state.tries);
  };
  createButton() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => {
      return (
        <Button
          className="btn btn-dark m-2"
          disabled={this.state.guessed.includes(letter)}
          onClick={this.handleClick}
          value={letter}
        >
          {letter}
        </Button>
      );
    });
  }
  resetButton = () => {
    this.setState({
      guessed: [],
      tries: 0,
      answer: pickAWord(),
    });
  };
  render() {
    const gameOver = this.state.tries >= this.state.maxTries;
    let game = this.theWord();
    let button = this.createButton();
    let guessed = this.theWord().join("") === this.state.answer;
    let danger = "";
    if (gameOver) {
      game = (
        <div>
          Game over! Better luck next time <br /> The word was
          <strong> {this.state.answer}</strong>
        </div>
      );
      button = (
        <button className="btn btn-warning" onClick={this.resetButton}>
          Reset!
        </button>
      );
    }
    if (this.state.tries === 4) {
      danger = <p style={{ color: "red" }}>Only 2 more guesses!</p>;
    }
    if (this.state.tries === 5) {
      danger = <p style={{ color: "red" }}>Only 1 more guess left!</p>;
    }
    if (guessed) {
      game = "You got it!!";
      danger = "";
      button = (
        <button className="btn btn-warning" onClick={this.resetButton}>
          Play Again!
        </button>
      );
    }

    return (
      <div className="container">
        <h1
          style={{ color: "green", justifyContent: "center" }}
          className="text-center"
        >
          <strong>Hangman</strong>
        </h1>

        <h3
          style={{
            color: "seagreen",
            textAlign: "center",
          }}
        >
          <i>
            <u>Words are realted to programing terms/langauges</u>
          </i>
        </h3>
        <p style={{ textAlign: "right" }}>
          <strong>Mistakes:</strong> {this.state.tries} (6 mistakes allowed!)
        </p>
        <p style={{ textAlign: "right" }}>
          <strong>{danger}</strong>
        </p>

        <img src={this.state.hangman[this.state.tries]} alt="" />
        <div className="container">
          <p className="text-center">{game}</p>
          <p className="text-center">{button}</p>
          <h1>{this.state.name}</h1>
        </div>
      </div>
    );
  }
}
export default Hangman;
