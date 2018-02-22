/* eslint-disable */
const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = `10
(5 <- 11)
(1 <- 8)
(11 <- 3)
(8 <- 7)
(1 <- 5)
(11 <- 2)
(8 <- 6)
(2 <- 15)
(8 <- 4)`.split('\n');
const gets = this.gets || getGets(test);
const print = this.print || console.log;

class Graph {
    constructor() {
        this.graph = {};
    }

    addVertices(x, y) {
        if (!this.graph[x]) {
            this.graph[x] = [];
        }
        if (!this.graph[y]) {
            this.graph[y] = [];
        }
        this.graph[x].push(y);
        this.graph[y].push(x);
    }

    bfs(startVertex) {
        let bestVertex = {
            vertex: -1,
            value: -1
        };
        const queue = [];
        const used = new Set();

        queue.push({
            vertex: startVertex,
            value: startVertex,
        });
        while (queue.length > 0) {
            const current = queue.shift();
            const vertex = current.vertex;
            const value = current.value;
            used.add(vertex);

            this.graph[vertex].forEach((element) => {
                if (!used.has(element)) {
                    queue.push({
                        vertex: element,
                        value: value + element,
                    });
                    if (value + element > bestVertex.value) {
                        bestVertex = {
                            vertex: element,
                            value: value + element,
                        };
                    }
                }
            });
        }
        return bestVertex;
    }
}

const n = +gets();
const graph = new Graph();
let start;
for (let i = 0; i < n - 1; i += 1) {
    let numbers = gets();
    numbers = numbers
        .substring(1, numbers.length - 1)
        .split(' <- ');
    graph.addVertices(+numbers[0], +numbers[1]);
    start = +numbers[0];
}

const nextVertex = graph.bfs(start);
const final = graph.bfs(nextVertex.vertex)
print(final.value);