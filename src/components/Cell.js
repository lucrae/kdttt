import React from 'react';

const Cell = ({ mark,  markCell }) => {
  const style = mark ? 'cell cell-occupied' : 'cell cell-unoccupied';

  return (
    <button className={ style } onClick={ markCell }>
      { mark }
    </button>
  );
};

export default Cell;