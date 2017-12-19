const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '5 6',
    '1 3 2 2 2 4',
    '3 3 3 2 4 4',
    '4 3 1 2 3 3',
    '4 3 1 3 3 1',
    '4 3 3 3 1 1',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const [N, M] = gets().split(' ');
const matrix = [];
let counter = 1;
let sum = 0;
let maxSum = 0;
for (let i = 0; i < N; i += 1) {
    matrix[i] = gets().split(' ').map((x) => +x);
}

const checkMatrix = (a, b) => {
    a = Number(a);
    b = Number(b);
    const val = matrix[a][b];
    if (val === true) {
        counter = 0;
    } else {
        matrix[a][b] = true;

        // check right
        if (b + 1 < M && val === matrix[a][b + 1]) {
            counter += 1;
            checkMatrix(a, b + 1);
        }
        // check down
        if (a + 1 < N && val === matrix[a + 1][b]) {
            counter += 1;
            checkMatrix(a + 1, b);
        }
        // check left
        if (b - 1 >= 0 && val === matrix[a][b - 1]) {
            counter += 1;
            checkMatrix(a, b - 1);
        }
        // check up
        if (a - 1 >= 0 && val === matrix[a - 1][b]) {
            counter += 1;
            checkMatrix(a - 1, b);
        }
    }
    // print(counter, val);
    return counter;
};

for (let i = 0; i < N; i += 1) {
    for (let j = 0; j < M; j += 1) {
        if (matrix[i][j] === true) {
            continue;
        } else {
            sum = checkMatrix(i, j);
            if (sum > maxSum) {
                maxSum = sum;
            }
            counter = 1;
        }
    }
}
print(maxSum);