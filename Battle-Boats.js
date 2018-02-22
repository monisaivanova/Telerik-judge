const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    // '-6',
    // '6',
    // '-11',
    // '3',
    // '1',
    // '-9',
    // '-4',
    // '-11',
    // '-1',
    // '2',
    // '2',
    '-11',
    '6',
    '-6',
    '3',
    '1',
    '-9',
    '-3',
    '-12',
    '-4',
    '-6',
    '-1',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let [x1, y1] = [+gets(), +gets()];
let [x2, y2] = [+gets(), +gets()];
if (x1 < x2) {
    [x1, x2] = [x2, x1];
}
if (y1 < y2) {
    [y1, y2] = [y2, y1];
}
// print(y1, y2);
// print(x1, x2);

const h = +gets();
let dmg = 0;
const cannons = [];
for (let i = 0; i < 3; i += 1) {
    cannons.push([+gets(), +gets()]);
}

for (let i = 0; i < cannons.length; i += 1) {
    const cx = cannons[i][0];
    let cy = cannons[i][1];
    let projectile;
    if (cy > h) {
        projectile = h - Math.abs(cy - h);
    } else {
        projectile = h + Math.abs(cy - h);
    }
    cy = projectile;
    // print(cx, cy);
    if (y1 - y2 < x1 - x2) {
        if (cy < y1 && cy > y2) {
            if (cx === x1 || cx === x2) {
                dmg += 25;
            } else if (cx < x1 && cx > x2) {
                dmg += 100;
            }
        } else if (cy === y1 || cy === y2) {
            if (cx < x1 && cx > x2) {
                dmg += 50;
            } else if (cx === x1 || cx === x2) {
                dmg += 25;
            }
        }
    } else {
        if (cy < y1 && cy > y2) {
            if (cx === x1 || cx === x2) {
                dmg += 50;
            } else if (cx < x1 && cx > x2) {
                dmg += 100;
            }
        } else if (cy === y1 || cy === y2) {
            if (cx < x1 && cx > x2) {
                dmg += 25;
            } else if (cx === x1 || cx === x2) {
                dmg += 25;
            }
        }
    }
}
print(dmg + '%');