import { useState } from "react";

const App = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVote] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [max, setMax] = useState(0);

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ];

  const generateAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const incrementVote = () => {
    if(votes[selected] + 1 > votes[max]){
      setMax(selected);
    }
    setVote(votes.map((v, i) => i == selected ? v + 1 : v));
  };
  
  return (
    <div>
      <h1>Anecdote of the Day</h1>
      {anecdotes[selected]}
      <p>Votes {votes[selected]}</p>
      <button onClick={incrementVote}>Vote</button>
      <button onClick={generateAnecdote}>Next Anecdote</button>
      <h1>Anecdote with most votes</h1>
      {anecdotes[max]}
    </div>
  );
}

export default App;
