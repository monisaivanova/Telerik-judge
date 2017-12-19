const getGets = (arr) =>{
    let index =0;
    return () =>{
        const toReturn = arr[index];
        index +=1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '5',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const multiply = (a, b) => {
    if (+b === 0 || +b === 0) {
        return '0';
    }

    a = a.toString().split('').reverse();
    b = b.toString().split('').reverse();
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
        // console.log(temp, quotient);
    }
    quotient = quotient.join('');
    // console.log(typeof quotient);

    return quotient;
};
const n = +gets();
if (n === 0) {
    print(1);
} else {
    let a = 1;
    for (let i = n + 2; i <= 2 * n; i += 1) {
        a = multiply(a, i);
    }
    for (let i = 2; i <= n; i += 1) {
        a = divide(a, i);
    }
    for (let i = 0; i < a.length; i += 1) {
        if (a[i] !== '0') {
            a = a.slice(i);
            break;
        }
    }
    print(a);
}