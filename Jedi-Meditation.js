const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '7',
    'P4 P2 P3 M1 K2 P1 K1',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const N = +gets();
const arr = gets().split(' ');
const P = new Map();
const K = new Map();
const M = new Map();
for (let i = 0; i < N; i += 1) {
    if (arr[i][0] === 'P') {
        P.set(i, arr[i]);
    } else if (arr[i][0] === 'K') {
        K.set(i, arr[i]);
    } else if (arr[i][0] === 'M') {
        M.set(i, arr[i]);
    }
}
const x = [...M.values(), ...K.values(), ...P.values()].join(' ');
print(x);