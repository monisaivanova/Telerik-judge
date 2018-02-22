const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '1122',
    'A1B12C11D2',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const N = gets();
const obj = {};
const decoded = [];
const rgx = new RegExp(/(\D\d+)/);

gets().split(rgx).map((x) => {
    if (x !== '') {
        const keyName = x.match(/\D/);
        const keyValue = x.match(/\d+/);
        obj[keyName[0]] = keyValue[0];
    }
});
const variations = (str, dig) => {
    if (str.length === 0) {
        decoded.push(dig);
    }

    for (const code in obj) {
        if (str.startsWith(obj[code])) {
            variations(str.substring(obj[code].length), dig + code);
        }
    }
};
variations(N, '');
print(decoded.length);
decoded.sort().forEach((x) => print(x));