const getGets = (arr) =>{
    let index =0;
    return () =>{
        const toReturn = arr[index];
        index +=1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '100000',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const N = +gets();
let counter = 0;

for (let i = 1; i <= N; i += 1) {
    let pow = Math.pow(5, i);
    if (pow < N) {
        counter += Math.floor(N / pow);
    } else {
        break;
    }
}

print(counter);