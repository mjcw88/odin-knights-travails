import { Graph } from "./graph.js";

describe("Graph (constructor)", () => {
    test("Creates 8x8 board", () => {
        const graph = new Graph();
        expect(graph.node.length).toBe(8);
        expect(graph.matrix.length).toBe(graph.node.length);
    })
});

describe("Graph (addEdge)", () => {
    test("Throws range error from invalid index for source", () => {
        const graph = new Graph();
        expect(() => graph.addEdge(9,0)).toThrow(RangeError);
    })
    test("Throws range error from invalid index for destination", () => {
        const graph = new Graph();
        expect(() => graph.addEdge(0,9)).toThrow(RangeError);
    })
    test("Throws type error from non-integer input for source", () => {
        const graph = new Graph();
        expect(() => graph.addEdge("9",0)).toThrow(TypeError);
    })
    test("Throws type error from non-integer input for destination", () => {
        const graph = new Graph();
        expect(() => graph.addEdge(0,"9")).toThrow(TypeError);
    })
    test("Throws error from source and destination being the same", () => {
        const graph = new Graph();
        expect(() => graph.addEdge(0,0)).toThrow(Error);
    })
    test("Flips false to true", () => {
        const graph = new Graph();
        const src = 0;
        const dst = 1;
        expect(graph.matrix[src][dst]).toBeFalsy();
        graph.addEdge(src,dst);
        expect(graph.matrix[src][dst]).toBeTruthy();
    })
});

describe("Graph (removeEdge)", () => {
    test("Throws range error from invalid index for source", () => {
        const graph = new Graph();
        expect(() => graph.removeEdge(9,0)).toThrow(RangeError);
    })
    test("Throws range error from invalid index for destination", () => {
        const graph = new Graph();
        expect(() => graph.removeEdge(0,9)).toThrow(RangeError);
    })
    test("Throws type error from non-integer input for source", () => {
        const graph = new Graph();
        expect(() => graph.removeEdge("9",0)).toThrow(TypeError);
    })
    test("Throws type error from non-integer input for destination", () => {
        const graph = new Graph();
        expect(() => graph.removeEdge(0,"9")).toThrow(TypeError);
    })
    test("Throws error from source and destination being the same", () => {
        const graph = new Graph();
        expect(() => graph.addEdge(0,0)).toThrow(Error);
    })
    test("Flips true to false", () => {
        const graph = new Graph();
        const src = 0;
        const dst = 1;
        graph.addEdge(src,dst);
        expect(graph.matrix[src][dst]).toBeTruthy();
        graph.removeEdge(src,dst);
        expect(graph.matrix[src][dst]).toBeFalsy();
    })
});

describe("Graph (checkEdge)", () => {
    test("Throws range error from invalid index for source", () => {
        const graph = new Graph();
        expect(() => graph.checkEdge(9,0)).toThrow(RangeError);
    })
    test("Throws range error from invalid index for destination", () => {
        const graph = new Graph();
        expect(() => graph.checkEdge(0,9)).toThrow(RangeError);
    })
    test("Throws type error from non-integer input for source", () => {
        const graph = new Graph();
        expect(() => graph.checkEdge("9",0)).toThrow(TypeError);
    })
    test("Throws type error from non-integer input for destination", () => {
        const graph = new Graph();
        expect(() => graph.checkEdge(0,"9")).toThrow(TypeError);
    })
    test("Throws error from source and destination being the same", () => {
        const graph = new Graph();
        expect(() => graph.addEdge(0,0)).toThrow(Error);
    })
    test("Returns false from unconnected nodes", () => {
        const graph = new Graph();
        for(let i = 0; i < graph.matrix.length; i++) {
            for(let j = 0; j < graph.matrix.length; j++) {
                expect(graph.matrix[i][j]).toBeFalsy();
            }
        }
    })
    test("Returns true from connected nodes", () => {
        const graph = new Graph();
        for(let i = 0; i < graph.matrix.length - 1; i++) {
            graph.addEdge(i, i + 1);
        }
        for(let i = 0; i < graph.matrix.length - 1; i++) {
            expect(graph.checkEdge(i, i + 1)).toBeTruthy();
        }
    })
});