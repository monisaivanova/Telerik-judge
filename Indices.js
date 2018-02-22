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
    '1 2 3 5 7 1',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const N = +gets();
const arr = gets().split(' ').map(Number);
const arr2 = [0];
let i = 0;
while (true) {
    arr2.push(arr[i]);
    arr[i] = true;
    i = arr2[arr2.length - 1];

    if (typeof arr[i] === 'undefined') {
        arr2.pop();
        print(arr2.join(' '));
        break;
    } else if (arr[i] === true) {
        // print(i);
        arr2.pop();
        // print(arr2);
        const firstInCycle = arr2.indexOf(i);
        const final = arr2.slice(0, firstInCycle).join('') + '(' + arr2.slice(firstInCycle, arr2.length).join(' ') + ')';
        print(final);
        break;
    }
}