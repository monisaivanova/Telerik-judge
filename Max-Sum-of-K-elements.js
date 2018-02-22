const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '8',
    '3',
    '3',
    '2',
    '3',
    '-2',
    '5',
    '4',
    '2',
    '7',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const N = +gets();
const M = +gets();
const numbers = [];
for (let i = 0; i < N; i += 1) {
    numbers.push(+gets());
}
let sum = 0;
for (let i = 0; i < M; i += 1) {
    let x = numbers.indexOf(Math.max(...numbers));
    sum += numbers.splice(x, 1) | 0;
}
print(sum);