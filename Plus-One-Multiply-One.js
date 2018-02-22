const getGets = (arr) =>{
    let index =0;
    return () =>{
        const toReturn = arr[index];
        index +=1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '2 4',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const [N, M] = gets().split(' ');
const S = [];
S[1] = Number(N);

let counter = 0;
for (let i = 2; i <= M; i += 1) {
    const x = Math.round(i / 3);
    if (counter === 0) {
        S.push(S[x] + 1);
    } else if (counter === 1) {
        S.push(2 * S[x] + 1);
    } else if (counter === 2) {
        S.push(S[x] + 2);
    }
    counter += 1;
    counter %= 3;
}
print(S[M]);