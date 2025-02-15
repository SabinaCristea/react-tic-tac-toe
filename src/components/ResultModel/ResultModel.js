import React from "react";
import "./ResultModel.css";
import classNames from "classnames";

const ResultModel = ({ isGameOver }) => {
  const resultModalClasses = classNames({
    "modal-open": isGameOver,
  });

  return (
    <div id="modal-overlay" className={resultModalClasses}>
      <div id="game-result-modal">
        <div id="result-container">
          <div id="winner-container">
            <span></span>
          </div>
        </div>
        <div id="new-game-container">
          <button id="new-game-button">Start New Game</button>
        </div>
      </div>
    </div>
  );
};

export default ResultModel;
