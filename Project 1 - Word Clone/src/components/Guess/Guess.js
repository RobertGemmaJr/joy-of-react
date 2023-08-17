import React from "react";

import { range } from "../../utils";
import { GUESS_LENGTH } from "../../constants";

function Guess({ guess }) {
  return (
    <p className="guess">
      {guess
        ? // Display guess with correct styling
          guess.map(({ letter, status }, idx) => (
            <span key={idx} className={`cell ${status}`}>
              {letter}
            </span>
          ))
        : // Display empty cells
          range(GUESS_LENGTH).map((idx) => <span key={idx} className="cell" />)}
    </p>
  );
}

export default Guess;
