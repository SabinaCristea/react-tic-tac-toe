import { useState } from "react";
import { Board } from "../Board/Board";
import "./Game.css";
import ResultModel from "../ResultModel/ResultModel";
import { calculateWinner } from "../../utils/WinnerCalculator";

export const Game = () => {
  const [cellValues, setCellValues] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const [xIsNext, setXIsNext] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [numberOfTurnsLeft, setNumberOfTurnsLeft] = useState(9);
  const [winner, setWinner] = useState();
  const [winningCombination, setWinningCombination] = useState([]);

  const isCellEmpty = (cellIndex) => cellValues[cellIndex] === "";

  const restartGame = () => {
    setCellValues(["", "", "", "", "", "", "", "", ""]);
    setXIsNext(true);
    setIsGameOver(false);
    setNumberOfTurnsLeft(9);
    setWinner("");
    setWinningCombination([]);
  };

  const onCellClicked = (cellIndex) => {
    if (isCellEmpty(cellIndex)) {
      const newCellValues = [...cellValues];
      newCellValues[cellIndex] = xIsNext ? "X" : "O";

      const newNumberOfTurnsLeft = numberOfTurnsLeft - 1;

      //Calculate the result
      const calcResult = calculateWinner(
        newCellValues,
        newNumberOfTurnsLeft,
        cellIndex
      );

      setCellValues(newCellValues);
      setXIsNext(!xIsNext);
      setIsGameOver(calcResult.hasResult);
      setNumberOfTurnsLeft(newNumberOfTurnsLeft);
      setWinner(calcResult.winner);
      setWinningCombination(calcResult.winningCombination);
    }
  };

  return (
    <>
      <div id="game">
        <h1>Tic Tac Toe</h1>
        <Board
          cellValues={cellValues}
          winningCombination={winningCombination}
          cellClicked={onCellClicked}
        />
      </div>
      <ResultModel
        isGameOver={isGameOver}
        winner={winner}
        onNewGameClicked={restartGame}
      />
    </>
  );
};
