const getGets = (arr) =>{
    let index =0;
    return () =>{
        const toReturn = arr[index];
        index +=1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '42 142',
]);
// let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;

const X = gets().split(' ');
const N = +X[0];
const M = +X[1];
let counter = 0;

for (let i = N; i <= M; i += 1) {
    arr = i.toString();
    counter += 1;
    for (let j = 0; j < arr.length; j += 1) {
        // let a = +arr[j];
        if (i % +arr[j] !== 0 && arr[j] !== '0') {
            counter -= 1;
            break;
        }
    }
}
print(counter);