import React from 'react';
import {DateHelper, UserHelper} from './helpers';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserHelper firstName="Foo" lastName="Bar" />
        <p>Now: <em>{DateHelper.now()}</em></p>
      </header>
    </div>
  );
}

export default App;
