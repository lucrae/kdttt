import React, { useState } from "react";

import Board from "./Board";
import { indexToCoords, arrayToTupleString } from '../utils'


const Game = () => {
  const players = ['X', 'O'];
  const n = 4; // number of dimensions
  const m = 5; // size of each dimension

  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [cells, setCells] = useState(Array(m**n).fill(null));
  const [hoverCoords, setHoverCoords] = useState(indexToCoords(0, n, m));

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

  const hoverCell = (i) => {
    const coords = indexToCoords(i, n, m);
    setHoverCoords(coords);
  }

  const style = {'gridTemplateColumns': `repeat(${m}, 1fr)`};
  const boardIndexes = [...Array(m**(n-2)).keys()];
  const boards = boardIndexes.map(
    (i) => <Board boardIndex={ i } cells={ cells } m={ m } markCell={ markCell } hoverCell={ hoverCell } />
  );

  return (<>
    <p>Current player: { players[currentPlayerIndex] } ({ currentPlayerIndex })</p>
    <p>Coords: (<i>x, y, z, w</i>) = { arrayToTupleString(hoverCoords) }</p>
    <div className='board-suite' style = { style }>
      { boards }
    </div>
  </>);
};

export default Game;