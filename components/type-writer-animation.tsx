"use client";

import React from "react";
import Typewriter from "typewriter-effect";

export default function TypewriterAnimation() {
  return (
    <Typewriter
      options={{
        strings: [
          "How to go to Prosperna",
          "How to go to BGC from Prosperna",
          "How to get to Festival Mall from here",
          "Gutom na AKooOOOOOoOoooOO",
        ],
        autoStart: true,
        loop: true,
        delay: 50,
        deleteSpeed: 30,
        cursor: "|",
      }}
    />
  );
}
