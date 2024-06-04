export function App() {
  return <Board />;
}
import { useState } from 'react';

type SquareProps = {
  value: string | null;
  onClick: () => void;
};

function Square(props: SquareProps) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState<(string | null)[]>(
    Array(9).fill(null)
    // Esse método de array substitui a repetição do null 9 vezes - vide rascunho
  );
  function handleClick(indice: number) {
    setSquares((antigo) => {
      const nova = [...antigo];
      if (nova[indice] == null) {
        nova[indice] = 'x';
      } else if (nova[indice] === 'x') {
        nova[indice] = 'o';
      } else {
        nova[indice] = null;
      }
      return nova;
    });
  }
  return (
    <>
      <div className="board-row">
        <Square onClick={() => handleClick(0)} value={squares[0]} />
        <Square onClick={() => handleClick(1)} value={squares[1]} />
        <Square onClick={() => handleClick(2)} value={squares[2]} />
      </div>
      <div className="board-row">
        <Square onClick={() => handleClick(3)} value={squares[3]} />
        <Square onClick={() => handleClick(4)} value={squares[4]} />
        <Square onClick={() => handleClick(5)} value={squares[5]} />
      </div>
      <div className="board-row">
        <Square onClick={() => handleClick(6)} value={squares[6]} />
        <Square onClick={() => handleClick(7)} value={squares[7]} />
        <Square onClick={() => handleClick(8)} value={squares[8]} />
      </div>
    </>
  );
}
