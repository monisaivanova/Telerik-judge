const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '@*@*@*xxx',
    '1 -1 1 -1 2 1 1 1 1 1 1',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const str = gets().split('');
const arr = gets().split(' ').map((x) => +x);
let food = 0;
let soul = 0;
let dead = 0;
let step = 0;
let counter = 0;
try {
    for (let i = 0; i <= arr.length; i += 1) {

        if (str[step] === '@') {
            soul += 1;
            str[step] = true;
        } else if (str[step] === '*') {
            food += 1;
            str[step] = true;
        } else if (str[step] === 'x') {
            if (step % 2 === 0) {
                if (soul > 0) {
                    soul -= 1;
                    dead += 1;
                    str[step] = '@';
                } else {
                    throw 'err';
                }
            } else if (step % 2 === 1) {
                if (food > 0) {
                    food -= 1;
                    dead += 1;
                    str[step] = '*';
                } else {
                    throw 'err';
                }
            }
        }
        step = (step + arr[i]) % str.length;
        if (step < 0) {
            step += str.length;
        }
        counter += 1;

    }

    print(`Coder souls collected: ${soul}`);
    print(`Food collected: ${food}`);
    print(`Deadlocks: ${dead}`);
} catch (e) {
    print('You are deadlocked, you greedy kitty!');
    print(`Jumps before deadlock: ${counter}`);
}