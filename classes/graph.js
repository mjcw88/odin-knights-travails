export class Graph { 
    constructor() {
        const SIZE = 8;
        this.matrix = Array.from({ length: SIZE }, () => new Array(SIZE).fill(false));
    }

    #isValid(start, end) {
        if (!Array.isArray(start)) throw new TypeError("Start must be an array");
        if (!Array.isArray(end)) throw new TypeError("End must be an array");
        if (start.some((x) => !Number.isInteger(x))) throw new TypeError("Start must contain only integers");
        if (end.some((x) => !Number.isInteger(x))) throw new TypeError("End must contain only integers");
        if (start.length !== 2) throw new RangeError("Start must have 2 values only");
        if (end.length !== 2) throw new RangeError("End must have 2 values only");
        start.forEach(num => {
            if (num < 0 || num >= this.matrix.length) throw new RangeError("Start index out of bounds");
        });
        end.forEach(num => {
            if (num < 0 || num >= this.matrix.length) throw new RangeError("End index out of bounds");
        });
        if (start.toString() === end.toString()) throw new Error("Start and end cannot be the same");
    }

    #addEdge(i, j) {
        this.matrix[i][j] = true;
    }

    #clearEdges() {
        for(let i = 0; i < this.matrix.length; i++) {
            for(let j = 0; j < this.matrix.length; j++) {
                this.matrix[i][j] = false;
            }
        }
    }

    #checkEdge(i, j) {
        return this.matrix[i][j];
    }

    #findPossibleMoves(start, end, possibleMoves, moveList) {
        const validMoves = [[1,-2],[2,-1],[2,1],[1,2],[-1,2],[-2,1],[-2,-1],[-1,-2]];

        const path = new Map();
        path.set(start.toString(),null);

        let current = start;
        while (possibleMoves.length > 0) {
            if (!this.#checkEdge(current[0], current[1])) {
                this.#addEdge(current[0], current[1]);

                validMoves.forEach(m => {
                    const row = current[0] + m[0];
                    const col = current[1] + m[1];
                    if (row < 0 || row >= this.matrix.length || col < 0 || col >= this.matrix.length) return;
                    possibleMoves.push([row,col]);
                    if (!path.has([row,col].toString())) path.set([row,col].toString(),current);
                })
            }
            if (possibleMoves.some((pos) => pos.toString() === end.toString())) {
                this.#findShortestPath(end, path, moveList)
                break;
            };
            current = possibleMoves.shift();
        }
    }

    #findShortestPath(end, path, moveList) {
        let move = path.get(end.toString());
        while(move) {
            moveList.push(move);
            move = path.get(move.toString());
        }
        moveList.reverse();
        moveList.push(end);
    }

    knightMoves(start, end) {        
        this.#isValid(start, end);
        this.#clearEdges();
        const possibleMoves = [start];
        const moveList = [];
        this.#findPossibleMoves(start, end, possibleMoves, moveList);

        const formattedMoves = moveList.map(move => `[${move}]`).join('\n');
        const message = `You made it in ${moveList.length - 1} ${moveList.length - 1 === 1 ? "move!" : "moves!"} Here's your path:\n${formattedMoves}`;
        return message;
    }
}
