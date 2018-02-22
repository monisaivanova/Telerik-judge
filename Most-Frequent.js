const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '13',
    '4',
    '1',
    '1',
    '4',
    '2',
    '3',
    '4',
    '4',
    '1',
    '2',
    '4',
    '9',
    '3',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const maxInArray = (x) => {
    let max = 0;
    for (let number of x) {
        if (number > max) {
            max = number;
        }
    }
    return max;
};

let N = +gets();
let inputArray = [];
for (let j = 0; j < N; j += 1) {
    inputArray.push(+gets());
}
N = maxInArray(inputArray);


const numbers = [];
for (let i = 0; i <= N; i += 1) {
    numbers.push(0);
}

for (const number of inputArray) {
    numbers[number] += 1;
}

const mostFrequent = maxInArray(numbers);
const x = `${numbers.indexOf(mostFrequent)} (${mostFrequent} times)`;
print(x);