import React from "react";
import Banner from "../banner/banner";

function WonBanner({ numOfGuesses }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in {""}
        <strong>{numOfGuesses === 1 ? "1 guess" : `${numOfGuesses}`}</strong>.
      </p>
    </Banner>
  );
}

export default WonBanner;
