import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  // сохраняем нажатие каждой кнопки в отдельном состоянии
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      {good}
      <button onClick={setGood}>good</button>
      {neutral}
      <button onClick={setNeutral}>neutral</button>
      {bad}
      <button onClick={setBad}>bad</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
