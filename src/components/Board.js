import React from 'react';
import Cell from './Cell';


const Board = ({ boardIndex, m, cells, markCell, hoverCell }) => {
    const style = {'gridTemplate': `repeat(${m}, 1fr) / repeat(${m}, 1fr)`};
    const coordZ = boardIndex % m;
    const coordW = Math.floor(boardIndex / m);

    const startCellIndex = boardIndex * (m**2);
    const cellIndexes = [...Array(m**2).keys()].map(i => i + startCellIndex);

    return (
        <div>
            <div className="board" style={ style } >
                { cellIndexes.map((i) => <Cell index={i} key={i} mark={cells[i]} markCell={() => markCell(i)} hoverCell={() => hoverCell(i)} />) }
            </div>
            <div className="board-desc">(*, *, { coordZ }, { coordW })</div>
        </div>
    );
};

export default Board;
