const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    'a3{cd2{a}f}ef',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

let str = gets();
const arr = [];
let code = '';
let multiplier = '';
let i = str.length - 1;
while (i >= 0) {
    let indicator = 0;
    let result = '';
    if (str[i] === '}') {
        arr.push(i);
    } else if (str[i] === '{') {
        let end = Number(arr.pop());
        code = str.slice(i + 1, end);
        for (let j = i - 1; j >= -1; j -= 1) {
            if (isNaN(+str[j]) || j === -1) {
                multiplier = str.slice(j + 1, i);
                // for (let k = 0; k < +multiplier; k += 1) {
                    result = code.repeat(Number(multiplier));
                // }
                str = str.slice(0, j + 1) + result + str.slice(end + 1);
                indicator += 1;
                // print(str);
                break;
            }
        }
        // print(code);
    }
    if (indicator === 0) {
        i -= 1;
    } else {
        i = str.length - 1;
    }
}
print(str);