import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {guess
        ? // Render guess
          guess.split("").map((letter, idx) => (
            <span key={idx} className="cell">
              {letter}
            </span>
          ))
        : // Render empty cells if guess is undefined
          range(0, 5).map((n) => <span key={n} className="cell" />)}
    </p>
  );
}

export default Guess;
