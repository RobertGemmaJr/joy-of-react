import { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import BannerWon from "../BannerWon";
import BannerLost from "../BannerLost";

const ANSWER = sample(WORDS); // Pick a random word on every pageload.
console.info({ ANSWER }); // Log solution for debugging

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [status, setStatus] = useState("PLAYING"); // PLAYING || WON || LOST

  // TODO: Can only submit unique guesses (display banner if so)
  const submitGuess = (value) => {
    // Update guesses array
    const guess = checkGuess(value, ANSWER);
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    // Game is won if answer is guessed
    // Game is lost if guess !== ANSWER and NUM_OF_GUESSES_ALLOWED is used up
    if (value === ANSWER) setStatus("WON");
    else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) setStatus("LOST");
  };

  const banner =
    status === "PLAYING" ? null : status === "WON" ? (
      <BannerWon numGuesses={guesses.length} />
    ) : (
      <BannerLost answer={ANSWER} />
    );

  return (
    <div>
      <GuessList guesses={guesses} />
      {banner}
      <GuessInput submitGuess={submitGuess} status={status} />
    </div>
  );
}

export default Game;
