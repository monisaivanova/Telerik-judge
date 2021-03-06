const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '6',
    '1 1 1 1 1 1',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

gets();
const arr = gets().split(' ').map(Number);
const jumps = Array.from({
    length: arr.length
}).fill(0);

for (let i = arr.length - 1; i > -1; i--) {
    let j = i + 1;
    while (j < arr.length) {
        if (arr[j] > arr[i]) {
            jumps[i] = jumps[j] + 1;
            break;
        } else if (jumps[j] === 0) {
            break;
        }

        j++;
    }
}

print(Math.max(...jumps));
print(jumps.join(' '));