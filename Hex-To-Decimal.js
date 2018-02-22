const getGets = (arr) =>{
    let index =0;
    return () =>{
        const toReturn = arr[index];
        index +=1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '4ED528CBB4',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const N = [...gets()];
const obj = {
    'A': '10',
    'B': '11',
    'C': '12',
    'D': '13',
    'E': '14',
    'F': '15',
};
const result = N.map((a) => isNaN(a) ? obj[a] : a).reverse();
let final = 0;
for (let i = 0; i < result.length; i += 1) {
    final += result[i] * Math.pow(16, i);
}
print(final);