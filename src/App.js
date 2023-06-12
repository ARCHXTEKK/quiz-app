import React from 'react';
import './css/index.css';
import Question from './Question';

function App() {
  const QUESTIONS = [
    new Question('What is the capital of France?', 1, ['Paris', 'Berlin', 'Moscow', 'Korkino']),
    new Question('How many fingers human have?', 3, ['4', '-8', '5', 'undefined']),
    new Question('What note is third in D# minor scale?', 2, ['C#', 'F#', 'Ab', 'la']),
    new Question('How many strings most part of acoustic guitars have?', 4, ['4 or 5 strings', '7 or 8 strings', '9 or 8 strings', '6 or 12 strings'])
  ];
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
