import React, { useState } from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const checkWinner = () => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  const handleClick = (index) => {
    if (winner || board[index]) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const newWinner = checkWinner();
    if (newWinner) {
      setWinner(newWinner);
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const renderCell = (index) => (
    <div
      key={index}
      className={`cell ${board[index]}`}
      onClick={() => handleClick(index)}
    >
      {board[index]}
    </div>
  );

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setCurrentPlayer("X");
    setWinner(null);
  };

  return (
    <div className="app">
      <h1>Tic-Tac-Toe</h1>
      <div className="board">
        {board.map((cell, index) => renderCell(index))}
      </div>
      {winner && (
        <div className="winner-message">
          <p>Winner: {winner}</p>
          <button onClick={resetGame}>Restart</button>
        </div>
      )}
      <h3>Made With &hearts; By Ayush Chodvadiya</h3>
    </div>
  );
};

export default TicTacToe;
