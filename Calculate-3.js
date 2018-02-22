const getGets = (arr) =>{
    let index =0;
    return () =>{
        const toReturn = arr[index];
        index +=1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '10',
    '6',
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
const divide = (a, b) => {
    a = a.split('');
    b = Number(b);
    let temp = 0;
    let quotient = [];

    for (let i = 0; i < a.length; i += 1) {
        temp = temp + a[i];
        quotient.push(Math.floor(Number(temp) / b));
        temp = Number(temp) % b;
    }
    quotient = quotient.join('');

    return quotient;
};

const N = +gets();
const K = +gets();
let result = '1';
let x;
let result2 = '1';
let arr = [];
let arr2 = [];
for (let i = N; i > K; i -= 1) {
    arr.push(i);
}
for (let i = 2; i <= N - K; i += 1) {
    arr2.push(i);
}
for (let i = 0; i < arr2.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
        if (arr[j] % arr2[i] === 0) {
            arr[j] = Number(arr[j]) / Number(arr2[i]);
            arr2[i] = Number(arr2[i]) / Number(arr2[i]);
        }
    }
}
for (let i = 0; i < arr.length; i += 1) {
    x = arr[i].toString();
    result = multiply(result, x);
}
for (let i = 0; i < arr2.length; i += 1) {
    result = divide(result, arr2[i]);
}
for (let i = 0; i < result.length; i += 1) {
    if (result[i] !== '0') {
        x = i;
        break;
    }
}
result = result.slice(x);
print(result);