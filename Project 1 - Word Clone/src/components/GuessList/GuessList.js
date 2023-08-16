import React from "react";

import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessList({ guesses }) {
  return (
    <div className="guess-results">
      {/* Display guesses */}
      {guesses.map((guess, idx) => (
        <Guess key={idx} guess={guess} />
      ))}
      {/* Display empty guesses */}
      {range(guesses.length, NUM_OF_GUESSES_ALLOWED).map((idx) => (
        <Guess key={`empty-${idx}`} />
      ))}
    </div>
  );
}

export default GuessList;
