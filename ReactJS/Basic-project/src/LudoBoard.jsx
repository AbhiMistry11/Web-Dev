import { useState } from "react";

function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, red: 0, green: 0, yellow: 0 });

  let updateMove = (color) => {
    setMoves((prevMove) => {
      return { ...prevMove, [color]: prevMove[color] + 1 };
    });
  };

  return (
    <div>
      <h2>Game Begins!!</h2>
      <div className="board">
        <p>Blue Moves : {moves.blue} </p>
        <button
          name="blue"
          onClick={() => updateMove("blue")}
          style={{ backgroundColor: "blue" }}
        >
          +1
        </button>
        <p>Red Moves : {moves.red} </p>
        <button
          name="red"
          onClick={() => updateMove("red")}
          style={{ backgroundColor: "red" }}
        >
          +1
        </button>
        <p>Green Moves : {moves.green} </p>
        <button
          name="green"
          onClick={() => updateMove("green")}
          style={{ backgroundColor: "green" }}
        >
          +1
        </button>
        <p>Yellow Moves : {moves.yellow} </p>
        <button
          name="yellow"
          onClick={() => updateMove("yellow")}
          style={{ backgroundColor: "yellow", color: "black" }}
        >
          +1
        </button>
      </div>
    </div>
  );
}

export default LudoBoard;
