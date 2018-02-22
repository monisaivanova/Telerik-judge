const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = `5
milk 1.2
orange juice 2.9
icecream 2
cake 5.1
beer 1.2
5
2 beer, 3 orange juice
milk, cake
icecream, 2 cake
icecream, icecream, 3 icecream
5 orange juice, 3 orange juice, orange juice, orange juice`.split('\n');
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const prices = {};
for (let i = 0; i < n; i += 1) {
    const str = gets();

    for (let k = str.length - 1; k >= 0; k -= 1) {
        if (str[k] === ' ') {
            const product = str.slice(0, k);
            const price = str.slice(k + 1);
            prices[product] = Number(price);
            break;
        }
    }
}

const m = +gets();
const printable = [];
for (let i = 0; i < m; i += 1) {
    let totalPrice = 0;
    const list = gets().split(', ');

    for (let j = 0; j < list.length; j += 1) {
        let item = list[j];

        if (prices[item]) {
            totalPrice += prices[item];
        } else {
            for (let k = 0; k < item.length; k += 1) {
                if (item[k] === ' ') {
                    const multiplier = Number(item.slice(0, k));
                    item = item.slice(k + 1);
                    if (prices[item]) {
                        totalPrice += (prices[item] * multiplier);
                    }
                    break;
                }
            }
        }
    }
    printable.push(totalPrice);
    // print(totalPrice.toFixed(2)) ;
}
printable.forEach((e) => print(e.toFixed(2)));