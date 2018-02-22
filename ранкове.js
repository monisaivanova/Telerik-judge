const getGets = (arr) =>{
    let index =0;
    return () =>{
        const toReturn = arr[index];
        index +=1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '4',
    '1 7 3 9',
]);
// let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;

const map = [];
const N = +gets();
const M = gets().split(' '); // .map((x) => +x);
const arr = [].concat(M);
arr.sort(function (a, b) {
    return b - a;
});
for (let i = 0; i < N; i += 1) {
    map.push(`${arr.indexOf(M[i]) + 1}`);
}
print(map.join(' '));