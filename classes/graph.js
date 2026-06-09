export class Graph { 
    constructor() {
        const SIZE = 8;
        this.matrix = Array.from({ length: SIZE }, () => new Array(SIZE).fill(false));
    }

    #isValid(start, end) {
        if (!Array.isArray(start)) throw new TypeError("Start must be an array");
        if (start.some((x) => !Number.isInteger(x))) throw new TypeError("Start must contain only integers");
        if (start.length !== 2) throw new RangeError("Start must have 2 values only");
        start.forEach(num => {
            if (num < 0 || num >= this.matrix.length) throw new RangeError("Start index out of bounds");
        });

        if (!Array.isArray(end)) throw new TypeError("End must be an array");
        if (end.some((x) => !Number.isInteger(x))) throw new TypeError("End must contain only integers");
        if (end.length !== 2) throw new RangeError("End must have 2 values only");
        end.forEach(num => {
            if (num < 0 || num >= this.matrix.length) throw new RangeError("End index out of bounds");
        });
        
        if (start.toString() === end.toString()) throw new Error("Start and end cannot be the same");
    }

    #addEdge(node) {
        this.matrix[node[0]][node[1]] = true;
    }

    #clearEdges() {
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix.length; j++) {
                this.matrix[i][j] = false;
            }
        }
    }

    #checkEdge(node) {
        return this.matrix[node[0]][node[1]];
    }

    #getShortestPath(start, end) {
        const DIRECTIONS = [[1,-2],[2,-1],[2,1],[1,2],[-1,2],[-2,1],[-2,-1],[-1,-2]];
        const possibleMoves = [start];

        const path = new Map();
        path.set(start.toString(),null);

        while (possibleMoves.length > 0) {
            const current = possibleMoves.shift();

            if (this.#checkEdge(current)) continue;

            this.#addEdge(current);

            DIRECTIONS.forEach(dir => {
                const row = current[0] + dir[0];
                const col = current[1] + dir[1];
                if (row < 0 || row >= this.matrix.length || col < 0 || col >= this.matrix.length) return;
                possibleMoves.push([row, col]);
                if (!path.has([row, col].toString())) path.set([row, col].toString(), current);
            });

            if (possibleMoves.some((pos) => pos.toString() === end.toString())) return path;
        }
    }

    #getMoveList(end, path) {
        const moveList = [];
        let move = path.get(end.toString());
        while (move) {
            moveList.push(move);
            move = path.get(move.toString());
        }
        moveList.reverse();
        moveList.push(end);
        return moveList;
    }

    knightMoves(start, end) {        
        this.#isValid(start, end);
        this.#clearEdges();
        
        const path = this.#getShortestPath(start, end);
        const moveList = this.#getMoveList(end, path);

        const moveCount = moveList.length - 1;
        const moves = moveList.map(move => `[${move}]`).join("\n");
        const message = `You made it in ${moveCount} ${moveCount === 1 ? "move!" : "moves!"} Here's your path:\n${moves}`;
        return message;
    }
}