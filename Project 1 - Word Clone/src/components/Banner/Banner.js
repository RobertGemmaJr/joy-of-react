import React from "react";

const BANNER_CLASS = "banner";

// Banner displayed when user wins the game
function WonBanner({ numGuesses }) {
  const message = `${numGuesses} guess${numGuesses > 1 ? "es" : ""}`;
  return (
    <div className={`happy ${BANNER_CLASS}`}>
      <p>
        <strong>Congratulations!</strong> Got it in <strong>{message}</strong>.
      </p>
    </div>
  );
}

// Banner displayed when user loses the game
function LostBanner({ answer }) {
  return (
    <div className={`sad ${BANNER_CLASS}`}>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

function Banner({ status, numGuesses, answer }) {
  switch (status) {
    case "WON":
      return <WonBanner numGuesses={numGuesses} />;
    case "LOST":
      return <LostBanner answer={answer} />;
    case "PLAYING":
      return null;
    default:
      throw new Error("Invalid status code: " + status);
  }
}

export default Banner;
