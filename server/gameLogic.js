// const initializeGame = () => {
//     return {
//       players: {
//         A: [{ type: 'P1', position: [0, 0] }, /* other pieces */],
//         B: [{ type: 'P1', position: [4, 0] }, /* other pieces */]
//       },
//       turn: 'A',
//       winner: null
//     };
//   };
  
//   const processMove = (move, state) => {
//     const { player, piece, direction } = move;
//     let response = { valid: false, state };
  
//     // Logic to validate move
//     if (player === state.turn) {
//       // Move the piece in the specified direction
//       const playerPieces = state.players[player];
//       const selectedPiece = playerPieces.find(p => p.type === piece);
  
//       if (selectedPiece) {
//         // Assume direction is 'F' for forward, 'B' for backward, etc.
//         let newPosition = [...selectedPiece.position];
//         switch (direction) {
//           case 'F':
//             newPosition[1] += 1;
//             break;
//           case 'B':
//             newPosition[1] -= 1;
//             break;
//           case 'L':
//             newPosition[0] -= 1;
//             break;
//           case 'R':
//             newPosition[0] += 1;
//             break;
//         }
  
//         // Check if new position is within bounds and not occupied
//         if (isValidPosition(newPosition, state)) {
//           selectedPiece.position = newPosition;
//           response.valid = true;
  
//           // Update game state
//           state.turn = state.turn === 'A' ? 'B' : 'A';
//           response.state = state;
//         }
//       }
//     }
  
//     // Logic to check for a winner
//     if (checkWinner(state)) {
//       state.winner = player;
//       response.state = state;
//     }
  
//     return response;
//   };
  
//   const isValidPosition = (position, state) => {
//     const [x, y] = position;
//     if (x < 0 || x > 4 || y < 0 || y > 4) return false;
  
//     const allPieces = [...state.players.A, ...state.players.B];
//     for (let piece of allPieces) {
//       if (piece.position[0] === x && piece.position[1] === y) {
//         return false;
//       }
//     }
  
//     return true;
//   };
  
//   const checkWinner = (state) => {
//     // Implement winning condition check
    
//     return false;
//   };
  
//   module.exports = { initializeGame, processMove };
  

// const initializeGame = () => {
//   return {
//     grid: Array(5).fill(null).map(() => Array(5).fill(null)),
//     players: {
//       A: [
//         { type: 'P1', position: [0, 0] }, { type: 'P1', position: [0, 1] }, { type: 'P1', position: [0, 2] },
//         { type: 'P1', position: [0, 3] }, { type: 'P1', position: [0, 4] }
//       ],
//       B: [
//         { type: 'P1', position: [4, 0] }, { type: 'P1', position: [4, 1] }, { type: 'P1', position: [4, 2] },
//         { type: 'P1', position: [4, 3] }, { type: 'P1', position: [4, 4] }
//       ]
//     },
//     turn: 'A',
//     winner: null
//   };
// };

// const isInBounds = (position) => {
//   const [x, y] = position;
//   return x >= 0 && x < 5 && y >= 0 && y < 5;
// };

// const getPiece = (player, type, state) => {
//   return state.players[player].find(piece => piece.type === type);
// };

// const movePiece = (piece, direction, state) => {
//   const [x, y] = piece.position;
//   let newPosition = [...piece.position];

//   switch (direction) {
//     case 'L':
//       newPosition[1] -= 1;
//       break;
//     case 'R':
//       newPosition[1] += 1;
//       break;
//     case 'F':
//       newPosition[0] -= 1;
//       break;
//     case 'B':
//       newPosition[0] += 1;
//       break;
//     case 'FL':
//       newPosition[0] -= 1;
//       newPosition[1] -= 1;
//       break;
//     case 'FR':
//       newPosition[0] -= 1;
//       newPosition[1] += 1;
//       break;
//     case 'BL':
//       newPosition[0] += 1;
//       newPosition[1] -= 1;
//       break;
//     case 'BR':
//       newPosition[0] += 1;
//       newPosition[1] += 1;
//       break;
//     default:
//       return null;
//   }

//   return isInBounds(newPosition) ? newPosition : null;
// };

// const processMove = (move, state) => {
//   const { player, pieceName, direction } = move;
//   const opponent = player === 'A' ? 'B' : 'A';
//   let response = { valid: false, state };

//   const piece = state.players[player].find(p => p.type === pieceName);
//   if (!piece) {
//     response.message = 'Invalid piece';
//     return response;
//   }

//   let newPosition = movePiece(piece, direction, state);
//   if (!newPosition) {
//     response.message = 'Move out of bounds';
//     return response;
//   }

//   // Check for collisions
//   const collisionPiece = state.players[opponent].find(p => p.position[0] === newPosition[0] && p.position[1] === newPosition[1]);
//   if (collisionPiece) {
//     // Remove opponent's piece
//     state.players[opponent] = state.players[opponent].filter(p => p !== collisionPiece);
//   }

//   piece.position = newPosition;
  
//   // Check for a winner
//   if (state.players[opponent].length === 0) {
//     state.winner = player;
//     response.message = `${player} wins!`;
//     response.valid = true;
//     return response;
//   }

