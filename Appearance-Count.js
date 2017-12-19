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
    '28 6 21 6 -7856 73 73 -56',
    '73',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const N = +gets();
let arr = gets().split(' ');
const X = gets();
arr = arr.filter(x => x === X);
print(arr.length);