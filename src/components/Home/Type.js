import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 150,
      }}
    />
  );
}

export default Type;
