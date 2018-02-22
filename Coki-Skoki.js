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
const arr = gets().split(' ').map(Number).reverse();
const jumps = [arr[0]];
// jumps[0] = arr[0];
const lengths = [0];
// lengths[0] = 0;
for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] < jumps[jumps.length - 1]) {
        jumps.push(arr[i]);
    } else {
        while (jumps.length !== 0 && jumps[jumps.length - 1] <= arr[i]) {
            jumps.pop();
        }
        jumps.push(arr[i]);
    }
    if (jumps.length === 0) {
        lengths.push(0);
    } else {
        lengths.push(jumps.length - 1);
    }
}
print(Math.max(...lengths));
print(lengths.reverse().join(' '));