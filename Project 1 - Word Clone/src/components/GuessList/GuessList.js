import React from "react";

import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessList({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((idx) => (
        <Guess key={idx} guess={guesses[idx]} /> // guesses[idx] is undefined for empty row
      ))}
    </div>
  );
}

export default GuessList;
