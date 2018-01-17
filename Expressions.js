const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '105',
    '5',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;


let counter = 0;
const arr = gets().split('').join(' ').split('');
// let result;
const N = +gets();
const generateVariationsWithoutRep = (n, index) => {
    if (index === arr.length) {
        if (eval(arr.join('')) === N) {
            counter += 1;
        }
        return;
    }

    for (let i = 0; i < n.length; i += 1) {
        if (arr[index - 1] === '0') {
            if (i === 3) {
                continue;
            }
        }
        arr[index] = n[i];
        generateVariationsWithoutRep(n, index + 2);
    }
};

const n = ['*', '+', '-', ''];
generateVariationsWithoutRep(n, 1);

print(counter);