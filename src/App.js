import React from 'react';
import Parent from './Parent';
import CounterContext from './CounterContext';
import './App.css';

function App() {

  let countState = React.useState(1); // [count, state]

  return (
    <CounterContext.Provider value={countState}>
      <div className="App">
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
