import { Graph } from "./graph.js";

describe("Graph (constructor)", () => {
    test("Creates 8x8 board", () => {
        const graph = new Graph();
        expect(graph.matrix.length).toBe(8);
    })
});

describe("Graph, (knightMoves)", () => {
    test("Throws type error from invalid data type for start", () => {
        const graph = new Graph();
        expect(() => graph.knightMoves("[9,0]",[4,4])).toThrow(TypeError);
    })
    test("Throws type error from invalid data type for end", () => {
        const graph = new Graph();
        expect(() => graph.knightMoves([0,0],"[4,4]")).toThrow(TypeError);
    })
    test("Throws type error from invalid data type in start array", () => {
        const graph = new Graph();
        expect(() => graph.knightMoves(["0",0],[4,4])).toThrow(TypeError);
    })
    test("Throws type error from invalid data type in end array", () => {
        const graph = new Graph();
        expect(() => graph.knightMoves([0,0],["4",4])).toThrow(TypeError);
    })
    test("Throws range error from invalid start length", () => {
        const graph = new Graph();
        expect(() => graph.knightMoves([0],[4,4])).toThrow(RangeError);
        expect(() => graph.knightMoves([0,0,0],[4,4])).toThrow(RangeError);
    })
    test("Throws range error from invalid end length", () => {
        const graph = new Graph();
        expect(() => graph.knightMoves([0,0,],[4])).toThrow(RangeError);
        expect(() => graph.knightMoves([0,0],[4,4,4])).toThrow(RangeError);
    })
    test("Throws range error from invalid index for start", () => {
        const graph = new Graph();
        expect(() => graph.knightMoves([9,0],[4,4])).toThrow(RangeError);
        expect(() => graph.knightMoves([0,9],[4,4])).toThrow(RangeError);
    })
    test("Throws range error from invalid index for end", () => {
        const graph = new Graph();
        expect(() => graph.knightMoves([4,4],[9,0])).toThrow(RangeError);
        expect(() => graph.knightMoves([4,4],[0,9])).toThrow(RangeError);
    })
    test("Throws error from start and end being the same", () => {
        const graph = new Graph();
        expect(() => graph.knightMoves([0,0],[0,0])).toThrow(Error);
        expect(() => graph.knightMoves([1,1],[1,1])).toThrow(Error);
        expect(() => graph.knightMoves([2,2],[2,2])).toThrow(Error);
        expect(() => graph.knightMoves([3,3],[3,3])).toThrow(Error);
    })
    test("knightMoves([0,0],[3,3]) to return 2 moves", () => {
        const graph = new Graph();
        const result = graph.knightMoves([0,0],[3,3]);
        expect(result).toContain("You made it in 2 moves!");
    })
    test("knightMoves([3,3],[0,0]) to return 2 moves", () => {
        const graph = new Graph();
        const result = graph.knightMoves([3,3],[0,0]);
        expect(result).toContain("You made it in 2 moves!");
    })
    test("knightMoves([3,3],[4,3]) to return 3 moves", () => {
        const graph = new Graph();
        const result = graph.knightMoves([3,3],[4,3]);
        expect(result).toContain("You made it in 3 moves!");
    })
    test("knightMoves([4,3],[3,3]) to return 3 moves", () => {
        const graph = new Graph();
        const result = graph.knightMoves([4,3],[3,3]);
        expect(result).toContain("You made it in 3 moves!");
    })
    test("knightMoves([0,0],[7,7]) to return 6 moves", () => {
        const graph = new Graph();
        const result = graph.knightMoves([0,0],[7,7]);
        expect(result).toContain("You made it in 6 moves!");
    })
    test("knightMoves([7,7],[0,0]) to return 6 moves", () => {
        const graph = new Graph();
        const result = graph.knightMoves([7,7],[0,0]);
        expect(result).toContain("You made it in 6 moves!");
    })
})