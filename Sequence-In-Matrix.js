const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '6 6',
    '92 11 23 42 59 48',
    '09 92 23 72 56 14',
    '17 63 92 46 85 95',
    '34 12 52 69 23 95',
    '26 88 78 71 29 95',
    '26 34 16 63 39 95',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const h = gets().split(' ');
const [N, M] = h;
let biggestSequence = 1;
// obhojda ednomeren masiv i namira nai-golemiq sequence
const arrSequence = (a) => {
    let counter = 1;
    for (let i = 0; i < a.length; i += 1) {
        if (a[i] === a[i + 1]) {
            counter += 1;
            if (counter > biggestSequence) {
                biggestSequence = counter;
            }
        } else {
            counter = 1;
        }
    }
};

// proverqva po diagonal kym dolen-desen
const checkDiagDown = (row, col) => {
    const temp = [];
    for (let i = 0; i < M; i += 1) {
        if (row + i < N && col + i < M) {
            temp.push(matrix[row + i][col + i]);
        }
    }
    arrSequence(temp);
};

// proverqva po diagonal kym goren-desen
const checkDiagUp = (row, col) => {
    const temp = [];
    for (let i = 0; i < M; i += 1) {
        if (row - i >= 0 && col + i < M) {
            temp.push(matrix[row - i][col + i]);
        }
    }
    arrSequence(temp);
};
// stroi matricata
let helpMatrix = [];
const matrix = [];
const buildMatrix = () => {
    for (let i = 0; i < N; i += 1) {
        matrix.push([]);
    }
    for (let i = 0; i < N; i += 1) {
        helpMatrix = gets().split(' ');

        for (let j = 0; j < M; j += 1) {
            matrix[i][j] = helpMatrix[j];
        }
    }
};
buildMatrix();

// proverqva vseki red
for (let i = 0; i < N; i += 1) {
    arrSequence(matrix[i]);
}

// proverqva vsqka kolona
for (let column = 0; column < M; column += 1) {
    const temp = [];
    for (let row = 0; row < N; row += 1) {
        temp.push(matrix[row][column]);
    }
    arrSequence(temp);
}

// proverqva ot [0][0] do [N][0] po diagonal nadolu
for (let i = 0; i < N; i += 1) {
    checkDiagDown(i, 0);
}
// proverqva ot [0][0] do [0][M] po diagonal nadolu
for (let i = 0; i < M; i += 1) {
    checkDiagDown(0, i);
}
// proverqva ot [N][0] do [N][M] po diagonal nagore
for (let i = 0; i < M; i += 1) {
    checkDiagUp(N - 1, i);
}
// proverqva ot [0][0] do [N][0] po diaagonal nagore
for (let i = 0; i < N; i += 1) {
    checkDiagUp(i, 0);
}
print(biggestSequence);