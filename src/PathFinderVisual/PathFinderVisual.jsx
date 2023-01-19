import React, {Component} from 'react';
import Node from './Node/Node';
import {dijkstra, getNodesInShortestPathOrder} from '../Algorithms/dijkstra';

import './PathFinderVisual.css';

let START_NODE_ROW = 10;
let START_NODE_COL = 6;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 36;

export default class PathfindingVisualizer extends Component {
  constructor() {
    super();
    this.state = {
      grid: [],
      mouseIsPressed: false
    };
  }

  componentDidMount() {
    const grid = getInitialGrid();
    this.setState({grid});
  }

  handleMouseDown(row, col) {
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({grid: newGrid, mouseIsPressed: true});
  }

  handleMouseEnter(row, col) {
    if (!this.state.mouseIsPressed) return;
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({grid: newGrid});
  }

  handleMouseUp() {
    this.setState({mouseIsPressed: false});
  }

  animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder) {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          this.animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        if (i != 0){
          if (i != visitedNodesInOrder.length - 1){
            document.getElementById(`node-${node.row}-${node.col}`).className =
            'node node-visited';
          }
        }
      }, 10 * i);
    }
  }

  animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        if (i != 0){
          if (i != nodesInShortestPathOrder.length - 1){
            document.getElementById(`node-${node.row}-${node.col}`).className =
            'node node-shortest-path';
          }
        }
      }, 50 * i);
    }
  }

  visualizeDijkstra() {
    const {grid} = this.state;
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    this.animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  render() {
    const {grid, mouseIsPressed} = this.state;

    return (
      <><div id="buttons">
        <button id="dButton" onClick={() => this.visualizeDijkstra()}>
          Visualize
        </button>
        <button id="reset" onClick={refresh}>
          Reset
        </button>
        <div id="guide">
          <div class="guideItem">
            <h3>Start<div class="square" id="start"></div></h3>
          </div>
            <div class="guideItem">
          <h3>Wall<div class="square" id="wall"></div></h3>
          </div>
          <div class="guideItem">
            <h3>Path<div class="square" id="path"></div></h3>
          </div>
          <div class="guideItem">
            <h3>End<div class="square" id="end"></div></h3>
          </div>
        </div>
        </div>
        {/* <div id="sNode">
        <form>
        <label> Starting Node:
          <input type="number" name="sColumn" id="sColumn" placeholder='Column'/>
          <input type="number" name="sRow" id="sRow" placeholder='Row' />
        </label>
        <button type="button">Submit</button>
      </form>
        </div> */}
        <div className="grid">
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx}>
                {row.map((node, nodeIdx) => {
                  const {row, col, isFinish, isStart, isWall} = node;
                  return (
                    <Node
                      key={nodeIdx}
                      col={col}
                      isFinish={isFinish}
                      isStart={isStart}
                      isWall={isWall}
                      mouseIsPressed={mouseIsPressed}
                      onMouseDown={(row, col) => this.handleMouseDown(row, col)}
                      onMouseEnter={(row, col) =>
                        this.handleMouseEnter(row, col)
                      }
                      onMouseUp={() => this.handleMouseUp()}
                      row={row}></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

const getInitialGrid = () => {
  const grid = [];
  for (let row = 0; row < 20; row++) {
    const currentRow = [];
    for (let col = 0; col < 40; col++) {
      currentRow.push(createNode(col, row));
    }
    grid.push(currentRow);
  }
  return grid;
};

const createNode = (col, row) => {
  return {
    col,
    row,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
  };
};

const getNewGridWithWallToggled = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall: !node.isWall,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};

// function updateStartNode () {
//   console.log(START_NODE_COL, START_NODE_ROW);
//   START_NODE_COL = document.getElementById("sColumn").value;
//   START_NODE_ROW = document.getElementById("sRow").value;
//   console.log(START_NODE_COL, START_NODE_ROW);
// };

function refresh (){
  window.location.reload();
}