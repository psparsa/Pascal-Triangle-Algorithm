"use strict";

function pascalTriangle(n: number) {
  let rows = new Array(n);

  for (let i = 0; i < rows.length; i++) {
    let currentRow = new Array(i + 1); // create row array
    currentRow[0] = 1; // set first block of node = 1
    currentRow[currentRow.length - 1] = 1; // set last block of node = 1

    for (let y = 1; y < currentRow.length - 1; y++) {
      let topRow = rows[i - 1];
      currentRow[y] = topRow[y - 1] + topRow[y];
    }

    rows[i] = [...currentRow];
  }

  return rows;
}

const numberOfRows: number = 10;
console.log("Number of rows:", numberOfRows);
console.log("Result:\n", pascalTriangle(numberOfRows));
