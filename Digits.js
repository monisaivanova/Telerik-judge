const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '6',
    '9 9 9 2 2 2',
    '9 9 9 2 2 2',
    '9 9 9 2 2 2',
    '9 9 9 2 2 2',
    '9 9 9 2 2 2',
    '9 9 9 2 2 2',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const matrix = [];
for (let i = 0; i < n; i += 1) {
    matrix.push(gets().split(' ').map(Number));
}
// print(matrix);
const one = (row, col) => {
    let isTrue = false;
    if (matrix[row + 1][col - 1] === 1 &&
        matrix[row + 2][col - 2] === 1) {
        isTrue = true;
        for (let i = 1; i <= 4; i += 1) {
            if (matrix[row + i][col] !== 1) {
                isTrue = false;
                break;
            }
        }
    }
    if (isTrue) {
        pattern += 1;
        return 1;
    }
    return 0;
};
const two = (row, col) => {
    let isTrue = true;
    const rowDirs = [-1, 1, 1, 1, 1, 0, 0];
    const colDirs = [1, 1, 0, -1, -1, 1, 1];
    for (let j = 0; j < 7; j += 1) {
        row += rowDirs[j];
        col += colDirs[j];
        if (matrix[row][col] !== 2) {
            isTrue = false;
            break;
        }
    }
    if (isTrue) {
        pattern += 2;
        return 2;
    }
    return 0;
};
const three = (row, col) => {
    let isTrue = false;
    if (matrix[row + 2][col + 1] === 3) {
        isTrue = true;
        const rowDirs = [0, 0, 1, 1, 1, 1, 0, 0];
        const colDirs = [1, 1, 0, 0, 0, 0, -1, -1];
        for (let i = 0; i < 8; i += 1) {
            row += rowDirs[i];
            col += colDirs[i];
            if (matrix[row][col] !== 3) {
                isTrue = false;
                break;
            }
        }
    }
    if (isTrue) {
        pattern += 3;
        return 3;
    }
    return 0;
};
const four = (row, col) => {
    let isTrue = true;
    if (matrix[row + 1][col + 1] !== 4 ||
        matrix[row + 2][col + 1] !== 4) {
        isTrue = false;
    }
    if (isTrue) {
        for (let i = 0; i < 3; i += 1) {
            if (matrix[row - i][col - 1] !== 4 ||
                matrix[row - i][col + 1] !== 4) {
                isTrue = false;
                break;
            }
        }
    }
    if (isTrue) {
        pattern += 4;
        return 4;
    }
    return 0;
};
const five = (row, col) => {
    let isTrue = true;
    if (matrix[row + 1][col] !== 5 || matrix[row + 3][col + 2] !== 5) {
        isTrue = false;
    }
    if (isTrue) {
        for (let i = 0; i < 3; i += 1) {
            if (matrix[row][col + i] !== 5 ||
                matrix[row + 2][col + i] !== 5 ||
                matrix[row + 4][col + i] !== 5) {
                isTrue = false;
                break;
            }
        }
    }

    if (isTrue) {
        // pattern += 5;
        return 5;
    }
    return 0;
};
const six = (row, col) => {
    let isTrue = true;
    if (matrix[row + 2][col] !== 6 ||
        matrix[row + 2][col + 2] !== 6) {
        isTrue = false;
    }
    row -= 1;
    if (isTrue) {
        for (let i = 0; i < 3; i += 1) {
            if (matrix[row][col + i] !== 6 ||
                matrix[row + 2][col + i] !== 6 ||
                matrix[row + 4][col + i] !== 6) {
                isTrue = false;
                break;
            }
        }
    }
    if (isTrue) {
        // pattern += 6;
        return 6;
    }
    return 0;
};
const seven = (row, col) => {
    let isTrue = true;
    row -= 1;
    for (let i = col; i > col - 3; i -= 1) {
        if (matrix[row][i] !== 7) {
            isTrue = false;
            break;
        }
    }
    if (isTrue) {
        row += 2;
        col -= 1;
        for (let i = 0; i < 3; i += 1) {
            if (matrix[row + i][col] !== 7) {
                isTrue = false;
                break;
            }
        }
    }
    if (isTrue) {
        // pattern += 7;
        return 7;
    }
    return 0;
};
const eight = (row, col) => {
    let isTrue = true;
    const rowDirs = [-1, 0, 0, 1, 1, 1, 1, 0, 0, -1];
    const colDirs = [0, 1, 1, 0, -1, -1, 0, 1, 1, 0];
    for (let i = 0; i < rowDirs.length; i += 1) {
        row += rowDirs[i];
        col += colDirs[i];
        if (matrix[row][col] !== 8) {
            isTrue = false;
            break;
        }
    }
    if (isTrue) {
        // pattern += 8;
        return 8;
    }
    return 0;
};
const nine = (row, col) => {
    let isTrue = true;
    const rowDirs = [-1, -1, 0, 0, 1, 1, 1, 1, 0, 0];
    const colDirs = [-1, 0, 1, 1, 0, 0, 0, 0, -1, -1];
    for (let i = 0; i < rowDirs.length; i += 1) {
        row += rowDirs[i];
        col += colDirs[i];
        if (matrix[row][col] !== 9) {
            isTrue = false;
            break;
        }
    }
    if (isTrue) {
        // pattern += 9;
        return 9;
    }
    return 0;
}
let pattern = 0;
for (let row = 0; row < n; row += 1) {
    for (let col = 0; col < n; col += 1) {
        if (matrix[row][col] === 1 && col > 1 && row + 4 < n) {
            pattern += one(row, col);
        } else if (matrix[row][col] === 2 &&
            row > 0 && row + 3 < n && col + 2 < n) {
            pattern += two(row, col);
        } else if (matrix[row][col] === 3 &&
            col + 2 < n && row + 4 < n) {
            pattern += three(row, col);
        } else if (matrix[row][col] === 4 &&
            row > 1 &&
            row + 2 < n && col > 0 && col + 1 < n) {
            pattern += four(row, col);
        } else if (matrix[row][col] === 5 &&
            col + 2 < n && row + 4 < n) {
            pattern += five(row, col);
        } else if (matrix[row][col] === 6 &&
            row > 0 && row + 3 < n && col + 2 < n) {
            pattern += six(row, col);
        } else if (matrix[row][col] === 7 &&
            row > 0 && col > 1 && row + 3 < n) {
            pattern += seven(row, col);
        } else if (matrix[row][col] === 8 &&
            row > 0 && row + 3 < n && col + 2 < n) {
            pattern += eight(row, col);
        } else if (matrix[row][col] === 9 &&
            col > 0 && col + 1 < n && row > 1 && row + 2 < n) {
            pattern += nine(row, col);
        }
    }
}
print(pattern);