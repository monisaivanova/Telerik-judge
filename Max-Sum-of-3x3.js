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
    '4 3 5',
    '2 6 4',
    '8 2 7',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const [N, M] = gets().split(' ').map((x) => +x);
const matrix = Array(N).fill([]).map((x) => gets().split(' ').map((y) => +y));
let sum = 0;
let maxSum = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < N - 2; i += 1) {
    for (let j = 0; j < M - 2; j += 1) {
        sum += matrix[i][j + 0] + matrix[i + 1][j + 0] + matrix[i + 2][j + 0];
        sum += matrix[i][j + 1] + matrix[i + 1][j + 1] + matrix[i + 2][j + 1];
        sum += matrix[i][j + 2] + matrix[i + 1][j + 2] + matrix[i + 2][j + 2];
        if (sum > maxSum) {
            maxSum = sum;
        }
        sum = 0;
    }
}
print(maxSum);