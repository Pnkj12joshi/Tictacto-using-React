import React, { useState } from "react";
import Squre from "./squre";

const Board = () => {
  const [state, setstate] = useState(Array(9).fill(null));
  console.log("Value is : ", state);
  const [isturn, setturn] = useState(true);
  const copystate = [...state];

  const Winnerlogic = () => {
    const winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [2, 5, 8],
      [1, 4, 7],
    ];
    for (let logic of winner) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const iswinner = Winnerlogic();

  const handleclick = (index) => {
    console.log("value is :", index);
    copystate[index] = isturn ? "X" : "0";
    setstate(copystate);
    setturn(!isturn);
  };
  const Restart = () => {
    setstate(Array(9).fill(null));
  };
  return (
    <div className="board">
      {iswinner ? (
        <>
          {" "}
          {iswinner} is Won <button onClick={Restart}>Play Again </button>
        </>
      ) : (
        <>
          <h4> {isturn ? "X" : "0"} Your turn </h4>
          <div className="rows">
            <Squre
              onclick={() => {
                handleclick(0);
              }}
              value={state[0]}
            />
            <Squre
              onclick={() => {
                handleclick(1);
              }}
              value={state[1]}
            />
            <Squre
              onclick={() => {
                handleclick(2);
              }}
              value={state[2]}
            />
          </div>
          <div className="rows">
            <Squre
              onclick={() => {
                handleclick(3);
              }}
              value={state[3]}
            />
            <Squre
              onclick={() => {
                handleclick(4);
              }}
              value={state[4]}
            />
            <Squre
              onclick={() => {
                handleclick(5);
              }}
              value={state[5]}
            />
          </div>
          <div className="rows">
            <Squre
              onclick={() => {
                handleclick(6);
              }}
              value={state[6]}
            />
            <Squre
              onclick={() => {
                handleclick(7);
              }}
              value={state[7]}
            />
            <Squre
              onclick={() => {
                handleclick(8);
              }}
              value={state[8]}
            />
          </div>
        </>
      )}
    </div>
  );
};
export default Board;
