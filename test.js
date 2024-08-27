function nextState(diceValue, currentState, game, combinedPassThrough) {
  const possibleNextState = currentState + diceValue;
  const possibleNextStateAfterWormHole =
    combinedPassThrough[possibleNextState] !== undefined
      ? combinedPassThrough[possibleNextState]
      : possibleNextState;
  return possibleNextStateAfterWormHole > game
    ? currentState
    : possibleNextStateAfterWormHole;
}

const game = 99;
const snakes = { 2: 10 };
const ladders = { 6: 20 };
const combinedPassThrough = { ...snakes, ...ladders };

console.log(nextState(3, 0, game, combinedPassThrough));
console.log(nextState(2, 0, game, combinedPassThrough));
console.log(nextState(6, 0, game, combinedPassThrough));
