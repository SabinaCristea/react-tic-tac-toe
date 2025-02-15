import { Cell } from "../Cell/Cell";
import "./Board.css";

export const Board = ({ cellValues, winningCombination, cellClicked }) => {
  const cells = cellValues.map((value, index) => {
    const canHighlight =
      winningCombination && winningCombination.indexOf(index) >= 0;

    return (
      <Cell
        key={index}
        value={value}
        canHighlight={canHighlight}
        onClick={() => cellClicked(index)}
      />
    );
  });

  return (
    <>
      <div id="board">{cells}</div>
    </>
  );
};
