const getGets = (arr) =>{
    let index =0;
    return () =>{
        const toReturn = arr[index];
        index +=1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '1010101010101011',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

let bin2dec = (num) => {
    return num.split('').reverse().reduce(function (x, y, i) {
        return (y === '1') ? x + Math.pow(2, i) : x;
    }, 0);
}
print(bin2dec(gets()));