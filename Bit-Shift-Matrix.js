const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '5',
    '6',
    '4',
    '14 27 1 5',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const add = (a, b) => {
    if (+a === 0 && +b === 0) {
        return '0';
    }

    a = a.toString().split('').reverse();
    b = b.toString().split('').reverse();
    const result = [];

    for (let i = 0;
        (a[i] >= 0) || (b[i] >= 0); i++) {
        const sum = (parseInt(a[i]) || 0) + (parseInt(b[i]) || 0);

        if (!result[i]) {
            result[i] = 0;
        }

        const next = ((result[i] + sum) / 10) | 0;
        result[i] = (result[i] + sum) % 10;

        if (next) {
            result[i + 1] = next;
        }
    }

    return result.reverse().join('');
};
const multiply = (a, b) => {
    if (+b === 0 || +b === 0) {
        return '0';
    }

    a = a.split('').reverse();
    b = b.split('').reverse();
    const result = [];

    for (let i = 0; a[i] >= 0; i += 1) {
        for (let j = 0; b[j] >= 0; j += 1) {
            if (!result[i + j]) {
                result[i + j] = 0;
            }

            result[i + j] += a[i] * b[j];
        }
    }

    for (let i = 0; result[i] >= 0; i += 1) {
        if (result[i] >= 10) {
            if (!result[i + 1]) {
                result[i + 1] = 0;
            }

            result[i + 1] += parseInt(result[i] / 10);
            result[i] %= 10;
        }
    }

    return result.reverse().join('');
};
const R = +gets();
const C = +gets();
const N = +gets();
const CODE = gets().split(' ').map((x) => +x);
const COEF = Math.max(R, C);

// Build Matrix
const matrix = [];
for (let i = 0; i < R; i += 1) {
    const row = Array.from({
        length: C,
    });
    matrix.push(row);
}
matrix[R - 1][0] = '1';
for (let i = R - 2; i >= 0; i -= 1) {
    matrix[i][0] = multiply(matrix[i + 1][0], '2');
}
for (let i = 0; i < R; i += 1) {
    for (let j = 1; j < C; j += 1) {
        matrix[i][j] = multiply(matrix[i][j - 1], '2');
    }
}

let row = 0;
let col = 0;
let curRow = R - 1;
let curCol = 0;
matrix[R - 1][0] = 0;
let counter = '1';
for (let i = 0; i < N; i += 1) {
    row = Math.floor(CODE[i] / COEF);
    col = CODE[i] % COEF;
    while (curRow !== row || curCol !== col) {
        if (curCol < col) {
            curCol += 1;
            counter = add(counter, matrix[curRow][curCol]);
            matrix[curRow][curCol] = 0;
        } else if (curCol > col) {
            curCol -= 1;
            counter = add(counter, matrix[curRow][curCol]);
            matrix[curRow][curCol] = 0;
        } else if (curRow < row) {
            curRow += 1;
            counter = add(counter, matrix[curRow][curCol]);
            matrix[curRow][curCol] = 0;
        } else if (curRow > row) {
            curRow -= 1;
            counter = add(counter, matrix[curRow][curCol]);
            matrix[curRow][curCol] = 0;
        }
    }
}
print(counter);