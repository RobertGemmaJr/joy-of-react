import React, { useState } from "react";
import { GUESS_LENGTH } from "../../constants";

function GuessInput({ submitGuess }) {
  const [guess, setGuess] = useState("");

  // Handle onChange event for form input
  const handleChange = (e) => {
    const value = e.target.value.toUpperCase();
    if (value.length <= GUESS_LENGTH) setGuess(e.target.value.toUpperCase());
  };

  // Handle onSubmit event for form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess.length !== GUESS_LENGTH) return; // Do nothing if invalid guess

    submitGuess(guess);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required={true}
        minLength={GUESS_LENGTH}
        maxLength={GUESS_LENGTH}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={guess}
        onChange={handleChange}
      />
    </form>
  );
}

export default GuessInput;