//   // Switch turn
//   state.turn = opponent;
//   response.valid = true;
//   response.state = state;
//   return response;
// };

// const displayState = (state) => {
//   const grid = Array(5).fill(null).map(() => Array(5).fill('.'));
//   Object.keys(state.players).forEach(player => {
//     state.players[player].forEach(piece => {
//       const [x, y] = piece.position;
//       grid[x][y] = `${player}-${piece.type}`;
//     });
//   });
//   return grid.map(row => row.join(' ')).join('\n');
// };

// module.exports = { initializeGame, processMove, displayState };


const initializeGame = () => {
    // Initialize the game state
    return {
        players: {
            A: [
              { type: 'P1', position: [0, 0] },
              { type: 'P1', position: [1, 0] },
              { type: 'H1', position: [2, 0] },
              { type: 'H2', position: [3, 0] },
              { type: 'P1', position: [4, 0] }
            ],
            B: [
              { type: 'P1', position: [0, 4] },
              { type: 'P1', position: [1, 4] },
              { type: 'H1', position: [2, 4] },
              { type: 'H2', position: [3, 4] },
              { type: 'P1', position: [4, 4] }
            ]
          },
          turn: 'A',
          winner: null,
          history: []
      
    };
  };
  
  const isMoveOutOfBounds = (x, y) => x < 0 || x >= 5 || y < 0 || y >= 5;
  
  const isValidMove = (move, state) => {
    const { player, piece, direction } = move;
    const pieceData = state.players[player].find(p => p.type === piece);
  
    if (!pieceData) return false; // Piece does not exist
  
    const [x, y] = pieceData.position;
    
    switch (piece) {
      case 'P1':
        if (!['L', 'R', 'F', 'B'].includes(direction)) return false; // Invalid move for Pawn
        break;
      case 'H1':
        if (!['L', 'R', 'F', 'B'].includes(direction)) return false; // Invalid move for Hero1
        break;
      case 'H2':
        if (!['FL', 'FR', 'BL', 'BR'].includes(direction)) return false; // Invalid move for Hero2
        break;
      default:
        return false; // Unknown piece type
    }
  
    // Check move validity based on direction and bounds
    switch (piece) {
      case 'P1':
        // Pawn movement
        if (direction === 'L') x -= 1;
        if (direction === 'R') x += 1;
        if (direction === 'F') y += 1;
        if (direction === 'B') y -= 1;
        break;
      case 'H1':
        // Hero1 movement
        if (direction === 'L') x -= 2;
        if (direction === 'R') x += 2;
        if (direction === 'F') y += 2;
        if (direction === 'B') y -= 2;
        break;
      case 'H2':
        // Hero2 movement
        if (direction === 'FL') { x -= 2; y += 2; }
        if (direction === 'FR') { x += 2; y += 2; }
        if (direction === 'BL') { x -= 2; y -= 2; }
        if (direction === 'BR') { x += 2; y -= 2; }
        break;
    }
  
    // Check if move is out of bounds
    if (isMoveOutOfBounds(x, y)) return false;
  
    // Check if move targets a friendly piece
    const targetPiece = state.players[player].find(p => p.position[0] === x && p.position[1] === y);
    if (targetPiece) return false;
  
    return true;
  };
  
  const updateGameState = (move, state) => {
    const { player, piece, direction } = move;
    let response = { valid: false, state };
  
    if (isValidMove(move, state)) {
      const pieceData = state.players[player].find(p => p.type === piece);
      const [x, y] = pieceData.position;
  
      // Calculate new position
      let newX = x;
      let newY = y;
  
      switch (piece) {
        case 'P1':
          if (direction === 'L') newX -= 1;
          if (direction === 'R') newX += 1;
          if (direction === 'F') newY += 1;
          if (direction === 'B') newY -= 1;
          break;
        case 'H1':
          if (direction === 'L') newX -= 2;
          if (direction === 'R') newX += 2;
          if (direction === 'F') newY += 2;
          if (direction === 'B') newY -= 2;
          break;
        case 'H2':
          if (direction === 'FL') { newX -= 2; newY += 2; }
          if (direction === 'FR') { newX += 2; newY += 2; }
          if (direction === 'BL') { newX -= 2; newY -= 2; }
          if (direction === 'BR') { newX += 2; newY -= 2; }
          break;
      }
  
      // Update piece position
      pieceData.position = [newX, newY];
  
      // Handle combat
      Object.keys(state.players).forEach(opponent => {
        if (opponent !== player) {
          state.players[opponent] = state.players[opponent].filter(p => p.position[0] !== newX || p.position[1] !== newY);
        }
      });
  
      // Switch turn
      state.turn = state.turn === 'A' ? 'B' : 'A';
  
      // Add move to history
      response = { valid: true, state: state, history: [...state.history, move] };
    }
  
    return response;
  };
  
  const processMove = (move, state) => {
    const response = updateGameState(move, state);
    if (response.valid) {
      // Check for winner
      if (state.players['A'].length === 0) {
        response.state.winner = 'B';
      } else if (state.players['B'].length === 0) {
        response.state.winner = 'A';
      }
    }
    return response;
  };
  
  module.exports = { initializeGame, processMove };
  