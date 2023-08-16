import { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import GuessList from "../GuessList";

const ANSWER = sample(WORDS); // Pick a random word on every pageload.
console.info({ ANSWER }); // Log solution for debugging

function Game() {
  const [guesses, setGuesses] = useState([]);

  const submitGuess = (guess) => {
    // TODO: Can only submit unique guesses
    // TODO: Max number of guesses is 6
    const nextGuesses = [...guesses, { guess, id: Math.random() }];
    console.log(nextGuesses);
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
