const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '17',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
let sum = 0;

for (let i = 0; i <= n / 7; i += 1) {
    for (let j = 0; j <= (n - 7 * i) / 5; j += 1) {
        if ((n - 7 * i - j * 5) % 2 !== 0) {
            if (i * 7 + j * 5 === n) {
                sum += 1;
            }
        } else {
            sum += 1;
        }
    }
}
print(sum);
