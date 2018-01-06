const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '123',
    '6',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;


let counter = 0;
let arr = gets().split('').join('a').split('');
let digitsCount = arr.length;
let result;
const N = +gets();
const generateVariationsWithoutRep = (n, k, index, variation) => {
    if (index === digitsCount) {
        // converts the current variation into an evauluatable string
        result = arr.filter((x) => x !== 'b').join('');
        print(result);
        
        // evaluates the string and increases the counter if correct
        if (eval(result) === N) {
            counter += 1;
        }
        return;
    }

    for (let i = 0; i < n.length; i += 1) {
        // check if a combination of numbers (e.g. 012) starts with 0
        // and dismisses the variation
        if (n[i] === 'b' && arr[index - 1] === '0') {
            continue;
        }
        arr[index] = n[i];
        generateVariationsWithoutRep(n, k, index + 2, variation);
    }
}

const n = ['*', '+', '-', 'b'];
const k = arr.length - 1;
const variation = Array.from({
    length: k,
});
generateVariationsWithoutRep(n, k, 1, variation);

print(counter);