import React from "react";
import { range } from "../../utils";

function Guess({ value }) {
  return (
    <p className="guess">
      {range(5).map((item) => (
        <span className="cell" key={item}>
          {value ? value[item] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
