import { checkRow, checkColumn, checkDiagonal } from "../status-checker";

describe("checkRow function", () => {
  test("should return true if there is 3 in a row of a player", () => {
    const board = [
      ["X", "X", "X"],
      ["_", "X", "_"],
      ["O", "O", "X"],
    ];
    const player = "X";
    const rowNumber = 1;
    expect(checkRow(board, player, rowNumber)).toBe(true);
  });
  test("should return false if there is not 3 in a row of a player", () => {
    const board = [
      ["O", "X", "X"],
      ["_", "X", "_"],
      ["O", "O", "X"],
    ];
    const player = "X";
    const rowNumber = 1;
    expect(checkRow(board, player, rowNumber)).toBe(false);
  });
});

describe("checkColumn function", () => {
  test("should return true if there is 3 in a column of a player", () => {
    const board = [
      ["X", "_", "X"],
      ["X", "X", "_"],
      ["X", "O", "X"],
    ];
    const player = "X";
    const columnNumber = 1;
    expect(checkColumn(board, player, columnNumber)).toBe(true);
  });
  test("1", () => {
    const board = [
      ["O", "X", "X"],
      ["_", "X", "_"],
      ["O", "O", "X"],
    ];
    const player = "X";
    const columnNumber = 1;
    expect(checkColumn(board, player, columnNumber)).toBe(false);
  });
});

describe("checkDiagonal function", () => {
  test("should return true if there is 3 in a diagonal of a player", () => {
    const board = [
      ["X", "X", "X"],
      ["_", "X", "_"],
      ["O", "O", "X"],
    ];
    const player = "X";

    expect(checkDiagonal(board, player)).toBe(true);
  });

  test("should return true if there is 3 in a diagonal of a player", () => {
    const board = [
      ["X", "X", "X"],
      ["_", "X", "_"],
      ["X", "O", "O"],
    ];
    const player = "X";

    expect(checkDiagonal(board, player)).toBe(true);
  });

  test("should return false if there is not 3 in the diagonal of a player", () => {
    const board = [
      ["O", "X", "X"],
      ["_", "_", "_"],
      ["O", "O", "X"],
    ];
    const player = "X";

    expect(checkDiagonal(board, player)).toBe(false);
  });
});
