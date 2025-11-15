import React from 'react'
import { useState } from 'react';

export default function Resultpage() {

  const score = localStorage.getItem("score");

  const getMessage = () => {
    if (score === 10) return "🔥 Excellent ! Bravo 🎉";
    else if (score >= 7) return "✨ Très bien ! Tu maîtrises !";
    else if (score >= 4) return "🙂 Pas mal ! Continue à apprendre.";
    else if (score >= 1) return "😢 Peut mieux faire ! Essaie encore.";
    else return "💀 0 ? Da3iiif 😭";
  };

  return (
    <div className='bodyresult'>
      <div className='resultcontainer'>
        
        <h1 className='score-title'>
          score : <span>{score}/10</span>
        </h1>

        <h3 className='score-message'>{getMessage()}</h3>

        <button 
          className="restartbtn"
          onClick={() => window.location.href = "/quiz"}  
        >
          Relancer
        </button>
      </div>
    </div>
  );
}

