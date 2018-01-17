let categories = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' },
    { id: 'cats', 'parent': 'mammals' },
    { id: 'dogs', 'parent': 'mammals' },
    { id: 'chihuahua', 'parent': 'dogs' },
    { id: 'labrador', 'parent': 'dogs' },
    { id: 'persian', 'parent': 'cats' },
    { id: 'siamese', 'parent': 'cats' },
]

let makeTree = (categories, parent) => {
    let node = {};
    categories
    .filter((x) => x.parent === parent)
    .forEach((x) => 
        node[x.id] = makeTree(categories, x.id))
    return node;
}

console.log(makeTree(categories, null));
