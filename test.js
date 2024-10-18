import knightGame from "./move.js";

const start = [0, 0];
const target = [7, 3];

const shortestPath = knightGame(start, target);
console.log(shortestPath);

console.log(knightGame([0,0],[3,3]));