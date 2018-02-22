const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '3 3',
    '10 10 10',
    '10 0 10',
    '10 10 10',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const [N, M] = gets().split(' ').map(Number);

const matrix = [];
for (let i = 0; i < N; i += 1) {
    matrix.push(gets().split(' ').map(Number));
}

let row = 0;
let col = 0;
for (let i = 0; i < N; i += 1) {
    for (let j = 0; j < M; j += 1) {
        if (matrix[i][j] === 0) {
            row = i;
            col = j;
            break;
        }
    }
}
let coins = 0;
while (true) {
    let left = 0;
    let right = 0;
    let up = 0;
    let down = 0;
    if (col - 1 > -1) {
        left = matrix[row][col - 1];
    }
    if (col + 1 < M) {
        right = matrix[row][col + 1];
    }
    if (row - 1 > -1) {
        up = matrix[row - 1][col];
    }
    if (row + 1 < N) {
        down = matrix[row + 1][col];
    }

    const max = Math.max(left, right, up, down);
    if (max === 0) {
        print(coins);
        break;
    }

    
    if (left === max) {
        col -= 1;
    } else if (right === max) {
        col += 1;
    } else if (up === max) {
        row -= 1;
    } else if (down === max) {
        row += 1;
    }
    coins += 1;
    matrix[row][col] -= 1;
}