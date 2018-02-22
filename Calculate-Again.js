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
    '2',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const multiply = (a, b) => {
    if (+b === 0 || +b === 0) {
        return '0';
    }

    a = a.split('').reverse();
    b = b.split('').reverse();
    const result = [];

    for (let i = 0; a[i] >= 0; i += 1) {
        for (let j = 0; b[j] >= 0; j += 1) {
            if (!result[i + j]) {
                result[i + j] = 0;
            }

            result[i + j] += a[i] * b[j];
        }
    }

    for (let i = 0; result[i] >= 0; i += 1) {
        if (result[i] >= 10) {
            if (!result[i + 1]) {
                result[i + 1] = 0;
            }

            result[i + 1] += parseInt(result[i] / 10);
            result[i] %= 10;
        }
    }

    return result.reverse().join('');
};
const N = +gets();
const K = +gets();
let result = '1';
for (let i = K + 1; i <= N; i += 1) {
    result = multiply(result, i.toString());
}

print(result);