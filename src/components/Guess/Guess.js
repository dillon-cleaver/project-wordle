import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers.js";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((item) => (
        <Cell
          key={item}
          letter={result ? result[item].letter : undefined}
          status={result ? result[item].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
