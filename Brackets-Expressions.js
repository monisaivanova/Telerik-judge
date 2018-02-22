const getGets = (arr) =>{
    let index =0;
    return () =>{
        const toReturn = arr[index];
        index +=1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '5 * (123 * (1 + 3) + ((4 - 3) / 6))',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const str = gets();
const arr = [];
for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '(') {
        arr.push(i);
    } else if (str[i] === ')') {
        print(str.slice(Number(arr.pop()), i + 1));
    }
}