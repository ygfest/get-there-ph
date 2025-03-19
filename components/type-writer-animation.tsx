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
          "AYUKU NaaaAAAAaaaaaaAAAAAa",
        ],
        autoStart: true,
        loop: true,
        delay: 50, // Typing speed
        deleteSpeed: 30, // Deleting speed
        cursor: "|", // Cursor style
      }}
    />
  );
}
