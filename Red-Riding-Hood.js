const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '10',
    '0 3 0 1 0 4 0 4 0 2',
    '6 9',
    '2 9',
    '7 6',
    '8 2',
    '3 8',
    '10 2',
    '5 7',
    '1 8',
    '4 10',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const values = [0, ...gets().split(' ').map(Number)];
const dependencies = [];

for (let i = 0; i < n - 1; i += 1) {
    const [parent, child] = gets().split(' ').map(Number);

    if (!dependencies[parent]) {
        dependencies[parent] = [];
    }
    if (!dependencies[child]) {
        dependencies[child] = [];
    }

    dependencies[parent].push(child);
    dependencies[child].push(parent);
}
const dfs = (value, sum) => {
    if (maxSum < sum) {
        maxSum = sum;
        bestValue = value;
    }

    dependencies[value].forEach((ele) => {
        if (!used.has(ele)) {
            used.add(ele);
            dfs(ele, sum + values[ele]);
        }
    });
};

let maxSum = 0;
let bestValue;
const used = new Set();
used.add(1);
dfs(1, values[1]);

used.clear();
used.add(bestValue);
maxSum = 0;
dfs(bestValue, values[bestValue]);
print(maxSum);