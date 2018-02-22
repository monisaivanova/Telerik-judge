const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '11',
    '1500',
    '4',
    '6',
    '5',
    '3',
    '3',
    '9',
    '100',
    '2',
    '3',
    '1',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();

let firstCarSpeed = Number.MAX_SAFE_INTEGER;
let currSpeedSum = 0;
let currSequence = 0;
let bestSpeedSum = 0;
let bestSequence = 0;

for (let i = 0; i < n; i += 1) {
    const currCarSpeed = +gets();
    if (currCarSpeed <= firstCarSpeed) {
        firstCarSpeed = currCarSpeed;
        if (currSequence > bestSequence) {
            bestSequence = currSequence;
            bestSpeedSum = currSpeedSum;
        } else if (currSequence === bestSequence) {
            if (currSpeedSum > bestSpeedSum) {
                bestSpeedSum = currSpeedSum;
            }
        }
        currSpeedSum = currCarSpeed;
        currSequence = 1;
    } else {
        currSequence += 1;
        currSpeedSum += currCarSpeed;
    }
}
if (currSequence > bestSequence) {
    bestSpeedSum = currSpeedSum;
} else if (currSequence === bestSequence) {
    if (currSpeedSum > bestSpeedSum) {
        bestSpeedSum = currSpeedSum;
    }
}
print(bestSpeedSum);