const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '1',
    '2',
    '3',
    '4',
    '2',
    '8',
]);
// let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;


const arr = [+gets(), +gets(), +gets(), +gets()];
const R = +gets();
const C = +gets();
for (let i = 4; i < R * C; i += 1) {
    arr.push(arr[i - 1] + arr[i - 2] + arr[i - 3] + arr[i - 4]);
}
let sliceCount = 0;
for (let i = 0; i < R; i += 1) {
    print(arr.slice(sliceCount, sliceCount + C).join(' '));
    sliceCount += C;
}