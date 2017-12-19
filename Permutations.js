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
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const generatePermutations = (inputArr) => {
    const result = [];

    const permute = (arr, m = []) => {
        if (arr.length === 0) {
            result.push(m);
        } else {
            for (let i = 0; i < arr.length; i++) {
                const curr = arr.slice();
                const next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next));
            }
        }
    };

    permute(inputArr);
    return result;
};

const n = +gets();
const input = [];

for (let i = 1; i <= n; i++) {
    input.push(i);
}

let combs = [];
combs = generatePermutations(input);

combs.forEach((x) => {
    print(x.join(' '));
});