import React from "react";

import { range } from "../../utils";
import { GUESS_LENGTH } from "../../constants";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(GUESS_LENGTH).map((idx) => (
        <span key={idx} className="cell">
          {guess
            ? // Render the letter
              guess[idx]
            : // Empty cell
              null}
        </span>
      ))}
    </p>
  );
}

export default Guess;
