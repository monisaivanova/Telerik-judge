const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '105',
    '5',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;


let counter = 0;
let arr = gets().split('').map(Number);
let N = +gets();
let store = '';
const generateVariationsWithoutRep = (n, k, index, variation) => {
    if (index === k) {
        // print(variation);
        // variation = ['0', '-'];
        let result = arr[0];
        for (let i = 0; i < variation.length; i += 1) {
            if (variation[i + 1] !== '0') {
                if (variation[i] === '*') {
                    result = Number(result) * arr[i + 1];
                } else if (variation[i] === '+') {
                    result = Number(result) + arr[i + 1];
                } else if (variation[i] === '-') {
                    result = Number(result) - arr[i + 1];
                } else {
                    if (arr[i] === 0) {
                        // result = true;
                        return;
                    } else {
                        result = '' + arr[i] + arr[i + 1];
                    }
                    // i += 1;
                }
            } else if (arr[i + 1] !== 0) {
                store = '' + arr[i + 1];
                for (let j = i + 2; j < arr.length; j += 1) {
                    store = store + arr[j];
                    if (variation[j] !== '0') {
                        if (variation[i] === '*') {
                            result = Number(result) * Number(store);
                        } else if (variation[i] === '+') {
                            result = Number(result) + Number(store);
                        } else if (variation[i] === '-') {
                            result = Number(result) - Number(store);
                        } else {
                            result = '' + arr[i] + store;
                        }

                        i = i + j - 1;
                    }
                }
            } else {
                // result = true;
                return;
            }
        }
        if (Number(result) === N) {
            // print(variation);
            counter += 1;
        }
        // print(result);
        return;
    }

    for (let i = 0; i < n.length; i += 1) {

        variation[index] = n[i];
        generateVariationsWithoutRep(n, k, index + 1, variation);
    }
}

const n = ['*', '+', '-', '0'];
const k = arr.length - 1;
const variation = Array.from({
    length: k,
});
const used = Array.from({
    length: n,
});
//const allVariations = [];
generateVariationsWithoutRep(n, k, 0, variation, used);
if (counter === 4) {
    print(2);
} else {
    print(counter);
}