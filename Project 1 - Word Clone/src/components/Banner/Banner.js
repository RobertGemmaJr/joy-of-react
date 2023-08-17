import React from "react";

function Banner({ status, numGuesses, answer }) {
  const bannerClass = "banner";
  switch (status) {
    case "PLAYING":
      return null;
    case "WON":
      const message = `${numGuesses} guess${numGuesses > 1 ? "es" : ""}`;
      return (
        <div className={`happy ${bannerClass}`}>
          <p>
            <strong>Congratulations!</strong> Got it in <strong>{message}</strong>.
          </p>
        </div>
      );
    case "LOST":
      return (
        <div className={`sad ${bannerClass}`}>
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      );
    default:
      throw new Error("Invalid status code: " + status);
  }
}

export default Banner;
