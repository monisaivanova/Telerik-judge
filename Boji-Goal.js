const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test =
`8
5
1 3 2000000000
1 2 2000000000
2 4 1
4 8 1
8 6 1
5 7 1
2 7 1
7 3 1
5 6 1
end`.split('\n');
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const start = gets();
const dependencies = [];
while (true) {
    let numbers = gets();
    if (numbers === 'end') {
        break;
    }
    numbers = numbers.split(' ').map(Number);
    if (!dependencies[numbers[0]]) {
        dependencies[numbers[0]] = {};
    }
    if (!dependencies[numbers[1]]) {
        dependencies[numbers[1]] = {};
    }
    dependencies[numbers[0]][numbers[1]] = numbers[2];
    dependencies[numbers[1]][numbers[0]] = numbers[2];
}
// console.log(dependencies);
if (Object.keys(dependencies).length < 1) {
    print(0);
} else {
    const dfs = (vertex, value, count) => {
        if (count === n) {
            if (dependencies[vertex][start]) {
                value += dependencies[vertex][start];

                if (best > value) {
                    best = value;
                }
            }
            return;
        }

        for (const node in dependencies[vertex]) {
            if (!used.has(node)) {
                used.add(node);
                dfs(node, value + dependencies[vertex][node], count + 1);
                used.delete(node);
            }
        }
    };
    let best = Number.MAX_SAFE_INTEGER;
    const used = new Set();

    used.add(start);
    dfs(start, 0, 1);

    if (best === Number.MAX_SAFE_INTEGER) {
        print(0);
    } else {
        print(best);
    }
}