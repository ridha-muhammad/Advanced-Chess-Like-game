

const boardElement = document.getElementById('board');
const controlsElement = document.getElementById('controls');
const moveHistoryElement = document.getElementById('move-history');

// Dummy game state
const gameState = {
  players: {
    A: [{ type: 'P1', position: [0, 0] }],
    B: [{ type: 'P1', position: [4, 4] }]
  },
  turn: 'A',
  winner: null
};

const renderBoard = (state) => {
  boardElement.innerHTML = '';  // Clear board
  for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 5; x++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.x = x;
      cell.dataset.y = y;
      boardElement.appendChild(cell);
    }
  }
};

// Initial render for testing
renderBoard(gameState);


