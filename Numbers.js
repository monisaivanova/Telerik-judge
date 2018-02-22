const getGets = (str) => {
    let index = 0;
    return () => {
        const toReturn = str[index];
        index += 1;
        return toReturn;
    };
};
const test = `set 2
print
front-add 1
print
back-add 2
print
front-remove
print
set 4
print
print
front-add 1
print
back-add 3
print
reverse
print
end`.split('\n');
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const getFunctions = () => {
    const set = (n) => {
        x = n | 0;
    };

    const print = () => {
        print(x);
    };

    const frontadd = (n) => {
        x = x.toString();
        n = n.toString();
        x = n.concat(x);
    };

    const frontremove = () => {
        x = x.toString();
        x = x.substr(1);
    };

    const backadd = (n) => {
        x = x.toString();
        n = n.toString();
        x = x.concat(n);
    };

    const backremove = () => {
        x = x.toString();
        x = x.slice(0, -1);
    };

    const reverse = () => {
        x = x.toString().split('').reverse().join('');
    };

    const decrease = () => {
        return;
    };

    return {
        set,
        print,
        frontadd,
        frontremove,
        backadd,
        backremove,
        reverse,
        decrease,
    };
};
const Commands = getFunctions();

let x;

while (true) {
    const command = gets().split(' ');
    let [comm, o] = command;
    if (comm === 'print') {
        print(x);
    } else if (comm === 'end') {
        break;
    } else {
        comm = comm.split('').filter((ele) => ele !== '-').join('');
        Commands[comm](o);
    }
}