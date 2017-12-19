const getGets = (arr) =>{
    let index =0;
    return () =>{
        const toReturn = arr[index];
        index +=1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '374',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const N = +gets();
let counter = 0;
const maxOperations = (a) => {
    if (a === 1) {
        return counter;
    }
    if (a % 2 === 0) {
        counter += 1;
        a /= 2;
        return maxOperations(a);
    } else if (((a - 1) / 2) % 2 === 0 || a === 3) {
        counter += 1;
        a -= 1;
        return maxOperations(a);
    } else if (((a + 1) / 2) % 2 === 0) {
        counter += 1;
        a += 1;
        return maxOperations(a);
    }
};
print(maxOperations(N));