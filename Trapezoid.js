const getGets = (arr) =>{
    let index =0;
    return () =>{
        const toReturn = arr[index];
        index +=1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '5',
]);
// let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;

const n = +gets();
const matrix = [];
for (let i = 0; i <= n; i += 1) {
    matrix.push(Array.from({
        length: 2 * n
    }).fill('.'));
}
for (let i = 0; i < 2 * n; i += 1) {
    matrix[n][i] = '*';
    if (i >= n) {
        matrix[0][i] = '*';
    }
    if (i >= 1 && i < n) {
        matrix[i][2 * n - 1] = '*';
        matrix[i][n - i] = '*';
    }
}
for (let i = 0; i <= n; i += 1) {
    print(matrix[i].join(''));
}