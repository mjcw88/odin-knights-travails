import { Graph } from "./classes/graph.js";

const REPEAT = 50;
const graph = new Graph();

console.log("-".repeat(REPEAT));
console.log(graph.knightMoves([0,0],[2,1]))

console.log("-".repeat(REPEAT));
console.log(graph.knightMoves([0,0],[3,3]));

console.log("-".repeat(REPEAT));
console.log(graph.knightMoves([3,3],[0,0]));

console.log("-".repeat(REPEAT));
console.log(graph.knightMoves([3,3],[4,3]));

console.log("-".repeat(REPEAT));
console.log(graph.knightMoves([0,0],[7,7]));