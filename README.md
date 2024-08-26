# Advanced Chess-like Game

This is a simple turn-based chess-like game implemented with a WebSocket server for real-time communication between players and a client-side interface for interaction.

## Project Structure

- **server/**: Contains the server-side code for the game logic and WebSocket communication.
- **client/**: Contains the client-side code including HTML, CSS, and JavaScript files for the game UI.

## Requirements

- **Node.js**: Ensure you have Node.js installed on your machine to run the server.

## Setup Instructions

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
cd advanced-chess-like-game
```

2. Setting Up the Server
The server is responsible for managing the game state and handling real-time communication between players.

a. Navigate to the Server Directory
```bash
cd server
```
b. Install Server Dependencies
Install the necessary dependencies using npm:

```bash
npm install
```
c. Start the Server
Start the server using the following command:

```bash
npm start
```
The server will start running on http://localhost:3000. It will handle WebSocket connections on port 3000.

3. Setting Up the Client
The client is responsible for rendering the game board, allowing players to interact with the game, and communicating with the server.

a. Navigate to the Client Directory
```bash
cd ../client
```
b. Open the Client in a Browser
Simply open the index.html file in your preferred web browser:

On Windows:
You can double-click the index.html file.
On macOS/Linux:
Use the open or xdg-open command:
```bash
open index.html    # macOS
xdg-open index.html  # Linux
```
4. Playing the Game
Once the server is running and the client is open in the browser, players can start interacting with the game.
The game board will be displayed on the screen, and players can make moves by clicking on the board.
The client will communicate with the server to process moves and update the game state in real-time.