import React from "react";

import Banner from "../Banner";

function BannerWon({ numGuesses }) {
  const message = `${numGuesses} guess${numGuesses > 1 ? "es" : ""}`;
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in <strong>{message}</strong>.
      </p>
    </Banner>
  );
}

export default BannerWon;
