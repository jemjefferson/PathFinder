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
        <h4 onClick={this.show}>Help</h4>
      </div>
      <div id="tutorialText">
      <p id="tutorial">Welcome to Path Finder. This application (in development) finds the shortest path<br></br> from a starting position to a finishing position using Dijkstra's algorithm.<br></br>
      Click and drag to create walls and barriers between the two positions. <br></br>Click the button in order to find the shortest path between the two positions.</p>
      <button id="tutorialBtn" onClick={this.hide}>Hide</button>
      </div>
      <div id="logos">
      <form>
        <label> Starting Node:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
        </div>
      </div>
    );
}}

