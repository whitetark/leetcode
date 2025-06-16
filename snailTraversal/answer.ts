// https://leetcode.com/problems/snail-traversal/description/

interface Array<T> {
  snail(rowsCount: number, colsCount: number): number[][];
}

// My answer
Array.prototype.snail = function (
  this: number[],
  rowsCount: number,
  colsCount: number,
): number[][] {
  if (rowsCount * colsCount !== this.length) {
    return [];
  }

  const result: number[][] = [];

  for (let row = 0; row < rowsCount; row++) {
    let tempRow: number[] = [];
    for (let col = 0; col < colsCount; col++) {
      if (col % 2 !== 0) {
        tempRow[col] = this[col * rowsCount + rowsCount - row - 1];
      } else {
        tempRow[col] = this[col * rowsCount + row];
      }
    }

    result[row] = tempRow;
  }

  return result;
};

const arr = [1, 2, 3, 4];
console.log(arr.snail(1, 4)); // [[1,2,3,4]]
