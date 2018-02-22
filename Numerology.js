const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '18790314',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const numbers = gets().split('').map(Number);
const arr = Array(10).fill(0);

const func = (values, sums) => {
    if (values.length === 1) {
        sums[values[0]] += 1;
        return;
    }

    for (let i = 0; i < values.length - 1; i += 1) {
        const a = values[i];
        const b = values[i + 1];

        values.splice(i, 2, calc(a, b));
        func(values, sums);
        values.splice(i, 0, a);
        values[i + 1] = b;
    }
};

const calc = (a, b) => {
    return (a + b) * (a ^ b) % 10;
};
func(numbers, arr);
print(arr.join(' '));