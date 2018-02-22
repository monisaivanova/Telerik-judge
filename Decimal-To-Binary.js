const getGets = (arr) =>{
    let index =0;
    return () =>{
        const toReturn = arr[index];
        index +=1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '43691',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

let decimalNumber = +gets();

let binaryNumber = '';
let remainder;

do {
    remainder = Math.floor(decimalNumber % 2);
    decimalNumber = Math.floor(decimalNumber / 2);
    binaryNumber = remainder.toString() + binaryNumber;
} while (decimalNumber > 0);
print(binaryNumber);