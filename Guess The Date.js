const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '1999',
    '12',
    '31',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

let year = +gets();
let month = +gets();
let day = +gets();

day -= 1;
if (day === 0) {
    month -= 1;
    if (month === 0) {
        year -= 1;
        month = 12;
    }
    if (month === 2 && year % 4 !== 0) {
        day = 28;
    } else if (month === 2) {
        day = 29;
    } else if (month <= 7 && month % 2 === 1) {
        day = 31;
    } else if (month <= 7 && month % 2 === 0) {
        day = 30;
    } else if (month % 2 === 0) {
        day = 31;
    } else {
        day = 30;
    }
}

print(day + '-' + months[month - 1] + '-' + year);