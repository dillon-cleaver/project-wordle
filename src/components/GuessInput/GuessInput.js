import React, { useState } from "react";

function GuessInput({ gameStatus, handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter Guess:</label>
      <input
        required
        disabled={gameStatus !== "running"}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={tentativeGuess}
        onChange={(e) => {
          setTentativeGuess(e.target.value.toUpperCase());
        }}
        id="guess-input"
        type="text"
      />
    </form>
  );
}

export default GuessInput;
