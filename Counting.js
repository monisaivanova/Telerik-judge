const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '3',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;


const add = (a, b) => {
    if (+a === 0 && +b === 0) {
        return '0';
    }

    a = a.split('').reverse();
    b = b.split('').reverse();
    const result = [];

    for (let i = 0;
        (a[i] >= 0) || (b[i] >= 0); i += 1) {
        const sum = (parseInt(a[i]) || 0) + (parseInt(b[i]) || 0);

        if (!result[i]) {
            result[i] = 0;
        }

        const next = ((result[i] + sum) / 10) | 0;
        result[i] = (result[i] + sum) % 10;

        if (next) {
            result[i + 1] = next;
        }
    }

    return result.reverse().join('');
};

const solve = (arr) => {
    let number = arr[0];
    for (let i = 0; i < 10; i += 1) {
        number = add(number, '1');
        print(number);
    }
};
solve([gets()]);