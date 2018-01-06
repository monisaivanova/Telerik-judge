const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '28,1,45,255',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const arr = gets().split(',').map(Number);
const finalNumber = [];
for (let i = 0; i < arr.length; i += 1) {
    let decimalNumber = arr[i];

    let binaryNumber = '';
    let remainder;

    do {
        remainder = Math.floor(decimalNumber % 2);
        decimalNumber = Math.floor(decimalNumber / 2);
        binaryNumber = remainder.toString() + binaryNumber;
    } while (decimalNumber > 0);

    while (binaryNumber.length < 8) {
        binaryNumber = '0' + binaryNumber;
    }

    let newNumber = '';
    if (i % 2 === 0) {
        for (let j = binaryNumber.length - 1; j >= 0; j -= 2) {
            newNumber = binaryNumber.substr(j, 1) + newNumber;
        }
    } else {
        for (let j = binaryNumber.length - 2; j >= 0; j -= 2) {
            newNumber = binaryNumber.substr(j, 1) + newNumber;
        }
    }
    finalNumber.push(newNumber);
}
print(finalNumber.join(''));