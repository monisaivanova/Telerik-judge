const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '3',
    '6',
    '100',
    '200',
    '300',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const N = +gets();
const neededTubes = +gets();
const arr = Array(N).fill().map((x) => +gets());

let end = Math.max(...arr);
let start = Math.min(...arr);
let currentBest;
while (start <= end) {
    let currentTubes = 0;
    for (const x of arr) {
        currentTubes += (x / start) | 0;
    }
    if (currentTubes < neededTubes) {
        end = start - 1;
        start = (start / 2) + 1 | 0;
    } else if (currentTubes >= neededTubes) {
        currentBest = start;
        start = ((start + end) / 2) + 1 | 0;
    }
}
print(currentBest);