import React from "react";

const ROW_1_LETTERS = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const ROW_2_LETTERS = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const ROW_3_LETTERS = ["z", "x", "c", "v", "b", "n", "m"]; // TODO: Add "ENTER" and "DELETE" key, wire up keyboard.

// A row of keys on the keyboard
function KeyRow({ letters }) {
  return (
    <p className="key-row">
      {letters.map((char) => (
        <span key={char} className="key">
          {char}
        </span>
      ))}
    </p>
  );
}
function Keyboard() {
  return (
    <div className="keyboard">
      <KeyRow letters={ROW_1_LETTERS} />
      <KeyRow letters={ROW_2_LETTERS} />
      <KeyRow letters={ROW_3_LETTERS} />
    </div>
  );
}

export default Keyboard;
