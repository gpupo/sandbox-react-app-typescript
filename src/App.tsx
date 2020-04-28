import React from 'react';
import {UserHelper} from './_helpers/user.helper';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserHelper firstName="Foo" lastName="Bar" />
      </header>
    </div>
  );
}

export default App;
