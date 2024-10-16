import React, { useState } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResult from "../GuessResult/GuessResult";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

// Pick a random word on every page load.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // "won" | "running" | "lost"
  const [gameStatus, setGameStatus] = useState("running");
  const [guesses, setGuesses] = useState([]);

  function handleSubmitGuess(tentativeGuess) {
    setGuesses((prevGuesses) => {
      const nextGuesses = [...prevGuesses, tentativeGuess];

      if (tentativeGuess === answer) {
        setGameStatus("won");
      } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
        setGameStatus("lost");
      }

      return nextGuesses;
    });
  }

  return (
    <>
      <GuessResult guesses={guesses} answer={answer} />
      <GuessInput
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
      />
      {gameStatus === "won" && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
