const getGets = (arr) =>{
    let index =0;
    return () =>{
        const toReturn = arr[index];
        index +=1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '6883',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

let N = +gets();
let result = [];
let remainder = 0;
const obj = {
    '10': 'A',
    '11': 'B',
    '12': 'C',
    '13': 'D',
    '14': 'E',
    '15': 'F',
}
do {
    remainder = N % 16;
    N = Math.floor(N / 16);
    result.push(remainder);
} while (N > 0);

result = result.map((a) => obj[a] === undefined ? a : obj[a]).reverse().join('');
print(result);