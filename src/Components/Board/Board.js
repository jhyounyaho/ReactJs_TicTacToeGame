import React, { Component } from 'react';
import Square from '../Square/Square';

class Board extends Component {
  renderSquare(i) {
    return (
      <Square 
        value={this.props.squares[i]} 
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    const squareRow = [];
    let k = 0;
    for (let i = 0; i < 3; i++) {
      const squares = [];
      for (let j = 0; j < 3; j++) {
        squares.push(this.renderSquare(3 * i + j));
        k++;
      }
      squareRow.push(<div key={k} className='board-row'>{squares}</div>)
    }
    console.log(squareRow)
    return (
      <div>
        {squareRow}
      </div>
    )
  }
}

export default Board;
