import React, { useState } from "react";
import Board from "./Board";


// const log3 = (x) => Math.log(x) / Math.log(3);


const Game = () => {
  const players = ['X', 'O'];
  const n = 2; // number of dimensions
  const m = 3; // size of each dimension

  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [cells, setCells] = useState(Array(m**n).fill(null));

  const markCell = (i) => {

    // return if cell is occupied
    if (cells[i]) return;

    // mark cell
    const newCells = [...cells];
    newCells[i] = players[currentPlayerIndex];
    setCells(newCells);

    // go to next player
    setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length);
  }
  return (<>
    <p>Current player: { players[currentPlayerIndex] } ({ currentPlayerIndex })</p>
    <div>
    <Board boardIndex={0} cells={cells} size={m} markCell={ markCell }/>
    </div>
  </>);
};

export default Game;