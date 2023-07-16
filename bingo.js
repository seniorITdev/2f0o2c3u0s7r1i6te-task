const fs = require('fs');

function hasBingo(calledSet, bingoCard) {
  // Check rows
  for (let i = 0; i < bingoCard.length; i++) {
    const row = bingoCard[i];
    if (row.every((num) => calledSet.has(num))) {
      return true;
    }
  }

  // Check columns
  for (let i = 0; i < bingoCard.length; i++) {
    const column = bingoCard.map((row) => row[i]);
    if (column.every((num) => calledSet.has(num))) {
      return true;
    }
  }

  return false;
}

function findWinningBoard(calledNumbers, bingoBoards) {
  const calledSet = new Set(calledNumbers);
  const result = [];
  for (let i = 0; i < bingoBoards.length; i++) {
    const bingoCard = bingoBoards[i];
    if (hasBingo(calledSet, bingoCard)) {
      result.push(i + 1); // Return the board number (1-indexed)
    }
  }

  if(result.length > 0)return result;
  else return -1; // Return -1 if no winning board is found
}

// Read data from the text file
function readDataFromFile(filePath) {
  const data = fs.readFileSync(filePath, 'utf-8');
  const lines = data.trim().split('\n');

  const calledNumbers = lines.shift().split(',').map(Number);
  const bingoBoards = [];
  while(lines.length > 0) {
    const bingoBoard = lines.splice(0, 5).map((line) => line.split(' ').map(Number));
    bingoBoards.push(bingoBoard);
  }
  

  return {
    calledNumbers,
    bingoBoards,
  };
}

const filePath = 'input.txt';
const { calledNumbers, bingoBoards } = readDataFromFile(filePath);

const winningBoard = findWinningBoard(calledNumbers, bingoBoards);
console.log("The winning board against the giant squid is:", winningBoard);

module.exports = {
  hasBingo,
  findWinningBoard,
  readDataFromFile,
}