const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
    '10',
    '(5 <- 11)',
    '(1 <- 8)',
    '(11 <- 3)',
    '(8 <- 7)',
    '(1 <- 5)',
    '(11 <- 2)',
    '(8 <- 6)',
    '(2 <- 15)',
    '(8 <- 4)',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

class Graph {
    constructor() {
        this.vertices = {};
    }

    addEdge(x, y) {
        this.addDirectEdge(x, y);
        this.addDirectEdge(y, x);
    }

    addDirectEdge(from, to) {
        if (!this.vertices[from]) {
            this.vertices[from] = [];
        }
        this.vertices[from].push(to);
    }

    bfs(vertex) {
        const visited = new Set();
        let currentSum = vertex;
        let maxSum = 0;
        let nextVertex = 0;
        let queue = [];
        queue.push(vertex);
        while (queue.length > 0) {
            let currentVertex = queue.shift();
            let neighbours = this.vertices[currentVertex];
            visited.add(currentVertex);
            neighbours.forEach((element) => {
                if (!visited.has(element)) {
                    queue.push(element);
                    currentSum += element;
                    if (currentSum > maxSum) {
                        maxSum = currentSum;
                        nextVertex = element;
                    }
                }
            });
        }

        return {
            maxSum,
            nextVertex
        };
    }
}


const n = +gets();

const graph = new Graph();

for (let index = 0; index < n - 1; index++) {
    const current = gets();
    const str = current.substring(1, current.length - 1);
    const [parent, child] = str.split(' <- ');
    graph.addEdge(+parent, +child);
}

const currentBest = graph.bfs(7);
// const result = graph.bfs(currentBest.nextVertex);
print(currentBest);