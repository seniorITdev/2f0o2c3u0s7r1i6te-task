const { hasBingo, findWinningBoard, readDataFromFile } = require('./bingo');

describe('read file', () => {
  const filePath = 'input.test.txt';

  it('read txt file and return formated calledNumbers and bingoBoards', () => {
    const { calledNumbers, bingoBoards } = readDataFromFile(filePath);

    expect(calledNumbers).toEqual([7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1]);
    expect(bingoBoards).toEqual([
      [
        [22, 13, 17, 11, 0],
        [8, 2, 23, 4, 24],
        [21, 9, 14, 16, 7],
        [6, 10, 3, 18, 5],
        [1, 12, 20, 15, 19],
      ],
      [
        [3, 15, 0, 2, 22],
        [9, 18, 13, 17, 5],
        [19, 8, 7, 25, 23],
        [20, 11, 10, 24, 4],
        [14, 21, 16, 12, 6],
      ],
      [
        [14, 21, 17, 24, 4],
        [10, 16, 15, 9, 19],
        [18, 8, 23, 26, 20],
        [22, 11, 13, 6, 5],
        [2, 0, 12, 3, 7],
      ],
    ]);
  });
});

describe('hasBingo', () => {
  const calledSet = new Set([7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1]);

  it('should return true for a card that has achieved Bingo', () => {
    const bingoCard = [
      [22, 13, 17, 11, 0],
      [8, 2, 23, 4, 24],
      [21, 9, 14, 16, 7],
      [6, 10, 3, 18, 5],
      [1, 12, 20, 15, 19],
    ];

    expect(hasBingo(calledSet, bingoCard)).toBe(true);
  });

  it('should return false for a card that has not achieved Bingo', () => {
    const bingoCard = [
      [31, 33, 35, 37, 39],
      [41, 43, 45, 47, 49],
      [51, 53, 55, 57, 59],
      [61, 63, 65, 67, 69],
      [71, 73, 75, 77, 79],
    ];

    expect(hasBingo(calledSet, bingoCard)).toBe(false);
  });
});

describe('findWinningBoard', () => {
  const calledNumbers = [7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1];

  it('should return the correct winning board index', () => {
    const bingoBoards = [
      [
        [22, 13, 17, 11, 0],
        [8, 2, 23, 4, 24],
        [21, 9, 14, 16, 7],
        [6, 10, 3, 18, 5],
        [1, 12, 20, 15, 19],
      ],
      [
        [31, 33, 35, 37, 39],
        [41, 43, 45, 47, 49],
        [51, 53, 55, 57, 59],
        [61, 63, 65, 67, 69],
        [71, 73, 75, 77, 79],
      ],
      [
        [3, 15, 0, 2, 22],
        [9, 18, 13, 17, 5],
        [19, 8, 7, 25, 23],
        [20, 11, 10, 24, 4],
        [14, 21, 16, 12, 6],
      ],
    ];

    expect(findWinningBoard(calledNumbers, bingoBoards)).toEqual([1, 3]);
  });

  it('should return -1 if no winning board is found', () => {
    const bingoBoards = [
      [
        [31, 33, 35, 37, 39],
        [41, 43, 45, 47, 49],
        [51, 53, 55, 57, 59],
        [61, 63, 65, 67, 69],
        [71, 73, 75, 77, 79],
      ],
    ];

    expect(findWinningBoard(calledNumbers, bingoBoards)).toBe(-1);
  });
});