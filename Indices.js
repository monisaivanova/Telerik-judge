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
const arr2 = [];
const arr3 = [];
arr2.length = 1000;
arr3.length = 1000;
const map = new Map();
map.set(0, 0);
let x = 0;
const func = (a) => {
    if (map.has(arr[a]) || arr[a] === 0) {
        map.set(arr[a], `(${arr[a]}`)
        x += 1;
        return;
    }
    if (arr[a] < arr.length && arr[a] > 0) {
        map.set(arr[a], arr[a]);
        func(arr[a]);
    } else {
        return;
    }
};
func(0);
if (x === 0) {
    print([...map.values()].join(' '));
} else {
    x = [...map.values()].join(' ');
    if (x.indexOf('(') > 0) {
        x = x.slice(0, x.indexOf('(') - 1) + x.slice(x.indexOf('('));
    }
    print(x + ')');
}