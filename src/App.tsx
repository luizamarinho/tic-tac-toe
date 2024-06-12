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
  const [jogador, setJogador] = useState<number>(1);
  const [squares, setSquares] = useState<(string | null)[]>(
    Array(9).fill(null)
    // Esse método de array substitui a repetição do null 9 vezes - vide rascunho
  );
  function handleClick(indice: number) {
    setSquares((antigo) => {
      const nova = [...antigo];
      if (nova[indice] == null) {
        if (jogador === 1) {
          nova[indice] = 'x';
          ``;
          setJogador(2);
        } else {
          nova[indice] = 'o';
          setJogador(1);
        }

        let vencedor = computarVencedor(nova);
        if (vencedor != null) {
          console.log('vencedor: ' + vencedor);
        }
      }

      console.log(indice);
      return nova;
    });
  }
  return (
    <>
      <h1>Próximo jogador: {jogador}</h1>
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

function computarVencedor(tabuleiro: (string | null)[]) {
  const tabela = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < tabela.length; i++) {
    let primeiro_indice = tabela[i][0];
    let segundo_indice = tabela[i][1];
    let terceiro_indice = tabela[i][2];

    let primeiro = tabuleiro[primeiro_indice];
    let segundo = tabuleiro[segundo_indice];
    let terceiro = tabuleiro[terceiro_indice];

    if (primeiro === 'x' && segundo === 'x' && terceiro === 'x') {
      return tabuleiro[primeiro_indice];
    } else if (primeiro === 'o' && segundo === 'o' && terceiro === 'o') {
      return tabuleiro[primeiro_indice];
    }
  }
  return null;
}
