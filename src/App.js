import React from 'react';
import './App.css';
import Index from './HTML';
import PathFinderVisual from './PathFinderVisual/PathFinderVisual';

function App() {
  return (
    <div className="App">
      <Index></Index>

      <div id="pathFinder">
      <PathFinderVisual></PathFinderVisual>
      </div>
    </div>
  );
}

export default App;
