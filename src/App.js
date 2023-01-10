import React from 'react';
import './App.css';
import Index from './HTML';
import PathFinderVisual from './PathFinderVisual/PathFinderVisual';

function App() {
  return (
    <div className="App">
      <Index></Index>
      <div id="tutorialText">
      <p id="tutorial">Welcome to Path Finder. This application (in development) finds the shortest path<br></br> from a starting position to a finishing position using Dijkstra's algorithm.<br></br>
      Click and drag to create walls and barriers between the two positions. <br></br>Click the button in order to find the shortest path between the two positions.</p>
      </div>
      <div id="logos">
        <div>
          
        </div>
      </div>
      <PathFinderVisual></PathFinderVisual>
    </div>
  );
}

export default App;
