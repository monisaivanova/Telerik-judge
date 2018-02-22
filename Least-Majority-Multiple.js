const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '30',
    '42',
    '70',
    '35',
    '90',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

let arr = [+gets(), +gets(), +gets(), +gets(), +gets()].sort();

let counter = 0;
let num = arr[0];
let currentBest = Number.MAX_SAFE_INTEGER;
let j = 0;
while (j < arr.length) {
    // for (let i = 0; i < arr.length; i += 1) {
    //     if (num % arr[i] === 0) {
    //         counter += 1;
    //     }
    // }
    arr.map((x) => num % x === 0 ? counter++ : 0);

    if (counter >= 3) {
        if (num < currentBest) {
            currentBest = num;
        }
        j += 1;
        num = arr[j];
        counter = 0;
    } else {
        num += arr[j];
        counter = 0;
    }
}
print(currentBest);