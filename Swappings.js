const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
    '12',
    '11 5 10 6 9 10'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

// ---------------------------------------

class Node {
    constructor(value, prev) {
        this.value = value;
        this.next = null;
        this.prev = prev || null;

        if (prev) {
            prev.next = this;
        }
    }

    *[Symbol.iterator]() {
        let current = this;
        while (current) {
            yield current.value;
            current = current.next;
        }
    }

    static detach(node) {
        if (node.prev) {
            node.prev.next = null;
        }

        if (node.next) {
            node.next.prev = null;
        }

        node.next = null;
        node.prev = null;
    }

    static attach(left, right) {
        if (left === right) {
            return;
        }

        left.next = right;
        right.prev = left;
    }
}

const n = +gets();
const swappingNumbers = gets().split(' ');

const arr = Array.from({
    length: n + 1,
});

for (let i = 1; i <= n; i++) {
    const node = new Node(i, arr[i - 1]);
    arr[i] = node;
}

let leftEnd = arr[1];
let rightEnd = arr[n];

swappingNumbers.forEach((number) => {
    const middle = arr[number];
    const newLeftEnd = middle.next;
    const newRightEnd = middle.prev;

    Node.detach(middle);
    Node.attach(middle, leftEnd);
    Node.attach(rightEnd, middle);

    leftEnd = newLeftEnd || middle;
    rightEnd = newRightEnd || middle;
})

print([...leftEnd].join(' '))