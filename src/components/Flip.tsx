import React from "react";
import { FlipWords } from "./ui/flip-words";

export function Flip() {
  const words = ["Aditya", "Ankit", "Dhruv", "Rakshit", "Soumyajit"];

  return (
    <div className="h-[10rem] pt-40 p-[3rem]">
      <div className={`mx-auto font-semibold text-white ${window.innerWidth > 600 ? 'pl-[5rem] py-3 text-8xl' : 'text-5xl'}`}>
  Meet {window.innerWidth < 600 && <br />}
  <FlipWords words={words} className="text-orange-500" />
 
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
