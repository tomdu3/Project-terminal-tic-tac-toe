import { checkRow } from "../status-checker";
console.log(typeof checkRow);
describe("w", () => {
  test("1", () => {
    const board = [
      ["X", "X", "X"],
      ["_", "X", "_"],
      ["O", "O", "X"],
    ];
    const player = "X";
    const rowNumber = 1;
    expect(checkRow(board, player, rowNumber)).toBe(true);
  });
  test("1", () => {
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
