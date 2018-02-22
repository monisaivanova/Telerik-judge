const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '16',
    '2 3 92',
    '5 2 10',
    '14 3 42',
    '2 4 26',
    '14 12 50',
    '4 6 93',
    '9 6 24',
    '15 14 9',
    '0 2 95',
    '8 0 90',
    '0 13 60',
    '9 10 59',
    '1 0 66',
    '11 12 7',
    '7 10 35',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const dependencies = {};
const counts = [];
const edges = [];
for (let i = 0; i < n; i += 1) {
    counts.push(0);
}
for (let i = 0; i < n - 1; i += 1) {
    const numbers = gets().split(' ').map(Number);
    if (!dependencies[numbers[0]]) {
        dependencies[numbers[0]] = {};
    }
    if (!dependencies[numbers[1]]) {
        dependencies[numbers[1]] = {};
    }
    dependencies[numbers[0]][numbers[1]] = numbers[2];
    dependencies[numbers[1]][numbers[0]] = numbers[2];
    counts[numbers[0]] += 1;
    counts[numbers[1]] += 1;
}
console.log(dependencies);

const dfs = (edge, value) => {
    used.add(edge);
    if (best < value) {
        best = value;
        nextStart = edge;
    }
    for (const i in dependencies[edge]) {
        if (!used.has(i)) {
            dfs(i, value + dependencies[edge][i]);
        }
    }
}
let best = 0;
const used = new Set();
let nextStart;
dfs(3, 0);
used.clear();
dfs(nextStart, 0);
print(best);