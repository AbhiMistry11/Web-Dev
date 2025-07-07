import { useState } from "react";
import { getNum, sum } from "./helper";

export default function Lottery() {
  let [num, setNum] = useState(() => getNum(3));

  let isWinning = sum(num) === 15;

  let genBtn = () => {
    setNum(getNum(3));
  };

  return (
    <div>
      <h1>Lottery Game!</h1>
      <span>{num[0]}</span>&nbsp;
      <span>{num[1]}</span>&nbsp;
      <span>{num[2]}</span>
      <br />
      <button onClick={genBtn}>Generate Number</button>
      <h3>{isWinning && "Congratulations, You Won!!"}</h3>
    </div>
  );
}
