class Game {
  players = [];
  playerIndex = 0;
  game = 0;
  snakes = {};
  ladders = {};
  combinedSnakeAndLadder = {};

  constructor(game, snakes = {}, ladders = {}) {
    this.game = game;
    this.snakes = snakes;
    this.ladders = ladders;
    this.combinedSnakeAndLadder = { ...snakes, ...ladders };
  }

  addPlayers() {
    this.players.push(0);
    return this.players.length - 1;
  }

  startGame() {
    const diceValue = this.rollDice();
    const currentPlayer = this.playerIndex;
    const currentPlayerState = this.players[currentPlayer];
    const newPlayerState = this.nextStatenextState(
      diceValue,
      currentPlayerState,
    );
    this.setNewPlayerState(currentPlayer, newPlayerState);
    console.log(
      JSON.stringify({
        currentPlayer,
        diceValue,
        currentPlayerState,
        newPlayerState,
      }),
    );
    if (this.ifWon(newPlayerState)) {
      console.log(`Player ${currentPlayer} won!`);
      return true;
    }
    this.changePlayer();
  }

  ifWon(newPlayerState) {
    if (newPlayerState === this.game) {
      return true;
    }
  }

  changePlayer() {
    if (this.playerIndex === this.players.length - 1) {
      this.playerIndex = 0;
    } else {
      this.playerIndex += 1;
    }
  }

  setNewPlayerState(player, state) {
    this.players[player] = state;
  }

  nextStatenextState(diceValue, currentState) {
    const possibleNextState = currentState + diceValue;
    const possibleNextStateAfterWormHole =
      this.combinedSnakeAndLadder[possibleNextState] !== undefined
        ? this.combinedSnakeAndLadder[possibleNextState]
        : possibleNextState;
    return possibleNextStateAfterWormHole > this.game
      ? currentState
      : possibleNextStateAfterWormHole;
  }

  rollDice() {
    return 6 - Math.ceil(Math.random() * 100) % 6;
  }
}

function main() {
  const game = 100;
  const snakes = { 10: 2, 22: 10, 60: 24, 90: 6 };
  const ladders = { 15: 27, 35: 45, 75: 95 };
  const newGame = new Game(game, snakes, ladders);
  console.log(newGame.addPlayers());
  console.log(newGame.addPlayers());
  console.log(newGame.addPlayers());
  console.log(newGame.addPlayers());
  console.log(newGame.addPlayers());
  console.log(newGame.addPlayers());
  while (true) {
    if (newGame.startGame() === true) {
      break;
    }
  }
}

main();
