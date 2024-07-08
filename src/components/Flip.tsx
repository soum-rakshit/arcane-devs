import React from "react";
import { FlipWords } from "./ui/flip-words";

export function Flip() {
  const words = ["Aditya", "Ankit", "Dhruv", "Rakshit", "Soumyajit"];

  return (
    <div className="h-[10rem]  p-[3rem]">
      <div className={`mx-auto font-semibold text-white -left-3${window.innerWidth > 600 ? 'pt-40 pl-[5rem] py-3 text-8xl' : 'py-2 text-5xl top-5 pt-4'}`}>
  Meet {window.innerWidth < 600 && <br />}
  <FlipWords words={words} className="text-orange-500 py-3" />
 
  <div className="text-xl">
  The team behind{' '}
  <a href="https://nita-placement-connect.vercel.app/" target="_blank" rel="noopener noreferrer">
    NITA Placement Connect
  </a>
  .
</div>
</div>

    </div>
  );
}
