import React from 'react';
import Cell from './Cell';

const Board = ({ boardIndex, size, cells, markCell }) => {
    const style = {'grid-template': `repeat(${size}, 1fr) / repeat(${size}, 1fr)`};

    return (<>
        <p>{ boardIndex } ({ size } x { size })</p>
        <div className="board" style={ style } >
            { cells.map((mark, i) => <Cell key={i} mark={mark} markCell={() => markCell(i)} />) }
        </div>
    </>);
};

export default Board;