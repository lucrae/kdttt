import React from 'react';

const Cell = ({ mark,  markCell, hoverCell }) => {
  const style = mark ? 'cell cell-occupied' : 'cell cell-unoccupied';

  return (
    <button className={ style } onClick={ markCell } onMouseEnter={ hoverCell }>
      { mark }
    </button>
  );
};

export default Cell;