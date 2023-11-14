function createPlayer(type) {
  //create our player objects
  const playerType = type;
  return { playerType };
}

const players = {
  playerX: createPlayer("x"),
  playerO: createPlayer("o"),
};

  let isOver = false;

const createGameBoard = (function () {
  let board = Array(9).fill(null);
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
const result = document.querySelector(".game-result")
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
        board.fill(0, null, 9);
        isOver = true;
        if(piece === "x"){
            result.textContent = "Tiger Is King Of The Jungle"
        } else if(piece === "o")
            result.textContent = "Gorilla Is King Of The Jungle"
      }
      return;
    });
  };
  return { board, checkWinner, result};
})();

const gameFlow = function () {
createGameBoard.isOver = false
  const cells = document.querySelectorAll(".cell");
  const restart = document.getElementById("restart")
  let currentPlayer = players.playerX;
  const startGame = () => {

    
    cells.forEach((cell) => {
      cell.addEventListener("click", (event) => {
        const id = event.target.id;
        if (
          currentPlayer === players.playerX &&
          isOver === false && createGameBoard.board[id - 1] == null
        ) {
          createGameBoard.board[id - 1] = "x";
          cell.style.backgroundImage = "url(assets/tiger.png)";
          currentPlayer = players.playerO;
          createGameBoard.checkWinner("x");
          console.log(createGameBoard.board);
          console.log(isOver);
        } else if (
          currentPlayer === players.playerO &&
          isOver === false && createGameBoard.board[id - 1] == null
        ) {
          createGameBoard.board[id - 1] = "o";
          cell.style.backgroundImage = "url(assets/gorilla.png)";
          currentPlayer = players.playerX;
          createGameBoard.checkWinner("o");
          console.log(createGameBoard.board);
          console.log(isOver)
        } else if (isOver === true) {
            restartGame()
        } else{
            alert("You cant do that")
        }
      });
    });
      const restartGame = function () {
        createGameBoard.result.textContent = ""
        createGameBoard.board.fill(null);
        currentPlayer = players.playerX;
        isOver = false;
        cells.forEach((cell) => {
          cell.style.backgroundImage = "";
        });
        restart.addEventListener("click", () => {
            restartGame()
        })
      };
      return restartGame()
  };
  return startGame();
};


gameFlow();
