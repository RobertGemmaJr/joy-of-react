import React, { useState } from "react";
import { GUESS_LENGTH } from "../../constants";

function GuessInput({ submitGuess }) {
  const [value, setValue] = useState("");

  // Handle onChange event for form input
  const handleChange = (e) => {
    const value = e.target.value.toUpperCase();
    if (value.length <= GUESS_LENGTH) setValue(e.target.value.toUpperCase());
  };

  // Handle onSubmit event for form
  const handleSubmit = (e) => {
    e.preventDefault();
    submitGuess(value);
    setValue("");
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
        value={value}
        onChange={handleChange}
      />
    </form>
  );
}

export default GuessInput;
