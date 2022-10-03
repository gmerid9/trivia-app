import './App.css';
import React, { useState } from 'react';


function App() {
  const [answer, setAnswer] = useState("")
  const [category, setCategory] = useState("")
  const [points, setPoints] = useState(0)
  const [question, setQuestion]  = useState("")
  const [score, setScore] = useState(0)
  const [reveal, setReveal] = useState(false)

  function getQuestion() {
    setReveal(false)
    fetch("http://jservice.io/api/random")
      .then(res => res.json())
      .then(
        (res) => {
          setAnswer(res[0].answer)
          setCategory(res[0].category.title)
          setPoints(res[0].value)
          setQuestion(res[0].question)
        }
      )
  }

  return (
    <div style={{
      backgroundColor: 'SteelBlue',
      height: '100vh',
      width: '100vw',
      textAlign: 'center'
    }}>
      <h1 style={{paddingTop: '50px', color: 'whitesmoke'}}>Welcome to Jeorpady!</h1>
      <h2>score: <label>{score}</label></h2>
      <button onClick={() => setScore(score - points)} style={{backgroundColor: 'pink'}}>Decrease</button>
      <button onClick={() => setScore(score + points)} style={{backgroundColor: 'aqua'}}>Increase</button>
      <button onClick={() => setScore(0)} style={{backgroundColor: 'red'}}>Reset</button>
      <h2>Let's Play!</h2>
      <button onClick={getQuestion}>Get Question</button>
      <br></br>
      <h2>Category: </h2> <label>{category}</label>
      <br></br>
      <h2>Points: </h2> <label>{points !== 0 ? points : ""}</label>
      <br></br>
      <h2>Answer: </h2> <label>{answer}</label>
      <br></br>
      <button onClick={() => setReveal(true)} style={{backgroundColor: 'blue'}}>Click to Reveal Question</button>
      <br></br>
      <label>{ reveal ? question : "" }</label>
      
    </div>
  );
}

export default App;
