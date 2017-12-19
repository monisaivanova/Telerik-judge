const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '9',
    '-1',
    '0',
    '1',
    '2',
    '3',
    '2',
    '1',
    '0',
    '-1',
]);
// let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;

const N = +gets();
let obj = {};
for (let i = 0; i < N; i += 1) {
    const x = gets();
    if (obj[x]) {
        obj[x] += 1;
    } else {
        obj[x] = 1;
    }
}
for (const key in obj) {
    if (obj[key] % 2 !== 0) {
        print(key);
    }
}