const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '000',
    '0',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;


let counter = 0;
let arr = gets().split('').join('a').split('');
// let result;
const N = +gets();
const generateVariationsWithoutRep = (n, index) => {
    if (index === arr.length) {
        // result = arr.filter((x) => x !== 'b').join('');
        if (eval(arr.join('')) === N) {
            // print(result);
            counter += 1;
        }
        return;
    }

    for (let i = 0; i < n.length; i += 1) {
        if (i === 3 && arr[index - 1] === '0') {
            continue;
        }
        arr[index] = n[i];
        generateVariationsWithoutRep(n, index + 2);
    }
}

const n = ['*', '+', '-', ''];
generateVariationsWithoutRep(n, 1);

print(counter);