const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '5',
    '5 4 3 1 2',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const n = +gets();
const input = gets().split(' ').map((x) => +x);
let k = -1;
let l = -1;

for (let i = input.length - 2; i >= 0; i--) {
    if ((input[i] > input[i + 1])) {
        continue;
    }
    k = input.indexOf(input[i]);
    break;
}

for (let j = input.length - 1; j >= 0; j--) {
    if (input[j] > input[k]) {
        l = input.indexOf(input[j]);
        break;
    }
}


[input[k], input[l]] = [input[l], input[k]];
const result = input.splice(0, k + 1);
input.reverse();
const result2 = result.concat(input);
print(result2.join(' '));