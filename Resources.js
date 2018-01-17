const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '11',
    'main.css needs sub1.css',
    'index.html needs main.js',
    'main.css needs sub2.css',
    'main.js needs partial.html',
    'index.html needs logo.png',
    'index.html needs sub2.css',
    'partial.html needs partial.js',
    'main.js needs player.png',
    'index.html needs main.css',
    'sub2.css needs partial.js',
    'index.html needs partial.html',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const n = +gets();
const obj = {};
let tempArr = [];
let arr = [];
let final = [];
let currentIndex;
let key = 0;

//fill the 'graph'
for (let i = 0; i < n; i += 1) {
    tempArr = gets().split(' needs ');
    if (typeof obj[tempArr[0]] === 'undefined') {
        obj[tempArr[0]] = [];
    }
    obj[tempArr[0]].push(tempArr[1]);
}

// get the element that doesn't depend on anything
for (const x in obj) {
    for (const y in obj) {
        if (obj[y].indexOf(x) > -1) {
            key = 0;
            break;
        } else {
            key = 1;
        }
    }
    if (key === 1) {
        arr.push(x);
    }
}

// do the magic
while (arr.length > 0) {
    arr.sort((a, b) => a < b);
    currentIndex = arr.pop();
    if (final.indexOf(currentIndex) < 0) {
        final.push(currentIndex);
    }

    // check if values have more than 1 dependancy
    if (typeof obj[currentIndex] !== 'undefined') {
        let i = obj[currentIndex].length - 1;
        while (i >= 0) {
            for (const index in obj) {
                if (index !== currentIndex) {
                    if (obj[index].indexOf(obj[currentIndex][i]) > -1) {
                        obj[currentIndex].splice(i, 1);
                        break;
                    }
                }
            }
            i -= 1;
        }

        arr.push(...obj[currentIndex]);
    }
}
print(final.join(' '));