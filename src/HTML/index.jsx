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
render() {
    return (
      <div id="header">
        <h1>Path Finder</h1>
      </div>
    );
}}