const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '6',
    '1 2 3 5 7 1',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const arr = gets().split(' ').map(Number);
const indices = [];

let i = 0;
const used = {};

while (i < n && i >= 0) {
    indices.push(i);
    used[i] = true;
    const nextIndex = arr[i];
    i = nextIndex;
    if (used[i]) {
        const indexOfI = indices.indexOf(i);
        if (typeof indices[indexOfI - 1] !== 'undefined') {
            indices[indexOfI] = `${indices[indexOfI - 1]}(${i}`;
            indices[indexOfI - 1] = '';
        } else {
            indices[indexOfI] = `(${i}`;
        }
        indices[indices.length - 1] = `${indices[indices.length - 1]})`;
        break;
    }
}

print(indices.join(' ').trim());