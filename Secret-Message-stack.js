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
let i = 0;
while (i < str.length) {
    let result = '';
    if (str[i] === '{') {
        arr.push(i);
    } else if (str[i] === '}') {
        const start = Number(arr.pop());
        code = str.slice(start + 1, i);
        for (let j = start - 1; j >= -1; j -= 1) {
            if (isNaN(+str[j]) || j === -1) {
                multiplier = str.slice(j + 1, start);

                result = code.repeat(Number(multiplier));
                print(result);
                str = str.slice(0, j + 1) + result + str.slice(i + 1);
                // print(str);
                i = start - 1;
                break;
            }
        }
        // print(code);
    }
    i += 1;
}
print(str);