const cells = {
  cell1: document.querySelector(".board1"),
  cell2: document.querySelector(".board2"),
  cell3: document.querySelector(".board3"),
  cell4: document.querySelector(".board4"),
  cell5: document.querySelector(".board5"),
  cell6: document.querySelector(".board6"),
  cell7: document.querySelector(".board7"),
  cell8: document.querySelector(".board8"),
  cell9: document.querySelector(".board9"),
};

const marks = (function () {
  const makeStar = (cell) => {
    let star = document.createElement("img");
    star.classList.add("mark");
    star.src = "assets/star.png";
    cell.appendChild(star);
  };

  const makeHeart = (cell) => {
    let heart = document.createElement("img");
    heart.classList.add("mark");
    heart.src = "assets/heart.png";
    cell.appendChild(heart);
  };
  return { makeStar, makeHeart };
})();

cells.cell1.addEventListener("click", () => {
  if ((piecesOnBoard = 0 || piecesOnBoard % 2 === 0)) {
    players.playerX.setPiece(1);
    marks.makeStar(cells.cell1);
  } else {
    players.playerO.setPiece(1);
    marks.makeHeart(cells.cell1);
  }
});

cells.cell2.addEventListener("click", () => {
  if ((piecesOnBoard = 0 || piecesOnBoard % 2 === 0)) {
    players.playerX.setPiece(2);
    marks.makeStar(cells.cell2);
  } else {
    players.playerO.setPiece(2);
    marks.makeHeart(cells.cell2);
  }
});

cells.cell3.addEventListener("click", () => {
  if ((piecesOnBoard = 0 || piecesOnBoard % 2 === 0)) {
    players.playerX.setPiece(3);
    marks.makeStar(cells.cell3);
  } else {
    players.playerO.setPiece(3);
    marks.makeHeart(cells.cell3);
  }
});

cells.cell4.addEventListener("click", () => {
  if ((piecesOnBoard = 0 || piecesOnBoard % 2 === 0)) {
    players.playerX.setPiece(4);
    marks.makeStar(cells.cell4);
  } else {
    players.playerO.setPiece(4);
    marks.makeHeart(cells.cell4);
  }
});

cells.cell5.addEventListener("click", () => {
  if ((piecesOnBoard = 0 || piecesOnBoard % 2 === 0)) {
    players.playerX.setPiece(5);
    marks.makeStar(cells.cell5);
  } else {
    players.playerO.setPiece(5);
    marks.makeHeart(cells.cell5);
  }
});

cells.cell6.addEventListener("click", () => {
  if ((piecesOnBoard = 0 || piecesOnBoard % 2 === 0)) {
    players.playerX.setPiece(6);
    marks.makeStar(cells.cell6);
  } else {
    players.playerO.setPiece(6);
    marks.makeHeart(cells.cell6);
  }
});

cells.cell7.addEventListener("click", () => {
  if ((piecesOnBoard = 0 || piecesOnBoard % 2 === 0)) {
    players.playerX.setPiece(7);
    marks.makeStar(cells.cell7);
  } else {
    players.playerO.setPiece(7);
    marks.makeHeart(cells.cell7);
  }
});

cells.cell8.addEventListener("click", () => {
  if ((piecesOnBoard = 0 || piecesOnBoard % 2 === 0)) {
    players.playerX.setPiece(8);
    marks.makeStar(cells.cell8);
  } else {
    players.playerO.setPiece(8);
    marks.makeHeart(cells.cell8);
  }
});

cells.cell9.addEventListener("click", () => {
  if ((piecesOnBoard = 0 || piecesOnBoard % 2 === 0)) {
    players.playerX.setPiece(9);
    marks.makeStar(cells.cell9);
  } else {
    players.playerO.setPiece(9);
    marks.makeHeart(cells.cell9);
  }
});

const gameBoard = {
  Gameboard: [1, 2, 3, 4, 5, 6, 7, 8, 9],
};

function createPlayer(type) {
  const playerType = type;
  const setPiece = (x) => {
    if (gameBoard.Gameboard[x - 1] === "o") {
      console.log("You cant do that");
      alert("You can't do that");
    }
    gameBoard.Gameboard[x - 1] = `${playerType}`;
    console.log(gameBoard.Gameboard);
    console.log(`Player Type is ${playerType}`);
    if (
      (gameBoard.Gameboard[0] === `${playerType}` &&
        gameBoard.Gameboard[1] === `${playerType}` &&
        gameBoard.Gameboard[2] === `${playerType}`) ||
      (gameBoard.Gameboard[3] === `${playerType}` &&
        gameBoard.Gameboard[4] === `${playerType}` &&
        gameBoard.Gameboard[5] === `${playerType}`) ||
      (gameBoard.Gameboard[6] === `${playerType}` &&
        gameBoard.Gameboard[7] === `${playerType}` &&
        gameBoard.Gameboard[8] === `${playerType}`) ||
      (gameBoard.Gameboard[0] === `${playerType}` &&
        gameBoard.Gameboard[3] === `${playerType}` &&
        gameBoard.Gameboard[6] === `${playerType}`) ||
      (gameBoard.Gameboard[1] === `${playerType}` &&
        gameBoard.Gameboard[4] === `${playerType}` &&
        gameBoard.Gameboard[7] === `${playerType}`) ||
      (gameBoard.Gameboard[2] === `${playerType}` &&
        gameBoard.Gameboard[5] === `${playerType}` &&
        gameBoard.Gameboard[8] === `${playerType}`) ||
      (gameBoard.Gameboard[0] === `${playerType}` &&
        gameBoard.Gameboard[4] === `${playerType}` &&
        gameBoard.Gameboard[8] === `${playerType}`) ||
      (gameBoard.Gameboard[2] === `${playerType}` &&
        gameBoard.Gameboard[4] === `${playerType}` &&
        gameBoard.Gameboard[6] === `${playerType}`)
    ) {
      alert(`Player ${playerType} wins!`);
      console.log(`Player ${playerType} wins!`);
    }
  };
  return { type, setPiece };
}

const players = {
  playerX: createPlayer("x"),
  playerO: createPlayer("o"),
};

function countPieces(array, ...values) {
  const numOfPieces = array.filter((item) => values.includes(item));
  return numOfPieces.length;
}

let piecesOnBoard = countPieces(gameBoard.Gameboard, "x", "o");
