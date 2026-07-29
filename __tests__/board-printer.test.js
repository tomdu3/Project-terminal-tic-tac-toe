import { checkIfNoMovesLeft, printBoard } from "../board-printer";

describe("checkIfNoMovesLeft", () => {
  test("checkIfNoMovesLeft should return true if the board array is empty", () => {
    const board = [];
    expect(checkIfNoMovesLeft(board)).toBe(true);
  });

  test("checkIfNoMovesLeft should return true if there are no moves left", () => {
    const board = [
      ["X", "O", "X"],
      ["O", "X", "O"],
      ["O", "X", "X"],
    ];
    expect(checkIfNoMovesLeft(board)).toBe(true);
  });
  test("checkIfNoMovesLeft should return false when an empty space is at the beginning", () => {
    const board = [
      ["_", "O", "X"],
      ["X", "O", "X"],
      ["O", "X", "O"],
    ];

    expect(checkIfNoMovesLeft(board)).toBe(false);
  });
  test("checkIfNoMovesLeft should return false when the board is completely empty", () => {
    const board = [
      ["_", "_", "_"],
      ["_", "_", "_"],
      ["_", "_", "_"],
    ];

    expect(checkIfNoMovesLeft(board)).toBe(false);
  });
});

test("should output the board to the terminal, when given a tic-tac-toe board represented by an array of arrays", () => {
  const board = [
    ["X", "_", "_"],
    ["_", "X", "_"],
    ["O", "O", "X"],
  ];
  expect(printBoard(board)).toBe(`X |   |  
=========
  | X |  
=========
O | O | X
=========
`);
}); 
