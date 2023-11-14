function createPlayer(type) {
  //create our player objects
  const playerType = type;
  return { playerType };
}
const cells = document.querySelectorAll(".cell");
const cellsArray = Array.from(cells); //create an Array from our cells

const players = {
  playerX: createPlayer("x"),
  playerO: createPlayer("o"),
};

const createGameBoard = (function () {
  const board = Array(9).fill(null);
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = function (piece) {
    winningCombos.forEach((combo) => {
      const [a, b, c] = combo;
      if (
        board[a] &&
        board[a] === board[b] &&
        board[a] === board[c] &&
        board[a] === piece
      ) {
        console.log(piece + " has won!");
        board.fill(0,null,9)
        isOver = true
      } else {
        return;
      }
    });
    
  };
  let isOver = false;
  return { board, checkWinner, isOver };
})();

const gameFlow = function () {
  let currentPlayer = players.playerX;
  const startGame = () => {
    cells.forEach((cell) => {
      cell.addEventListener("click", (event) => {
        const id = event.target.id;
        if (currentPlayer === players.playerX && createGameBoard.isOver === false) {
          createGameBoard.board[id - 1] = "x";
          cell.style.backgroundColor = "black";
          currentPlayer = players.playerO;
          createGameBoard.checkWinner("x");
          console.log(createGameBoard.board)
        } else if(currentPlayer = players.playerO && createGameBoard.isOver === false){
          createGameBoard.board[id - 1] = "o";
          cell.style.backgroundColor = "green";
          currentPlayer = players.playerX;
          createGameBoard.checkWinner("o");
          console.log(createGameBoard.board);
        } else if(createGameBoard.isOver === true){
            for(i=0;i<10;i++){
                cellsArray[i].style.backgroundColor = "white"
            }
        }
      });
    });
  };
  return startGame();
};
gameFlow();
