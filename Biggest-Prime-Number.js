const getGets = (arr) =>{
    let index =0;
    return () =>{
        const toReturn = arr[index];
        index +=1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '126',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const isPrime = (n) => {
    let divisor = 2;
    const sqrtn = Math.sqrt(n);
    while (divisor <= sqrtn) {

        if (n % divisor === 0) {
            return false;
        }

        divisor += 1;
    }

    return true;
};

const N = +gets();
for (let i = N; N > 0; i -= 1) {
    if (isPrime(i) === true) {
        print(i);
        break;
    }
}