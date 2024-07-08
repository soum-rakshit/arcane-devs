import React, { useEffect, useState } from "react";
import { FlipWords } from "./ui/flip-words";

export function Flip() {
  const words = ["Aditya", "Ankit", "Dhruv", "Rakshit", "Soumyajit"];
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    
    setWindowWidth(window.innerWidth);

    
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (windowWidth === 0) {
    return null;
  }

  return (
    <div className="h-[10rem] p-[3rem]">
      <div className={`mx-auto font-semibold text-white ${windowWidth > 600 ? 'pt-40 pl-[5rem] py-3 text-8xl' : 'py-2 text-5xl top-5 pt-4'}`}>
        Meet {windowWidth < 600 && <br />}
        <FlipWords words={words} className={`text-orange-500 py-3 ${windowWidth > 600 ? '' : '-left-3'}`} />
        
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