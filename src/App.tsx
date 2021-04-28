import React from 'react';
import './App.css';
import Main from './component/main';
import {ConfigerNotification} from './firebase-services/firebase-services';

function App() {
  return (
    <div className="App">
      <ConfigerNotification />
      {/* <button onClick={ConfigerNotification}>Token</button> */}
      <Main />
    </div>
  );
}

export default App;
