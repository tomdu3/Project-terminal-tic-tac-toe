/* 
    Given a tic-tac-toe board represented by an array of arrays - output the board to the terminal.
    For example, if we have the following board:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
    We should output something like this (feel free to be creative):
          X  |     |     
        =================
             |  X  |     
        =================
          O  |  O  |  X  
        =================
    Test your function by calling it with an example tic-tac-toe board.
*/
export function printBoard(board) {
  const separator = " | ";
  const underScore = "_";
  const horizontalLine = "=========";
  let boardOutput = "";
  for (let i = 0; i < board.length; i++) {
    let emptyRow = "";
    const rowElement = board[i];
    for (let j = 0; j < rowElement.length; j++) {
      const colElement = rowElement[j];

      if (colElement === underScore) {
        const replacedElement = colElement.replace("_", " ");
        emptyRow += replacedElement;
      } else if (colElement !== underScore) {
        emptyRow += colElement;
      }

      if (j !== rowElement.length - 1) {
        emptyRow += separator;
      }
    }

    boardOutput += emptyRow;
    boardOutput += "\n";

    boardOutput += horizontalLine;
    boardOutput += "\n";
  }
  console.log(boardOutput);
}

/*
    Given a tic-tac-toe board (an array of arrays),
        - return true if there are no moves left to make (there are no more '_' values)
        - return false if there are still moves that can be made
*/
export function checkIfNoMovesLeft(board) {
  const underScore = "_";
  for (let i = 0; i < board.length; i++) {
    const rowElement = board[i];
    for (let j = 0; j < rowElement.length; j++) {
      const colElement = rowElement[j];

      if (colElement === underScore) {
        return false;
      }
    }
  }
  return true;
}
console.log(
  checkIfNoMovesLeft([
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["O", "X", "X"],
  ])
);
