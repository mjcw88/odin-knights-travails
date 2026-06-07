export class Graph { 
    constructor() {
        this.node = ["A", "B", "C", "D", "E", "F", "G", "H"];
        this.matrix = Array.from({ length: this.node.length }, () => new Array(this.node.length).fill(false));
    }

    #isValid(src, dst) {
        if (!Number.isInteger(src)) throw new TypeError("Source must be an integer");
        if (!Number.isInteger(dst)) throw new TypeError("Destination must be an integer");
        if (src === dst) throw new Error("Source and destination cannot be the same");
        if (src < 0 || src >= this.matrix.length) throw new RangeError("Source index out of bounds");
        if (dst < 0 || dst >= this.matrix.length) throw new RangeError("Destination index out of bounds");
    }

    addEdge(src, dst) {
        this.#isValid(src, dst);
        this.matrix[src][dst] = true;
    }

    removeEdge(src, dst) {
        this.#isValid(src, dst);
        this.matrix[src][dst] = false;
    }

    checkEdge(src, dst) {
        this.#isValid(src, dst);
        return this.matrix[src][dst];
    }

    print() {
        let col = "";
        this.node.forEach(n => {
            col = col + n + " ";
        })

        console.log("  " + col);

        for(let i = 0; i < this.matrix.length; i++) {
            let string = "";
            for(let j = 0; j < this.matrix.length; j++) {
                string = string + Number(this.matrix[i][j]) + " ";
            }
            console.log(this.node[i] + " " + string);
        }
    }
}