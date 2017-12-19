const getGets = (arr) =>{
    let index =0;
    return () =>{
        const toReturn = arr[index];
        index +=1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '60 40',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

let [A, B] = gets().split(' ');
do {
    if (B > A) {
        [A, B] = [B, A];
    }
    A = A % B;
} while (A > 0);
print(B);