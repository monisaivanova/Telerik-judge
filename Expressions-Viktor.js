const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
    '123',
    '6',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

// ---------------------------------------

const expressionsCount = (digits, expectedResult, index, currentNumber, currentProduct, currentSum, negative) => {
    if (index === digits.length) {
        const finalSum = currentSum +
            (currentProduct * currentNumber * (negative ? -1 : 1));

        print(finalSum);
        if (finalSum === expectedResult) {
            return 1;
        }

        return 0;
    }

    let result = 0;

    const nextProduct = currentProduct * currentNumber;
    result += expressionsCount(digits, expectedResult, index + 1, digits[index],
        nextProduct, currentSum, negative);

    const nextSum = currentSum +
        (currentProduct * currentNumber * (negative ? -1 : 1));
    result += expressionsCount(digits, expectedResult, index + 1, digits[index], 1, nextSum, false);
    result += expressionsCount(digits, expectedResult, index + 1, digits[index], 1, nextSum, true);

    if (currentNumber !== 0) {
        const nextNumber = currentNumber * 10 + digits[index];
        result += expressionsCount(digits, expectedResult, index + 1, nextNumber, currentProduct, currentSum, negative);
    }

    return result;
};

const digits = gets().split('').map(Number);
const expectedResult = +gets();
const result = expressionsCount(digits, expectedResult, 1, digits[0], 1, 0, false);
print(result);