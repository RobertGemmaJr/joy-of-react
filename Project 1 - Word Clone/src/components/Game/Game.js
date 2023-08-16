import { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const ANSWER = sample(WORDS); // Pick a random word on every pageload.
console.info({ ANSWER }); // Log solution for debugging

function Game() {
  const [guesses, setGuesses] = useState([]);

  // TODO: Can only submit unique guesses
  const submitGuess = (guess) => {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) return;

    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
  };

  return (
    <div>
      <GuessList guesses={guesses} />
      <GuessInput submitGuess={submitGuess} />
    </div>
  );
}

export default Game;
