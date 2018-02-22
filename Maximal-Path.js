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
    '(8 <- 4)',
    '(8 <- 6)',
    '(1 <- 5)',
    '(2 <- 15)',
    '(11 <- 2)',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

class Graph {
    constructor() {
        this.vertices = {};
    }

    addEdge(parent, child) {
        if (!this.vertices[parent]) {
            this.vertices[parent] = [];
        }
        this.vertices[parent].push(child);
        if (!this.vertices[child]) {
            this.vertices[child] = [];
        }
        this.vertices[child].push(parent);
    }

    getResult(vertex) {
        const visited = new Set();
        let maxSum = 0;
        let nextVertex;

        const dfs = (vertex, currentSum) => {
            if (currentSum > maxSum) {
                maxSum = currentSum;
                nextVertex = vertex;
            }

            visited.add(vertex);

            if (this.vertices[vertex]) {
                this.vertices[vertex].forEach((element) => {
                    if (!visited.has(element)) {
                        dfs(element, currentSum + element);
                    }
                });
            }
        }
        dfs(vertex, vertex);
        visited.clear();
        dfs(nextVertex, nextVertex);

        return maxSum;
    }
}

const vertices = +gets();
const graph = new Graph(vertices);
let lastVertex;
for (let i = 0; i < vertices - 1; i += 1) {
    const line = gets().replace(/[()]/g, '');
    const [parent, child] = line.split(' <- ').map(Number);
    lastVertex = parent;
    graph.addEdge(parent, child);
}
print(graph.getResult(lastVertex));