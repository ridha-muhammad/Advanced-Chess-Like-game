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
  