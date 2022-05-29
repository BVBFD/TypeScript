/**
 * Let's make a game 🕹
 */

type Direction = 'up' | 'down' | 'left' | 'right';

const position = { x: 0, y: 0 };

const moveDirection = (direction: Direction) => {
  switch (direction) {
    case 'up':
      return (position.y += 1);
    case 'down':
      return (position.y -= 1);
    case 'left':
      return (position.x -= 1);
    case 'right':
      return (position.x += 1);
    default:
      throw new Error(`unknown direction ${direction}`);
  }
};

console.log(position); // { x: 0, y: 0}
moveDirection('up');
console.log(position); // { x: 0, y: 1}
moveDirection('down');
console.log(position); // { x: 0, y: 0}
moveDirection('left');
console.log(position); // { x: -1, y: 0}
moveDirection('right');
console.log(position); // { x: 0, y: 0}
