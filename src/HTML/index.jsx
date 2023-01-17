import React, {Component} from 'react';
import './styles.css';

export default class Index extends Component {
    constructor() {
      super();
      this.state = {
        grid: [],
        mouseIsPressed: false,
      };
    }

hide = () => {
  document.getElementById("tutorialText").style.display = 'none';
};

show = () => {
  document.getElementById("tutorialText").style.display = 'block';
}

render() {
    return (
      <div>
      <div id="header">
        <h1>Path Finder</h1>
        <nav>
        <li><h4 onClick={this.show}>Help</h4></li>
        </nav>
      </div>
      <div id="tutorialText">
      <p id="tutorial">Welcome to Path Finder. This application finds the shortest path from a starting position to a finishing position using Dijkstra's algorithm.
      To get started, click and drag to create walls and barriers between the two positions. Click the Visualize button in order to find the shortest path between the two positions.</p>
      <button id="tutorialBtn" onClick={this.hide}>Hide</button>
      </div>
      </div>
    );
}}

