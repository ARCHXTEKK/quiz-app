import React, {useState} from 'react';
import './css/index.css';
import Question from './Question';

function App() {
  const QUESTIONS = [
    new Question('What is the capital of France?', 1, ['Paris', 'Berlin', 'Moscow', 'Korkino']),
    new Question('How many fingers human have?', 3, ['4', '-8', '5', 'undefined']),
    new Question('What note is third in D# minor scale?', 2, ['C#', 'F#', 'Ab', 'la']),
    new Question('How many strings most part of acoustic guitars have?', 4, ['4 or 5 strings', '7 or 8 strings', '9 or 8 strings', '6 or 12 strings'])
  ];
  const [finished, setFinished] = useState(false);
  const [answered, setAnswered] = useState(0);
  const [passed, setPassed] = useState(0);

  const handleAnwseredIncrementOnClick = (event) => {
    if(QUESTIONS[answered].answer == event.target.value) {
      setPassed(passed + 1);
    }
    setAnswered(answered + 1);
    if(answered === QUESTIONS.length - 1) {
      setFinished(true);
    }
  }

  return (
    <div className="App">
      {finished ? 
      <div className='finish'>
        Congratulations! You finished a quiz with score: {passed}
      </div> 
      :
      <div className='quiz'> 
        <div className='question'>
          <div className='question__counter'>{answered + 1}<b>/</b>{QUESTIONS.length}</div>
          <div className='question__text'>{QUESTIONS[answered].text}</div>
        </div>
        <div className='answer'> 
          {QUESTIONS[answered].options.map((el, index) => {
            return <button className='answer__option' id={`anwser-${index}`} value={index + 1} onClick={handleAnwseredIncrementOnClick}>{el}</button>
          })}
        </div>
      </div>
      }
    </div>
  );
}

export default App;
