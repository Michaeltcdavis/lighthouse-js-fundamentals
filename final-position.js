const moves = ['north', 'north', 'west', 'west', 'south', 'east', 'north'];

function finalPosition(moves) {
  let position = [0, 0];
  for (let move of moves) {
    switch (move) {
      case 'north':
        position[1] += 1;
        break;
      case 'south':
        position[1] -= 1;
        break;
      case 'east':
        position[0] += 1;
        break;
      case 'west':
        position[0] -= 1;
        break;
    }
  }
  return position;
}
console.log(finalPosition(moves));